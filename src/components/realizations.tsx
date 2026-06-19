"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { works, type Work } from "@/lib/site";
import { SectionHead } from "./ui/section-head";
import { PaintSurface } from "./ui/paint-surface";
import { cn } from "@/lib/utils";

const filters = [
  "Tous",
  "Intérieur",
  "Extérieur",
  "Polissage",
  "Céramique",
  "Professionnel",
] as const;

type Filter = (typeof filters)[number];

// portfolio rhythm — a couple of tiles span two rows for an editorial feel
const tall = new Set([0, 3, 4]);

export function Realizations() {
  const [filter, setFilter] = useState<Filter>("Tous");
  const visible: Work[] =
    filter === "Tous" ? works : works.filter((w) => w.category === filter);

  return (
    <section
      id="realisations"
      className="relative scroll-mt-20 border-y border-line bg-surface"
    >
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            eyebrow="Réalisations"
            title={
              <>
                Le résultat parle
                <br /> de lui-même.
              </>
            }
          />
          {/* filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "ring-focus rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  filter === f
                    ? "border-orange bg-orange text-white"
                    : "border-line text-fg-dim hover:border-ink/30 hover:text-fg",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[210px] lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((w, i) => (
              <motion.figure
                layout
                key={w.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "group relative cursor-pointer overflow-hidden rounded-[var(--radius-card)] border border-line",
                  tall.has(i) ? "row-span-2" : "row-span-1",
                )}
              >
                {w.photo ? (
                  <Image
                    src={w.photo}
                    alt={w.title}
                    fill
                    className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                  />
                ) : (
                  <PaintSurface
                    variant="after"
                    hue={w.hue}
                    className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-orange-300">
                      {w.category}
                    </span>
                    <p className="mt-1 font-display text-lg font-medium leading-tight text-white">
                      {w.title}
                    </p>
                  </div>
                  <span className="grid size-9 shrink-0 translate-y-2 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="size-4" />
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-6 text-sm text-fg-dim">
          Photos réelles de nos réalisations. Ajoutez vos nouvelles photos dans{" "}
          <code className="rounded bg-surface-2 px-1 py-0.5 text-xs">public/</code>{" "}
          et référencez-les dans <code className="rounded bg-surface-2 px-1 py-0.5 text-xs">src/lib/site.ts</code>.
        </p>
      </div>
    </section>
  );
}
