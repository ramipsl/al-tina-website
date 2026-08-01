import { services, type Service } from "@/data/site";
import {
  Container,
  Lead,
  Rule,
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Primitives";
import { panel } from "@/components/ui/Panel";
import { cn } from "@/lib/cn";
import { delay } from "@/lib/motion";

/*
 * `blur: false` — these sit on the section's flat white surface, not over
 * any real visual content, so a backdrop blur would be a no-op that still
 * forces a compositing layer. `quiet` keeps them subtle: the editorial row
 * around them is still the main event.
 */
const FACET_PANEL = panel({ variant: "quiet", blur: false });

export function Services() {
  return (
    <Section id="services" surface="white">
      <Container>
        <Rule />
        <div className="grid gap-10 pt-12 lg:grid-cols-12 lg:gap-8 lg:pt-16">
          <div className="lg:col-span-4">
            <div data-reveal="">
              <SectionLabel>{services.label}</SectionLabel>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div data-reveal="">
              <SectionHeading>{services.headline}</SectionHeading>
            </div>
            <div data-reveal="" style={delay(80)}>
              <Lead className="mt-8">{services.intro}</Lead>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          {services.items.map((service) => (
            <ServiceRow key={service.number} service={service} />
          ))}
          <Rule />
        </div>
      </Container>
    </Section>
  );
}

function ServiceRow({ service }: { service: Service }) {
  return (
    <article className="group grid gap-8 border-t border-rule py-12 lg:grid-cols-12 lg:gap-8 lg:py-16">
      <header className="lg:col-span-4">
        <div
          data-reveal=""
          className="flex items-baseline gap-4 lg:sticky lg:top-28"
        >
          <span className="text-label font-medium text-gold-deep tabular-nums transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
            {service.number}
          </span>
          <h3 className="text-h3 max-w-[16ch] text-forest">{service.title}</h3>
        </div>
      </header>

      <div className="lg:col-span-8">
        <p
          data-reveal=""
          style={delay(60)}
          className="max-w-[58ch] text-lead text-charcoal"
        >
          {service.summary}
        </p>

        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          <Facet label="The problem" value={service.problem} delayMs={120} />
          <Facet
            label="What we improve"
            value={service.work}
            delayMs={180}
          />
          <Facet label="The outcome" value={service.outcome} delayMs={240} />
        </dl>
      </div>
    </article>
  );
}

function Facet({
  label,
  value,
  delayMs,
}: {
  label: string;
  value: string;
  delayMs: number;
}) {
  return (
    <div
      data-reveal=""
      style={delay(delayMs)}
      className={cn("rounded-xl p-5", FACET_PANEL)}
    >
      <dt className="text-label font-medium text-gold-deep uppercase">
        {label}
      </dt>
      <dd className="mt-3 text-sm leading-relaxed text-muted">{value}</dd>
    </div>
  );
}
