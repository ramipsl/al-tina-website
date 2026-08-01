import { whyAlTina } from "@/data/site";
import {
  Container,
  Rule,
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Primitives";
import { delay } from "@/lib/motion";

export function WhyAlTina() {
  return (
    <Section id="why-al-tina" surface="white">
      <Container>
        <Rule />
        <div className="grid gap-10 pt-12 lg:grid-cols-12 lg:gap-8 lg:pt-16">
          <div className="lg:col-span-4">
            <div data-reveal="">
              <SectionLabel>{whyAlTina.label}</SectionLabel>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div data-reveal="">
              <SectionHeading>{whyAlTina.headline}</SectionHeading>
            </div>
          </div>
        </div>

        <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {whyAlTina.items.map((item, index) => (
            <li
              key={item.title}
              data-reveal=""
              style={delay((index % 3) * 80)}
              className="border-t border-rule pt-6"
            >
              <span aria-hidden="true" className="block size-1.5 bg-gold" />
              <h3 className="mt-5 font-serif text-[1.15rem] leading-snug text-forest">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
