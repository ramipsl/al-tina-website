import { approach } from "@/data/site";
import {
  Container,
  Lead,
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Primitives";
import { ApproachMotif } from "@/components/ui/ApproachMotif";
import { delay } from "@/lib/motion";

export function Approach() {
  return (
    <Section id="approach" surface="forest" className="relative overflow-hidden">
      <ApproachMotif />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div data-reveal="">
              <SectionLabel tone="dark">{approach.label}</SectionLabel>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div data-reveal="">
              <SectionHeading tone="dark">{approach.headline}</SectionHeading>
            </div>
            <div data-reveal="" style={delay(80)}>
              <Lead tone="dark" className="mt-8">
                {approach.intro}
              </Lead>
            </div>
          </div>
        </div>

        {/* Four steps, separated by hairlines rather than boxed as cards. */}
        <ol className="mt-16 grid gap-px border-y border-rule-dark bg-rule-dark sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {approach.steps.map((step, index) => (
            <li
              key={step.number}
              data-reveal=""
              style={delay(index * 90)}
              className="flex flex-col bg-forest p-8 lg:p-9"
            >
              <span
                aria-hidden="true"
                className="size-2 shrink-0 bg-gold"
              />
              <span className="mt-6 text-label font-medium text-gold tabular-nums">
                {step.number}
              </span>
              <h3 className="mt-3 font-serif text-[1.3rem] leading-snug text-ivory">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-sage">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <p
          data-reveal=""
          className="mt-10 max-w-[62ch] border-l-2 border-gold pl-5 text-sm leading-relaxed text-sage"
        >
          {approach.note}
        </p>
      </Container>
    </Section>
  );
}
