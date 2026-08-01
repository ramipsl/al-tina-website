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
              className="mt-8 text-h2 max-w-[18ch] text-ivory"
            >
              {confidentiality.headline}
            </h2>

            <hr
              data-reveal-rule=""
              style={delay(160)}
              className="mt-10 h-px w-24 border-0 bg-gold"
            />

            <div className="mt-10 max-w-[62ch] space-y-6">
              {confidentiality.body.map((paragraph, index) => (
                <p
                  key={paragraph}
                  data-reveal=""
                  style={delay(200 + index * 70)}
                  className={
                    index === 0
                      ? "text-lead text-ivory"
                      : "leading-relaxed text-sage"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
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
