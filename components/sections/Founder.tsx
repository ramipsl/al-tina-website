import { business, founder, founderSection } from "@/data/site";
import { ArrowIcon } from "@/components/ui/Actions";
import {
  Container,
  Rule,
  Section,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/Primitives";
import { ImageFrame } from "@/components/ui/ImagePlaceholder";
import { delay } from "@/lib/motion";

export function Founder() {
  return (
    <Section id="founder" surface="ivory">
      <Container>
        <Rule />

        {/* Heading row — matches the rhythm used by every other section. */}
        <div className="grid gap-10 pt-12 lg:grid-cols-12 lg:gap-8 lg:pt-16">
          <div className="lg:col-span-4">
            <div data-reveal="">
              <SectionLabel>{founderSection.label}</SectionLabel>
            </div>
          </div>
          <div className="lg:col-span-8">
            <div data-reveal="">
              <SectionHeading>{founderSection.headline}</SectionHeading>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          {/* Portrait and verifiable details */}
          <div className="lg:col-span-5">
            <div data-reveal="" className="relative">
              {/*
                Source photo is square (886×886) — a matching 1:1 frame shows
                the whole image with no crop and no scale, rather than the
                zoomed 4:5 crop used previously.

                `priority` loads it eagerly rather than lazily: the file is
                tiny (<40KB), and without this, the gradient/name overlay
                (pure CSS, no network dependency) can render on top of an
                still-empty frame while the browser decides this
                below-the-fold image is close enough to fetch — which reads
                as a broken/missing photo rather than a loading delay.
              */}
              <ImageFrame
                src={business.founderPortraitSrc}
                alt={`${founder.name}, ${founder.role} at ${business.name}`}
                aspect="1 / 1"
                sizes="(min-width: 1024px) 40vw, 90vw"
                priority
              />

              {/* Restrained lower-third gradient so the name/title sit
                  legibly on the photo instead of below it. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest-deep/90 via-forest-deep/45 to-transparent"
              />
              <div
                data-reveal=""
                style={delay(80)}
                className="absolute inset-x-0 bottom-0 p-5 sm:p-7"
              >
                <h3 className="font-serif text-[1.4rem] leading-tight text-ivory sm:text-[1.6rem]">
                  {founder.name}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-sage">
                  {founder.role}
                </p>
              </div>
            </div>

            <div data-reveal="" style={delay(140)} className="mt-8">
              {/* Confirmed facts only — rows are omitted, never blanked, until confirmed. */}
              <dl className="flex flex-col border-y border-rule">
                <Detail label="Standing" value={founder.standing} />
                {founder.credentials ? (
                  <Detail label="Credentials" value={founder.credentials} />
                ) : null}
                {founder.registration ? (
                  <Detail label="Registration" value={founder.registration} />
                ) : null}
                <Detail label="Based in" value={business.location.display} />
              </dl>

              {business.linkedin.href ? (
                <a
                  href={business.linkedin.href}
                  className="group mt-8 inline-flex items-center gap-2.5 text-sm font-medium text-forest"
                >
                  <span className="border-b border-gold pb-1">
                    View LinkedIn profile
                  </span>
                  <ArrowIcon className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </a>
              ) : null}
            </div>
          </div>

          {/* Editorial column */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-6">
              {founderSection.body.map((paragraph, index) => (
                <p
                  key={paragraph}
                  data-reveal=""
                  style={delay(index * 70)}
                  className={
                    index === 0
                      ? "text-lead text-charcoal"
                      : "leading-relaxed text-muted"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {founderSection.principles.map((principle, index) => (
                <li
                  key={principle.title}
                  data-reveal=""
                  style={delay(index * 70)}
                  className="border-t border-rule pt-5"
                >
                  <h4 className="text-sm font-semibold text-forest">
                    {principle.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {principle.body}
                  </p>
                </li>
              ))}
            </ul>

            {founder.biographyNote ? (
              <p data-reveal="" className="mt-10 text-sm leading-relaxed text-muted">
                {founder.biographyNote}
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule py-4 last:border-b-0">
      <dt className="text-label font-medium text-muted uppercase">{label}</dt>
      <dd className="text-sm text-forest">{value}</dd>
    </div>
  );
}
