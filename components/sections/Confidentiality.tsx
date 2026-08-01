import { confidentiality } from "@/data/site";
import { Container, Section, SectionLabel } from "@/components/ui/Primitives";
import { ConfidentialityMotif } from "@/components/ui/ConfidentialityMotif";
import { delay } from "@/lib/motion";

export function Confidentiality() {
  return (
    <Section id="confidentiality" surface="forest-deep">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div data-reveal="">
              <SectionLabel tone="dark">{confidentiality.label}</SectionLabel>
            </div>

            <h2
              data-reveal=""
              style={delay(80)}
              className="mt-8 text-h2 max-w-[26ch] text-ivory"
            >
              {confidentiality.headline}
            </h2>

            <hr
              data-reveal-rule=""
              style={delay(160)}
              className="mt-10 h-px w-24 border-0 bg-gold"
            />

            <p
              data-reveal=""
              style={delay(200)}
              className="mt-10 max-w-[58ch] text-lead text-ivory"
            >
              {confidentiality.intro}
            </p>

            <ul
              data-reveal=""
              style={delay(260)}
              className="mt-8 flex flex-wrap gap-3"
            >
              {confidentiality.regulations.map((regulation) => (
                <li
                  key={regulation}
                  className="inline-flex items-center gap-2 rounded-md border border-rule-dark px-3 py-1.5 text-[0.7rem] font-medium tracking-wide text-sage"
                >
                  <span aria-hidden="true" className="size-1 shrink-0 bg-gold" />
                  {regulation}
                </li>
              ))}
            </ul>

            <ul className="mt-16 grid gap-x-10 gap-y-10 lg:mt-20 sm:grid-cols-3">
              {confidentiality.pillars.map((pillar, index) => (
                <li
                  key={pillar.title}
                  data-reveal=""
                  style={delay(320 + index * 80)}
                  className="border-t border-rule-dark pt-7"
                >
                  <span aria-hidden="true" className="block size-1.5 bg-gold" />
                  <h3 className="mt-5 font-serif text-[1.15rem] leading-snug text-ivory">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/75">
                    {pillar.body}
                  </p>
                </li>
              ))}
            </ul>

            <p
              data-reveal=""
              style={delay(600)}
              className="mt-14 max-w-[62ch] border-l-2 border-gold pl-5 text-sm leading-relaxed text-sage"
            >
              {confidentiality.closingNote}
            </p>
          </div>

          <div
            data-reveal=""
            style={delay(240)}
            className="hidden lg:col-span-4 lg:col-start-9 lg:block"
          >
            <ConfidentialityMotif className="max-w-[20rem]" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
