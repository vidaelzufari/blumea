import {
  PageHero,
  Container,
  SectionHeading,
  ExecutionModel,
  CTASection,
} from '@/components/sections/Shared';
import { MagneticButton } from '@/components/motion/MagneticButton';
import { services, engagementModels } from '@/data/site';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata(
  'Advisory | BLUMEA',
  'Senior digital strategy, product, transformation and fractional leadership. Clear direction, practical structure and hands-on execution.',
  '/advisory',
);
export default function Advisory() {
  return (
    <main id="main">
      <PageHero
        index="01"
        label="BLUMEA ADVISORY"
        lines={['DIGITAL STRATEGY', 'THAT GETS', 'EXECUTED.']}
        copy="We work with leadership teams that need clarity, structure and senior execution capability across digital transformation and product delivery."
      />
      <section className="advisory-services section-pad">
        <Container>
          <SectionHeading
            index="EXPERTISE"
            label="SENIOR THINKING. HANDS-ON EXECUTION."
          />
          {services.slice(0, 4).map((s, i) => (
            <article id={s.id} key={s.id} className="advisory-detail">
              <span className="detail-number">0{i + 1}</span>
              <div>
                <h2>{s.title}</h2>
                <p>{s.description}</p>
                {i === 3 && (
                  <p>
                    Leadership without a permanent executive structure. We work
                    alongside your team through change, launches, restructuring
                    and delivery improvement.
                  </p>
                )}
                <MagneticButton href="/contact">
                  LET’S DISCUSS {i === 3 ? 'LEADERSHIP' : 'YOUR PRIORITIES'}
                </MagneticButton>
              </div>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </section>
      <ExecutionModel />
      <section className="ways section-pad">
        <Container>
          <SectionHeading index="ENGAGEMENTS" label="WAYS TO WORK TOGETHER" />
          <h2>
            The right support.
            <br />
            <em>The right structure.</em>
          </h2>
          <div className="ways-grid">
            {engagementModels.map(([name, copy], i) => (
              <article key={name}>
                <span className="eyebrow">0{i + 1}</span>
                <h3>{name}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <MagneticButton href="/contact">DISCUSS AN ENGAGEMENT</MagneticButton>
        </Container>
      </section>
      <CTASection />
    </main>
  );
}
