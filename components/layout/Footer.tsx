import { business, navigation } from "@/data/site";
import { Container } from "@/components/ui/Primitives";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  /* Generated at build time rather than hard-coded. */
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep text-ivory">
      <Container>
        <div className="grid gap-12 border-t border-rule-dark py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-5">
            <Logo tone="dark" />
            <p className="mt-6 max-w-[34ch] text-sm leading-relaxed text-sage">
              Founder-led healthcare operations and growth consulting for
              pharmacies and physician-led clinics.
            </p>
            <p className="mt-6 text-sm text-sage">{business.location.display}</p>
          </div>

          <FooterColumn title="Navigate" className="lg:col-span-3">
            {navigation.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact" className="lg:col-span-2">
            <FooterLink href={business.phone.href}>
              {business.phone.display}
            </FooterLink>
            {business.email.href ? (
              <FooterLink href={business.email.href}>
                {business.email.display}
              </FooterLink>
            ) : null}
            {business.linkedin.href ? (
              <FooterLink href={business.linkedin.href}>
                {business.linkedin.display}
              </FooterLink>
            ) : null}
          </FooterColumn>

          <FooterColumn title="Business" className="lg:col-span-2">
            <li className="text-sm text-sage">
              {business.legalName}
              {business.registration.number ? (
                <span className="mt-1 block text-sage/80">
                  {business.registration.label}
                  <br />
                  {business.registration.number}
                </span>
              ) : null}
            </li>
            {business.location.address ? (
              <li className="text-sm text-sage/80">
                {business.location.address}
              </li>
            ) : null}
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-4 border-t border-rule-dark py-8 text-xs text-sage sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.legalName}. {business.name} is a division of{" "}
            {business.legalName}.
          </p>
          <p className="text-sage/80">{business.privacyNote}</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <h2 className="font-sans text-label font-medium text-ivory uppercase">
        {title}
      </h2>
      <ul className="mt-5 flex flex-col gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="text-sm text-sage transition-colors duration-200 hover:text-gold"
      >
        {children}
      </a>
    </li>
  );
}
