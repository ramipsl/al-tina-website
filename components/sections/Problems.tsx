import { problems } from "@/data/site";
import {
  Container,
  Lead,
  Rule,
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Primitives";
import { delay } from "@/lib/motion";

export function Problems() {
  return (
    <Section id="problems" surface="sage">
      <Container>
        <Rule />
        <div className="grid gap-10 pt-12 lg:grid-cols-12 lg:gap-8 lg:pt-16">
          <div className="lg:col-span-4">
            <div data-reveal="">
              <SectionLabel>{problems.label}</SectionLabel>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div data-reveal="">
              <SectionHeading>{problems.headline}</SectionHeading>
            </div>
            <div data-reveal="" style={delay(80)}>
              <Lead className="mt-8">{problems.intro}</Lead>
            </div>
          </div>
        </div>

        {/* Hairline grid — separators are borders, not gaps between cards. */}
        <ul className="mt-16 grid gap-px border-y border-rule bg-rule sm:grid-cols-2 lg:mt-20 xl:grid-cols-3">
          {problems.items.map((item, index) => (
            <li
              key={item.title}
              data-reveal=""
              style={delay((index % 3) * 80)}
              className="group flex flex-col bg-white-warm p-8 lg:p-10"
            >
              <span className="text-label font-medium text-gold-deep tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-serif text-[1.2rem] leading-snug text-forest">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
