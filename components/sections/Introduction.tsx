import { introduction } from "@/data/site";
import {
  Container,
  Rule,
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Primitives";
import { panel } from "@/components/ui/Panel";
import { cn } from "@/lib/cn";
import { delay } from "@/lib/motion";

/*
 * `blur: false` — these cards sit on the section's flat `white-warm`
 * surface, not over any real visual content, so a backdrop blur would be a
 * no-op that still forces a compositing layer.
 */
const CARD = panel({ variant: "quiet", gold: true, blur: false });

export function Introduction() {
  return (
    <Section id="introduction" surface="white">
      <Container>
        <Rule />
        <div className="grid gap-10 pt-12 lg:grid-cols-12 lg:gap-8 lg:pt-16">
          <div className="lg:col-span-4">
            <div data-reveal="">
              <SectionLabel>{introduction.label}</SectionLabel>
            </div>

            <div
              data-reveal=""
              style={delay(80)}
              className={cn("mt-8 rounded-xl p-6", CARD)}
            >
              <span aria-hidden="true" className="size-1.5 shrink-0 bg-gold" />
              <p className="mt-4 font-serif text-lg leading-snug text-forest">
                {introduction.principle.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {introduction.principle.body}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div data-reveal="">
              <SectionHeading className="max-w-[24ch]">
                {introduction.headline}
              </SectionHeading>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-1 lg:grid-cols-3">
              {introduction.points.map((point, index) => (
                <li
                  key={point.title}
                  data-reveal=""
                  style={delay(140 + index * 90)}
                  className={cn("flex flex-col rounded-xl p-6", CARD)}
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 shrink-0 bg-gold"
                  />
                  <p className="mt-4 text-sm font-semibold text-forest">
                    {point.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {point.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
