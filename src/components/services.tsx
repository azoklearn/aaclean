"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Clock, Plus } from "lucide-react";
import { services } from "@/lib/site";
import { SectionHead } from "./ui/section-head";
import { PaintSurface } from "./ui/paint-surface";
import { cn } from "@/lib/utils";

const meta = [
  { key: "benefits", label: "Bénéfices" },
  { key: "process", label: "Déroulé" },
  { key: "result", label: "Résultat" },
] as const;

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section
      id="prestations"
      className="relative scroll-mt-20 border-y border-line bg-surface"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
        <SectionHead
          eyebrow="Prestations"
          title={
            <>
              Un soin pour chaque
              <br /> besoin de votre véhicule.
            </>
          }
          intro="De l'entretien régulier à la rénovation complète, chaque prestation suit un protocole précis et des produits professionnels."
          className="mb-14"
        />

        <div className="grid gap-10 lg:grid-cols-12">
          {/* selector list */}
          <ul className="lg:col-span-5">
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.id}>
                  <button
                    onClick={() => setActive(i)}
                    className={cn(
                      "ring-focus group flex w-full items-center gap-5 border-b border-line py-5 text-left transition-colors",
                      isActive ? "text-fg" : "text-fg-dim hover:text-fg",
                    )}
                    aria-pressed={isActive}
                  >
                    <span
                      className={cn(
                        "font-mono text-xs tabular-nums transition-colors",
                        isActive ? "text-orange" : "text-fg-dim/60",
                      )}
                    >
                      {s.index}
                    </span>
                    <span className="flex-1 font-display text-2xl font-medium tracking-tight sm:text-[1.7rem]">
                      {s.title}
                    </span>
                    <Plus
                      className={cn(
                        "size-5 shrink-0 transition-all duration-300",
                        isActive
                          ? "rotate-45 text-orange"
                          : "text-fg-dim/50 group-hover:text-fg",
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* detail panel */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-24">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-bg"
                >
                  <PaintSurface
                    variant="after"
                    hue={14 + active * 26}
                    className="aspect-[16/9] w-full"
                  >
                    <div className="absolute inset-0 flex items-end justify-between p-6">
                      <span className="font-mono text-sm text-white/70">
                        {current.index}
                      </span>
                      <span className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                        <Clock className="size-3.5" /> {current.duration}
                      </span>
                    </div>
                  </PaintSurface>

                  <div className="p-7 sm:p-9">
                    <h3 className="font-display text-3xl font-semibold tracking-tight text-fg">
                      {current.title}
                    </h3>
                    <p className="mt-2 text-orange">{current.tagline}</p>

                    <dl className="mt-7 space-y-5">
                      {meta.map((m) => (
                        <div
                          key={m.key}
                          className="grid gap-1 border-t border-line pt-4 sm:grid-cols-[120px_1fr] sm:gap-5"
                        >
                          <dt className="eyebrow text-fg-dim">{m.label}</dt>
                          <dd className="text-[0.98rem] leading-relaxed text-fg/90">
                            {current[m.key]}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <Link
                      href="#contact"
                      className="ring-focus group mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-600"
                    >
                      Demander un devis pour cette prestation
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
