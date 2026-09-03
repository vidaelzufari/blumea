import { SectionHeading } from '@/components/sections/Shared';
import { ContactForm } from '@/components/sections/ContactForm';
import { site } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Contact | BLUMEA',
  'Let’s talk about your digital transformation, product or next venture. Start a conversation with BLUMEA in Dubai.',
  '/contact',
);
export default function Contact() {
  return (
    <main id="main" className="contact-hero container">
      <SectionHeading index="04" label="START A CONVERSATION" />
      <div className="contact-intro">
        <h1>
          LET’S TALK
          <br />
          ABOUT WHAT
          <br />
          YOU’RE
          <br />
          <em>BUILDING.</em>
        </h1>
        <p>
          If you’re navigating a digital transformation, building a new product
          or looking for experienced leadership to strengthen execution, we’d be
          happy to start a conversation.
        </p>
        <div className="contact-details">
          <a href={`mailto:${site.email}`}>{site.email} ↗</a>
          <p>{site.location}</p>
        </div>
      </div>
      <ContactForm />
    </main>
  );
}
