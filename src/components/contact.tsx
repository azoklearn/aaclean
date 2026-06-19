import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "./ui/reveal";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden">
      {/* atmosphere */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-25 blur-[140px]"
        style={{ background: "var(--color-orange)" }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 py-28 sm:px-8 sm:py-36">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-orange">
              <span className="tick" /> Contact
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-6 max-w-4xl font-display text-balance text-5xl font-semibold uppercase leading-[0.95] text-fg sm:text-7xl">
              Votre véhicule mérite le meilleur.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-xl text-pretty text-lg text-fg-dim">
              Réservation par téléphone ou e-mail. Dites-nous votre véhicule et
              votre besoin, on s&apos;occupe du reste. Chez vous, dans le 54, 57
              et 88.
            </p>
          </Reveal>

          {/* primary actions */}
          <Reveal delay={3}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="ring-focus group inline-flex items-center justify-center gap-3 rounded-full bg-orange px-8 py-4 text-base font-medium text-white shadow-[0_14px_50px_-12px_rgba(240,96,24,0.75)] transition-colors hover:bg-orange-600"
              >
                <Phone className="size-5" /> Appeler maintenant
              </a>
              <a
                href={site.emailHref}
                className="ring-focus group inline-flex items-center justify-center gap-3 rounded-full border border-line-strong px-8 py-4 text-base font-medium text-fg transition-colors hover:border-ink/40 hover:bg-ink/[0.04]"
              >
                <Mail className="size-5" /> Envoyer un email
              </a>
            </div>
          </Reveal>
        </div>

        {/* contact detail cards */}
        <div className="mx-auto mt-16 grid max-w-3xl gap-4 sm:grid-cols-2">
          <Reveal>
            <a
              href={site.phoneHref}
              className="group flex items-center gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-6 transition-colors hover:border-orange/40"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-surface-2 text-orange">
                <Phone className="size-6" strokeWidth={1.7} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-fg-dim">
                  Téléphone
                </span>
                <span className="mt-1 block font-display text-xl font-semibold text-fg">
                  {site.phone}
                </span>
              </span>
            </a>
          </Reveal>
          <Reveal delay={1}>
            <a
              href={site.emailHref}
              className="group flex items-center gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-6 transition-colors hover:border-orange/40"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-surface-2 text-orange">
                <Mail className="size-6" strokeWidth={1.7} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-[0.2em] text-fg-dim">
                  E-mail
                </span>
                <span className="mt-1 block break-words font-display text-[0.92rem] font-semibold text-fg sm:text-base">
                  {site.email}
                </span>
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <div className="mx-auto mt-4 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-fg-dim">
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-orange" /> Nancy · 54 · 57 · 88
            </span>
            <span className="flex items-center gap-2">
              <Clock className="size-4 text-orange" /> Réponse rapide · devis
              gratuit
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
