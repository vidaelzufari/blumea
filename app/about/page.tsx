import {
  PageHero,
  Container,
  SectionHeading,
  ManifestoBlock,
  CTASection,
} from '@/components/sections/Shared';
import { Expansion } from '@/components/visuals/Expansion';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'About | BLUMEA',
  'A Dubai-based digital studio built from execution experience. Meet our founder and the principles behind BLUMEA’s advisory and venture work.',
  '/about',
);
export default function About() {
  return (
    <main id="main">
      <PageHero
        index="03"
        label="ABOUT BLUMEA"
        lines={['TRANSFORMATION', 'EXPERIENCE.', 'APPLIED DIFFERENTLY.']}
        copy="A digital strategy, product and venture company. Built around the belief that the best thinking is thinking that becomes something."
      />
      <section className="about-studio section-pad">
        <Container>
          <SectionHeading
            index="THE COMPANY"
            label="ONE PERSPECTIVE. TWO EXPRESSIONS."
          />
          <div className="studio-grid">
            <h2>
              Advisory.
              <br />
              Ventures.
              <br />
              <em>Shared discipline.</em>
            </h2>
            <div>
              <p>
                BLUMEA operates at the intersection of strategy, product,
                technology, design and execution.
              </p>
              <p>
                We help organisations navigate digital change. We also create
                businesses of our own. Each informs the other: real delivery
                sharpens our advice, and strategic perspective shapes what we
                build.
              </p>
              <p>Based in Dubai. Built for international ambition.</p>
            </div>
          </div>
        </Container>
      </section>
      <section className="founder section-pad">
        <Container>
          <SectionHeading
            index="THE FOUNDER"
            label="EXPERIENCE BEHIND THE PERSPECTIVE"
          />
          <div className="founder-grid">
            <div className="founder-visual">
              <Expansion />
              <span>STRATEGY / PRODUCT / EXECUTION</span>
            </div>
            <div className="founder-bio">
              <h2>Vida</h2>
              <span className="eyebrow">
                FOUNDER & DIGITAL TRANSFORMATION ADVISOR
              </span>
              <p>
                Vida is a digital product and transformation leader with more
                than a decade of experience building and managing digital
                products, multidisciplinary teams and complex delivery
                organisations.
              </p>
              <p>
                Her experience spans product strategy, programme delivery, UX
                and customer experience, quality assurance, technology delivery,
                digital operations and organisational transformation.
              </p>
              <p>
                Before founding BLUMEA, she held senior leadership roles
                overseeing digital product and delivery functions, working with
                executive teams to translate strategic priorities into shipped
                products and measurable business outcomes.
              </p>
              <p>
                She founded BLUMEA to combine senior advisory work with venture
                building, applying the same execution discipline to client
                organisations and products built internally.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="quote-section">
        <Container>
          <span className="eyebrow">A SHARED CONVICTION</span>
          <blockquote>
            Building digital is not just about technology.
            <br />
            <em>It is about people, decisions, priorities and execution.</em>
          </blockquote>
        </Container>
      </section>
      <div id="philosophy">
        <ManifestoBlock full />
      </div>
      <CTASection />
    </main>
  );
}
