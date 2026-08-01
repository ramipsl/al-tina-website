import { hero } from "@/data/site";
import { ActionLink } from "@/components/ui/Actions";
import { Container } from "@/components/ui/Primitives";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { panel } from "@/components/ui/Panel";
import { cn } from "@/lib/cn";
import { delay } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ivory pt-24 pb-section lg:pt-32"
    >
      <HeroBackground />
      <Container className="relative">
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p
              data-reveal=""
              className="flex items-center gap-3 text-label font-medium text-muted uppercase"
            >
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              {hero.label}
            </p>

            <h1
              data-reveal=""
              style={delay(80)}
              className="mt-8 text-display text-forest"
            >
              {hero.headline}
            </h1>

            <p
              data-reveal=""
              style={delay(160)}
              className="mt-8 max-w-[54ch] text-lead text-muted"
            >
              {hero.body}
            </p>

            <div data-reveal="" style={delay(240)} className="mt-12">
              <ActionLink
                href="#services"
                variant="outline"
                className="!border-rule/70 !bg-ivory/92 rounded-xl !shadow-[0_12px_32px_-14px_rgba(22,63,50,0.32)] !backdrop-blur-md hover:!bg-forest/12 hover:!border-forest/75"
              >
                See how Al-Tina helps
              </ActionLink>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <ul className="grid gap-3 sm:gap-4 sm:grid-cols-3">
            {hero.credibility.map((item, index) => (
              <li
                key={item}
                data-reveal=""
                style={delay(index * 90)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-5 py-4 sm:justify-center",
                  panel({ variant: "quiet", gold: true, blur: true }),
                )}
              >
                <span
                  aria-hidden="true"
                  className="size-1.5 shrink-0 bg-gold"
                />
                <span className="text-sm font-medium text-forest">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
