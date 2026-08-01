import { whoWeServe } from "@/data/site";
import {
  Container,
  Lead,
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Primitives";
import { delay } from "@/lib/motion";

export function WhoWeServe() {
  return (
    <Section id="who-we-serve" surface="sage">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div data-reveal="">
              <SectionLabel>{whoWeServe.label}</SectionLabel>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div data-reveal="">
              <SectionHeading>{whoWeServe.headline}</SectionHeading>
            </div>
            <div data-reveal="" style={delay(80)}>
              <Lead className="mt-8">{whoWeServe.intro}</Lead>
            </div>
          </div>
        </div>

        {/* Two equally weighted columns — neither audience is an afterthought. */}
        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          {whoWeServe.groups.map((group, groupIndex) => (
            <div
              key={group.heading}
              className={
                groupIndex === 1
                  ? "lg:border-l lg:border-rule-strong lg:pl-16"
                  : undefined
              }
            >
              <div
                data-reveal=""
                className="flex items-center gap-3 border-b border-rule-strong pb-4"
              >
                <span aria-hidden="true" className="size-1.5 bg-gold" />
                <h3 className="font-sans text-label font-semibold text-forest uppercase">
                  {group.heading}
                </h3>
              </div>

              <ul>
                {group.items.map((item, index) => (
                  <li
                    key={item.title}
                    data-reveal=""
                    style={delay(index * 80)}
                    className="border-b border-rule py-6"
                  >
                    <h4 className="font-serif text-[1.2rem] leading-snug text-forest">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
