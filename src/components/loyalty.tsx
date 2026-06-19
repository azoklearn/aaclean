import Link from "next/link";
import { Gift, Stamp, ArrowUpRight, Check } from "lucide-react";
import { SectionHead } from "./ui/section-head";
import { Reveal } from "./ui/reveal";
import { site } from "@/lib/site";

export function Loyalty() {
  return (
    <section
      id="fidelite"
      className="relative scroll-mt-20 border-y border-line bg-surface"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHead
                eyebrow="Programme fidélité"
                title="Récompensons votre fidélité."
                intro="Chez A&A Clean Signature, la confiance se cultive. Deux façons simples de profiter d'avantages premium."
              />
              <Reveal delay={3}>
                <Link
                  href="#contact"
                  className="ring-focus group mt-8 inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 text-sm font-medium text-fg transition-colors hover:border-ink/40 hover:bg-ink/[0.04]"
                >
                  En savoir plus
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="grid gap-5 lg:col-span-7">
            {/* Referral card */}
            <Reveal>
              <article className="group relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-bg p-8 sm:p-10">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="grid size-12 place-items-center rounded-xl bg-surface-2 text-orange">
                      <Gift className="size-6" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-fg">
                      Parrainage
                    </h3>
                    <p className="mt-2 max-w-md text-[0.98rem] leading-relaxed text-fg-dim">
                      Recommandez-nous à un proche. Pour chaque parrainage abouti,
                      vous bénéficiez d&apos;une réduction sur votre prochaine
                      prestation.
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-5xl font-semibold leading-none text-orange sm:text-6xl">
                      ≈10%
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-fg-dim">
                      par parrainage
                      <br />
                      réussi
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Loyalty card — the premium "membership" piece */}
            <Reveal delay={1}>
              <article className="relative overflow-hidden rounded-[var(--radius-card)] border border-orange/40 bg-gradient-to-br from-orange-600 to-orange p-8 text-white sm:p-10">
                {/* glow + brand mark */}
                <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-white/15 blur-3xl" />
                <div className="relative flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="grid size-12 place-items-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
                        <Stamp className="size-6" strokeWidth={1.6} />
                      </span>
                      <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/80">
                        Carte de fidélité
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold">
                      5 prestations = 1 récompense
                    </h3>
                    <p className="mt-2 max-w-md text-[0.98rem] leading-relaxed text-white/85">
                      À chaque prestation réalisée, votre carte se remplit. Au
                      bout de cinq, profitez d&apos;une remise sur la suivante.
                    </p>

                    {/* stamp progress */}
                    <div className="mt-7 flex items-center gap-2.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className="grid size-9 place-items-center rounded-full border border-white/40 text-white/70"
                        >
                          {i < 3 ? (
                            <Check className="size-4" strokeWidth={2.5} />
                          ) : (
                            <span className="text-xs font-medium">{i + 1}</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-5xl font-semibold leading-none sm:text-6xl">
                      ≈10%
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/80">
                      après 5<br />
                      prestations
                    </p>
                  </div>
                </div>

                <div className="relative mt-9 flex items-center justify-between border-t border-white/25 pt-5 text-sm">
                  <span className="font-display text-base font-medium tracking-tight">
                    {site.name}
                  </span>
                  <span className="text-white/70">Membre privilégié</span>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
