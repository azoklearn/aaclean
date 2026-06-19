"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Check, MoveDown } from "lucide-react";
import { PaintSurface } from "./ui/paint-surface";
import { trustBadges } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Parallax only — the background never gates content visibility.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      {/* full-bleed studio backdrop (replace with real hero photography) */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 scale-110">
        <PaintSurface variant="after" hue={210} className="h-full w-full" />
      </motion.div>

      {/* legibility + atmosphere overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bg via-bg/75 to-bg/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-transparent to-bg/40" />
      <div
        className="absolute -left-40 top-1/3 -z-10 h-[480px] w-[480px] rounded-full opacity-30 blur-[120px]"
        style={{ background: "var(--color-orange)" }}
      />

      <div className="mx-auto w-full max-w-[1240px] px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
        {/* eyebrow */}
        <p
          className="eyebrow anim-rise mb-7 flex items-center gap-3 text-orange"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="tick" />
          Studio de detailing premium · Nancy · 54 / 57 / 88
        </p>

        {/* headline */}
        <h1 className="display-xl max-w-[16ch] font-display font-semibold uppercase text-fg">
          {["Une nouvelle vie", "pour votre voiture."].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <span
                className="anim-line"
                style={{ animationDelay: `${0.25 + i * 0.12}s` }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p
          className="anim-rise mt-8 max-w-xl text-pretty text-lg leading-relaxed text-fg-dim"
          style={{ animationDelay: "0.6s" }}
        >
          Nettoyage premium, polissage, traitement céramique et intervention à
          domicile dans le <span className="text-fg">54, 57 et 88</span>.
        </p>

        <div
          className="anim-rise mt-10 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "0.72s" }}
        >
          <Link
            href="#contact"
            className="ring-focus group inline-flex items-center gap-2 rounded-full bg-orange px-7 py-4 text-base font-medium text-white shadow-[0_14px_50px_-12px_rgba(240,96,24,0.75)] transition-colors hover:bg-orange-600"
          >
            Demander un devis
            <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="#realisations"
            className="ring-focus inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-4 text-base font-medium text-fg backdrop-blur-sm transition-colors hover:border-ink/40 hover:bg-ink/[0.04]"
          >
            Voir les réalisations
          </Link>
        </div>

        {/* trust badges */}
        <ul
          className="anim-rise mt-12 flex flex-wrap gap-x-8 gap-y-3"
          style={{ animationDelay: "0.84s" }}
        >
          {trustBadges.map((badge) => (
            <li
              key={badge}
              className="flex items-center gap-2 text-sm font-medium text-fg-dim"
            >
              <Check className="size-4 text-orange" strokeWidth={2.5} />
              {badge}
            </li>
          ))}
        </ul>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-7 right-6 hidden items-center gap-2 text-xs uppercase tracking-[0.25em] text-fg-dim sm:flex">
        <span>Découvrir</span>
        <MoveDown className="size-4 animate-bounce text-orange" />
      </div>
    </section>
  );
}
