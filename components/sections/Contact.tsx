import { business, contact, founder } from "@/data/site";
import { ActionLink, MailIcon, PhoneIcon } from "@/components/ui/Actions";
import {
  Container,
  Rule,
  Section,
  SectionLabel,
} from "@/components/ui/Primitives";
import { PANEL_BORDER, PANEL_SHADOW, PANEL_SURFACE } from "@/components/ui/Panel";
import { delay } from "@/lib/motion";

export function Contact() {
  return (
    <Section id="contact" surface="white">
      <Container>
        <Rule />
        <div className="grid gap-14 pt-12 lg:grid-cols-12 lg:gap-10 lg:pt-16">
          <div className="lg:col-span-7">
            <div data-reveal="">
              <SectionLabel>{contact.label}</SectionLabel>
            </div>

            <h2
              data-reveal=""
              style={delay(80)}
              className="mt-8 text-h2 max-w-[19ch] text-forest"
            >
              {contact.headline}
            </h2>

            <p
              data-reveal=""
              style={delay(140)}
              className="mt-8 max-w-[52ch] text-lead text-muted"
            >
              {contact.body}
            </p>

            {business.email.href ? (
              <div
                data-reveal=""
                style={delay(200)}
                className="mt-12"
              >
                <ActionLink
                  href={business.email.href}
                  variant="outline"
                  icon={<MailIcon />}
                  className={`!${PANEL_BORDER.raised} !${PANEL_SURFACE.raised} rounded-xl !${PANEL_SHADOW.raised} hover:!bg-forest/12 hover:!border-forest/75`}
                >
                  {contact.secondaryCta}
                </ActionLink>
              </div>
            ) : null}
          </div>

          {/* Direct details — no form, no gate. The phone number is the focal point. */}
          <div className="lg:col-span-5">
            <div
              data-reveal=""
              style={delay(160)}
              className={`overflow-hidden rounded-xl border border-rule-strong ${PANEL_SHADOW.raised}`}
            >
              <a
                href={business.phone.href}
                className="group block border-b-2 border-gold bg-forest p-8 transition-colors duration-300 hover:bg-forest-soft"
              >
                <span className="text-label font-medium text-gold uppercase">
                  Direct line — call {founder.shortName}
                </span>
                <span className="mt-4 flex items-center gap-3 font-serif text-[2rem] leading-tight text-ivory sm:text-[2.2rem]">
                  {business.phone.display}
                  <PhoneIcon className="size-5 shrink-0 text-gold transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </span>
                <span className="mt-2 block text-sm text-sage">
                  The fastest way to reach us. No form, no queue.
                </span>
              </a>

              <dl className="flex flex-col">
                {business.email.href ? (
                  <DetailRow label="Email">
                    <a
                      href={business.email.href}
                      className="text-forest underline decoration-gold underline-offset-4 transition-colors hover:text-gold-deep"
                    >
                      {business.email.display}
                    </a>
                  </DetailRow>
                ) : null}
                <DetailRow label="Location">
                  {business.location.display}
                </DetailRow>
                {business.linkedin.href ? (
                  <DetailRow label="LinkedIn">
                    <a
                      href={business.linkedin.href}
                      className="text-forest underline decoration-gold underline-offset-4 transition-colors hover:text-gold-deep"
                    >
                      {business.linkedin.display}
                    </a>
                  </DetailRow>
                ) : null}
                {contact.responseNote ? (
                  <DetailRow label="Response">{contact.responseNote}</DetailRow>
                ) : null}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function DetailRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule px-8 py-5 last:border-b-0">
      <dt className="text-label font-medium text-muted uppercase">{label}</dt>
      <dd className="text-sm text-charcoal">{children}</dd>
    </div>
  );
}
