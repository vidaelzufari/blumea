'use client';
import { useState, useRef } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { topics, site } from '@/data/site';
import { validateContact, type ContactErrors } from '@/lib/contact';
export function ContactForm() {
  const [topic, setTopic] = useState<string | null>(null);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');
  const [notice, setNotice] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLOutputElement>(null);
  async function submit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    const raw = Object.fromEntries(new FormData(event.currentTarget));
    const { data, errors: validation } = validateContact({ ...raw, topic });
    setErrors(validation);
    if (Object.keys(validation).length) {
      const key = Object.keys(validation)[0];
      document.getElementById(key)?.focus();
      return;
    }
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as {
        error?: string;
        errors?: ContactErrors;
      };
      if (!response.ok) {
        if (result.errors) setErrors(result.errors);
        throw new Error(
          result.error || 'We couldn’t submit your message. Please try again.',
        );
      }
      setStatus('success');
      requestAnimationFrame(() => successRef.current?.focus());
    } catch (error) {
      setStatus('error');
      setNotice(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.',
      );
    }
  }
  if (status === 'success')
    return (
      <output className="form-success" tabIndex={-1} ref={successRef}>
        <span className="success-arrow" aria-hidden="true">
          ↗
        </span>
        <h2>
          A good place
          <br />
          to <em>start.</em>
        </h2>
        <p>
          Your enquiry has been received. Thank you for telling us what you’re
          building.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setTopic(null);
            setErrors({});
            setNotice('');
          }}
        >
          START ANOTHER CONVERSATION ↗
        </button>
      </output>
    );
  return (
    <form ref={formRef} className="contact-form" onSubmit={submit} noValidate>
      <div className="field-grid">
        {(
          [
            { name: 'name', label: 'Name', auto: 'name', type: 'text' },
            {
              name: 'company',
              label: 'Company',
              auto: 'organization',
              type: 'text',
            },
            {
              name: 'role',
              label: 'Role',
              auto: 'organization-title',
              type: 'text',
            },
            { name: 'email', label: 'Email', auto: 'email', type: 'email' },
            { name: 'phone', label: 'Phone', auto: 'tel', type: 'tel' },
          ] as const
        ).map((f) => (
          <div
            className={`form-field ${f.name === 'phone' ? 'full' : ''}`}
            key={f.name}
          >
            <label htmlFor={f.name}>
              {f.label} {f.name === 'phone' && <span>(optional)</span>}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              autoComplete={f.auto}
              required={f.name !== 'phone'}
              maxLength={
                f.name === 'email' ? 254 : f.name === 'phone' ? 40 : 150
              }
              aria-invalid={!!errors[f.name]}
              aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
              placeholder={
                f.name === 'email'
                  ? 'you@company.com'
                  : f.name === 'phone'
                    ? '+971'
                    : undefined
              }
            />
            {errors[f.name] && (
              <span className="field-error" id={`${f.name}-error`}>
                {errors[f.name]}
              </span>
            )}
          </div>
        ))}
        <div className="form-field full">
          <label htmlFor="topic">What would you like to discuss?</label>
          <Select
            value={topic}
            onValueChange={(value) => setTopic(value)}
            items={topics.map((t) => ({ label: t, value: t }))}
          >
            <SelectTrigger
              id="topic"
              className="topic-trigger"
              aria-required="true"
              aria-invalid={!!errors.topic}
              aria-describedby={errors.topic ? 'topic-error' : undefined}
            >
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent className="topic-popup" alignItemWithTrigger={false}>
              {topics.map((t) => (
                <SelectItem className="topic-item" value={t} key={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.topic && (
            <span className="field-error" id="topic-error">
              {errors.topic}
            </span>
          )}
        </div>
        <div className="form-field full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            minLength={10}
            maxLength={5000}
            placeholder="A little about your ambition, challenge or idea…"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <span className="field-error" id="message-error">
              {errors.message}
            </span>
          )}
        </div>
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <button
        className="form-submit"
        type="submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'SENDING…' : 'START THE CONVERSATION'}
        <span aria-hidden="true">↗</span>
      </button>
      <p className="form-note">
        We use these details to respond to your enquiry. Prefer email?{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      {status === 'error' && (
        <p className="form-error" role="alert">
          {notice} You can also{' '}
          <a href={`mailto:${site.email}`}>email us directly</a>.
        </p>
      )}
    </form>
  );
}
