import { site } from '@/data/site';
import { validateContact } from '@/lib/contact';
export const runtime = 'nodejs';
const MAX_BYTES = 20000;
async function readBody(request: Request) {
  const reader = request.body?.getReader();
  if (!reader) throw new Error('empty');
  const decoder = new TextDecoder();
  let size = 0;
  let body = '';
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BYTES) {
        await reader.cancel();
        throw new Error('large');
      }
      body += decoder.decode(value, { stream: true });
    }
    return body + decoder.decode();
  } finally {
    reader.releaseLock();
  }
}
export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  const allowed = [new URL(request.url).origin, new URL(site.url).origin];
  if (origin && !allowed.includes(origin))
    return Response.json(
      { error: 'This request could not be verified.' },
      { status: 403 },
    );
  if (!request.headers.get('content-type')?.includes('application/json'))
    return Response.json(
      { error: 'Expected a JSON request.' },
      { status: 415 },
    );
  let input: Record<string, unknown>;
  try {
    const parsed = JSON.parse(await readBody(request));
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed))
      throw new Error('invalid');
    input = parsed;
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error && error.message === 'large'
            ? 'Your message is too large.'
            : 'Please check your message and try again.',
      },
      {
        status: error instanceof Error && error.message === 'large' ? 413 : 400,
      },
    );
  }
  const { data, errors } = validateContact(input);
  if (data.website) return Response.json({ ok: true });
  if (Object.keys(errors).length)
    return Response.json(
      { error: 'Please check the highlighted fields.', errors },
      { status: 422 },
    );
  const reference = crypto.randomUUID();
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Structured JSON prevents log injection. Logs contain enquiry data: restrict
    // access and retention, and connect Resend before relying on email delivery.
    const { website: _honeypot, ...enquiry } = data;
    console.info(
      JSON.stringify({
        event: 'blumea.contact.received',
        reference,
        receivedAt: new Date().toISOString(),
        enquiry,
      }),
    );
    return Response.json({ ok: true, reference });
  }
  if (!process.env.RESEND_FROM_EMAIL) {
    console.error(
      JSON.stringify({
        event: 'blumea.contact.configuration_error',
        reference,
      }),
    );
    return Response.json(
      {
        error:
          'The enquiry service is temporarily unavailable. Please email us directly.',
      },
      { status: 503 },
    );
  }
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(10000),
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL,
        to: [process.env.CONTACT_TO_EMAIL || site.email],
        reply_to: data.email,
        subject: `BLUMEA enquiry: ${data.topic}`,
        text: `Reference: ${reference}\nName: ${data.name}\nCompany: ${data.company}\nRole: ${data.role}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\nTopic: ${data.topic}\n\n${data.message}`,
      }),
    });
    if (!response.ok) throw new Error('delivery');
    return Response.json({ ok: true, reference });
  } catch {
    console.error(
      JSON.stringify({ event: 'blumea.contact.delivery_failed', reference }),
    );
    return Response.json(
      {
        error:
          'We couldn’t deliver your enquiry. Please try again or email us directly.',
      },
      { status: 502 },
    );
  }
}
