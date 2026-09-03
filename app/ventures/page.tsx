import {
  PageHero,
  Container,
  SectionHeading,
  VentureShowcase,
  CTASection,
} from '@/components/sections/Shared';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Ventures | BLUMEA',
  'We create and operate digital and consumer businesses. Discover Juvia and Petit Corner Shop, ventures built by BLUMEA.',
  '/ventures',
);
export default function Ventures() {
  return (
    <main id="main">
      <PageHero
        index="02"
        label="BLUMEA VENTURES"
        lines={['BUILDING WHAT', 'WE BELIEVE', 'SHOULD EXIST.']}
        copy="We use our own ideas, product expertise and execution capability to create and operate new businesses. Building keeps our thinking honest."
      />
      <section className="ventures-page section-pad">
        <Container>
          <VentureShowcase detailed />
        </Container>
      </section>
      <section className="venture-method section-pad">
        <Container>
          <SectionHeading index="THE APPROACH" label="HOW WE BUILD" />
          <h2>
            From a good question
            <br />
            to a <em>real business.</em>
          </h2>
          <ol>
            {[
              'Discover',
              'Validate',
              'Design',
              'Build',
              'Launch',
              'Learn',
              'Scale',
            ].map((step, i) => (
              <li key={step}>
                <span>0{i + 1}</span>
                {step}
                <span aria-hidden="true">↗</span>
              </li>
            ))}
          </ol>
          <p>
            Customer insight, product strategy, design, technology and
            disciplined execution. Connected from idea to functioning business.
          </p>
          <div className="more-to-come">
            More to come<span>↗</span>
          </div>
        </Container>
      </section>
      <CTASection />
    </main>
  );
}
