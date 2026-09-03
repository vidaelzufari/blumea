import { AnimatedText, Reveal } from '@/components/motion/Reveal';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { Expansion } from '@/components/visuals/Expansion';
import {
  Container,
  SectionHeading,
  ServiceList,
  ExecutionModel,
  Leadership,
  VentureShowcase,
  ManifestoBlock,
  CTASection,
} from '@/components/sections/Shared';
import { expertise } from '@/data/site';
export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-meta">
          <span>DIGITAL STRATEGY. PRODUCTS. VENTURES.</span>
          <span>DUBAI, UAE ↗</span>
        </div>
        <h1>
          <AnimatedText>FROM DIGITAL</AnimatedText>
          <AnimatedText className="offset">AMBITION</AnimatedText>
          <span className="last-line">
            TO <em>EXECUTION.</em>
          </span>
        </h1>
        <Expansion />
        <div className="hero-bottom">
          <p>
            Senior thinking. Hands-on execution.
            <br />
            We turn digital priorities into things that move.
          </p>
          <MagneticButton href="/contact">START A CONVERSATION</MagneticButton>
          <a href="#perspective" className="scroll-link">
            SCROLL TO EXPLORE ↓
          </a>
        </div>
      </section>
      <section id="perspective" className="intro">
        <span className="eyebrow">01 / OUR PERSPECTIVE</span>
        <Reveal>
          <h2>
            Strategy is only
            <br />
            valuable when
            <br />
            it <em>moves.</em>
          </h2>
        </Reveal>
        <div className="intro-copy">
          <p>
            BLUMEA helps organisations translate digital ambition into products,
            operating models and transformation programmes that actually move
            forward.
          </p>
          <p>
            We connect senior strategic thinking with the discipline to design,
            build and operate.
          </p>
        </div>
      </section>
      <section className="services section-pad">
        <Container>
          <SectionHeading index="02" label="WHAT WE DO" />
          <div className="services-heading">
            <h2>
              We advise.
              <br />
              We design.
              <br />
              <em>We build.</em>
            </h2>
            <p>
              From the first difficult question
              <br />
              to the next meaningful release.
              <br />
              Strategy, product and execution,
              <br />
              working as one.
            </p>
          </div>
          <ServiceList />
        </Container>
      </section>
      <ExecutionModel />
      <Leadership />
      <section className="expertise section-pad">
        <Container>
          <SectionHeading index="05" label="CONNECTED EXPERTISE" />
          <h2>
            The space
            <br />
            <em>between disciplines.</em>
          </h2>
          <ul className="expertise-wall">
            {expertise.map((word, i) => (
              <li key={word} className={i % 4 === 0 ? 'featured' : ''}>
                {word}
                <span aria-hidden="true"> / </span>
              </li>
            ))}
          </ul>
        </Container>
        <div className="ticker" aria-hidden="true">
          <span>
            STRATEGY → PRODUCT → DESIGN → TECHNOLOGY → EXECUTION → VENTURES
            →{' '}
          </span>
          <span>
            STRATEGY → PRODUCT → DESIGN → TECHNOLOGY → EXECUTION → VENTURES
            →{' '}
          </span>
        </div>
      </section>
      <section className="ventures-section section-pad">
        <Container>
          <SectionHeading index="06" label="OUR OWN IDEAS. IN THE WORLD." />
          <div className="ventures-intro">
            <h2>
              We don’t just
              <br />
              advise. <em>We build.</em>
            </h2>
            <p>
              The same strategy, product and execution principles. Applied to
              ventures of our own.
            </p>
          </div>
          <VentureShowcase />
          <div className="ventures-outro">
            <span className="eyebrow">MORE VENTURES IN DEVELOPMENT.</span>
            <MagneticButton href="/ventures">
              DISCOVER BLUMEA VENTURES
            </MagneticButton>
          </div>
        </Container>
      </section>
      <section className="experience section-pad">
        <Container>
          <SectionHeading
            index="BLUMEA"
            label="BUILT FROM EXECUTION EXPERIENCE"
          />
          <div className="experience-grid">
            <h2>
              Perspective
              <br />
              with <em>practice.</em>
            </h2>
            <div>
              <p>
                Executive-level perspective. Hands-on product experience.
                Cross-functional leadership.
              </p>
              <p>
                We work where business, product, technology, design, quality and
                operations meet — connecting international teams and complex
                delivery environments to a clear direction.
              </p>
              <MagneticButton href="/about">MEET BLUMEA</MagneticButton>
            </div>
          </div>
        </Container>
      </section>
      <ManifestoBlock />
      <CTASection />
    </main>
  );
}
