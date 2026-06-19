import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site";
import { SectionHead } from "./ui/section-head";
import { Reveal } from "./ui/reveal";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-4 text-orange"
          fill={i < rating ? "currentColor" : "none"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHead
          eyebrow="Avis clients"
          title={
            <>
              La confiance,
              <br /> notre meilleure finition.
            </>
          }
        />
        <Reveal delay={2}>
          <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface px-5 py-4">
            <div className="font-display text-4xl font-semibold text-fg">5,0</div>
            <div>
              <Stars rating={5} />
              <p className="mt-1 text-xs text-fg-dim">
                Objectif : la satisfaction de chaque client
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i}>
            <figure className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-7 transition-colors hover:border-line-strong">
              <Quote className="size-8 text-orange/40" />
              <blockquote className="mt-5 flex-1 text-[1.02rem] leading-relaxed text-fg/90">
                « {t.text} »
              </blockquote>
              <figcaption className="mt-7 flex items-center justify-between border-t border-line pt-5">
                <div>
                  <div className="font-medium text-fg">{t.name}</div>
                  <div className="text-sm text-fg-dim">{t.place}</div>
                </div>
                <div className="text-right">
                  <Stars rating={t.rating} />
                  <div className="mt-1 text-xs text-fg-dim">{t.service}</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-8 text-center text-sm text-fg-dim">
          Emplacement prêt pour vos avis clients réels — remplacez ces exemples
          par de vrais témoignages (Google, etc.) avant la mise en ligne.
        </p>
      </Reveal>
    </section>
  );
}
