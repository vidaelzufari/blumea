import Link from 'next/link';
import { Reveal, AnimatedText } from '@/components/motion/Reveal';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { Expansion } from '@/components/visuals/Expansion';
import { steps, services, principles, ventures } from '@/data/site';
export function Container({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`container ${className}`}>{children}</div>;
}
export function SectionHeading({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="section-heading">
      <span>
        {index} / {label}
      </span>
      <span aria-hidden="true">↘</span>
    </div>
  );
}
export function PageHero({
  index,
  label,
  lines,
  copy,
}: {
  index: string;
  label: string;
  lines: string[];
  copy: string;
}) {
  return (
    <section className="page-hero container">
      <SectionHeading index={index} label={label} />
      <h1>
        {lines.map((line, i) => (
          <AnimatedText
            key={line}
            className={i === lines.length - 1 ? 'accent-line' : ''}
          >
            {line}
          </AnimatedText>
        ))}
      </h1>
      <div className="page-hero-bottom">
        <span className="eyebrow">STRATEGY → EXECUTION</span>
        <p>{copy}</p>
      </div>
    </section>
  );
}
export function ServiceList() {
  return (
    <div className="service-list">
      {services.map((s, i) => (
        <Link
          className="service-row"
          key={s.id}
          href={i === 4 ? '/ventures' : `/advisory#${s.id}`}
        >
          <span className="service-number">0{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.description}</p>
          <span className="service-arrow" aria-hidden="true">
            ↗
          </span>
        </Link>
      ))}
    </div>
  );
}
export function ExecutionModel() {
  return (
    <section className="execution section-pad">
      <Container>
        <SectionHeading index="03" label="THE EXECUTION MODEL" />
        <div className="execution-heading">
          <Reveal>
            <h2>
              From complexity
              <br />
              to <em>momentum.</em>
            </h2>
          </Reveal>
          <p>
            Clear thinking. Connected teams.
            <br />A practical path from here to next.
          </p>
        </div>
        <ol className="process-grid">
          {steps.map(([title, copy], i) => (
            <li key={title}>
              <span className="process-number">0{i + 1}</span>
              <h3>
                {title}
                <span aria-hidden="true">↗</span>
              </h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
export function Leadership() {
  return (
    <section className="leadership section-pad">
      <Container>
        <SectionHeading index="04" label="FRACTIONAL LEADERSHIP" />
        <div className="leadership-layout">
          <h2>
            Senior
            <br />
            leadership.
            <span>
              Without the
              <br />
              full-time
              <br />
              structure.
            </span>
          </h2>
          <div>
            <div className="leadership-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p>Not every organisation needs another permanent executive.</p>
            <p>
              We provide fractional digital, product and transformation
              leadership for organisations navigating change, launching products
              or strengthening execution.
            </p>
            <MagneticButton href="/advisory#leadership">
              EXPLORE ADVISORY
            </MagneticButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
export function VentureVisual({ id }: { id: string }) {
  return id === 'juvia' ? (
    <div
      className="venture-art juvia-art"
      aria-label="Juvia conceptual product direction"
    >
      <div className="juvia-brand">
        juvia<span>Making room for everyday life.</span>
      </div>
      <div className="meal-interface">
        <div className="mock-nav">
          juvia <span>YOUR WEEK, SIMPLIFIED</span>
        </div>
        <h4>
          One less thing
          <br />
          to think about.
        </h4>
        <div className="meal-days">
          <span>MON</span>
          <span>TUE</span>
          <span>WED</span>
          <span>THU</span>
          <span>FRI</span>
        </div>
        <div className="meal-tile">
          <div className="plate">
            <span />
            <span />
            <span />
          </div>
          <div>
            <small>TONIGHT’S INSPIRATION</small>
            <strong>
              A little comfort.
              <br />A lot of flavour.
            </strong>
            <span>Family favourites, thoughtfully planned.</span>
          </div>
        </div>
        <div className="mock-bottom">
          A plan that makes space for you. <span>↗</span>
        </div>
      </div>
      <span className="art-caption">CONCEPT DIRECTION / FAMILY TECH</span>
    </div>
  ) : (
    <div
      className="venture-art petit-art"
      aria-label="Petit Corner Shop brand concept"
    >
      <div className="petit-label">A LITTLE CURIOSITY GOES A LONG WAY.</div>
      <div className="petit-brand">
        petit
        <br />
        <span>corner shop</span>
      </div>
      <div className="play-blocks" aria-hidden="true">
        <i className="block arch" />
        <i className="block sphere" />
        <i className="block cube" />
        <i className="block small" />
      </div>
      <span className="art-caption">THOUGHTFUL THINGS FOR LITTLE PEOPLE.</span>
    </div>
  );
}
export function VentureShowcase({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className={`venture-showcase ${detailed ? 'detailed' : ''}`}>
      {ventures.map((v, i) => (
        <article id={v.id} className={`venture ${v.theme}`} key={v.id}>
          <div className="venture-heading">
            <span className="eyebrow">
              0{i + 1} / {v.category.toUpperCase()}
            </span>
            <span>BLUMEA VENTURES ↗</span>
          </div>
          {detailed ? (
            <VentureVisual id={v.id} />
          ) : (
            <Link
              href={`/ventures#${v.id}`}
              className="venture-preview"
              aria-label={`Explore ${v.name}`}
            >
              <VentureVisual id={v.id} />
              <span className="view-project">EXPLORE ↗</span>
            </Link>
          )}
          <div className="venture-copy">
            <h3>{v.name}</h3>
            <div>
              <p>{v.description}</p>
              {detailed && (
                <>
                  <p className="venture-detail">{v.detail}</p>
                  <span className="eyebrow">{v.strap}</span>
                </>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
export function ManifestoBlock({ full = false }: { full?: boolean }) {
  return (
    <section className="principles section-pad">
      <Container>
        <SectionHeading index="07" label="WHAT WE BELIEVE" />
        <div className="principle-list">
          {principles.slice(0, full ? 6 : 3).map(([a, b], i) => (
            <Reveal key={a}>
              <div className="principle">
                <span>0{i + 1}</span>
                <h3>
                  {a}
                  <br />
                  <em>{b}</em>
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
        {!full && (
          <MagneticButton href="/about#philosophy">
            OUR PHILOSOPHY
          </MagneticButton>
        )}
      </Container>
    </section>
  );
}
export function CTASection() {
  return (
    <section className="closing">
      <Container>
        <SectionHeading index="NEXT" label="START SOMETHING THAT MATTERS" />
        <h2>
          Let’s build
          <br />
          <em>what’s next.</em>
        </h2>
        <div className="closing-bottom">
          <p>
            Navigating a transformation? Building a product?
            <br />
            Let’s talk about what needs to happen next.
          </p>
          <MagneticButton href="/contact">START A CONVERSATION</MagneticButton>
        </div>
        <Expansion className="closing-form" />
      </Container>
    </section>
  );
}
