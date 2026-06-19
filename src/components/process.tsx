"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/lib/site";
import { SectionHead } from "./ui/section-head";
import { Reveal } from "./ui/reveal";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 65%"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="methode"
      className="relative mx-auto max-w-[1240px] scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHead
        eyebrow="La méthode"
        title={
          <>
            Cinq étapes, zéro
            <br /> approximation.
          </>
        }
        intro="Un déroulé clair, du premier appel à la livraison de votre véhicule transformé."
        className="mb-16"
      />

      <div ref={ref}>
        {/* desktop: horizontal */}
        <div className="relative hidden md:block">
          <div className="absolute left-0 right-0 top-7 h-px bg-line" />
          <motion.div
            style={{ width }}
            className="absolute left-0 top-7 h-px origin-left bg-orange"
          />
          <div className="grid grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.n} delay={i}>
                <div className="relative pt-0">
                  <div className="relative z-10 grid size-14 place-items-center rounded-full border border-line bg-surface font-display text-lg font-semibold text-orange">
                    {step.n}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-fg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-dim">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* mobile: vertical */}
        <div className="relative md:hidden">
          <div className="absolute bottom-2 left-7 top-2 w-px bg-line" />
          <motion.div
            style={{ height }}
            className="absolute left-7 top-2 w-px origin-top bg-orange"
          />
          <div className="space-y-8">
            {processSteps.map((step) => (
              <Reveal key={step.n}>
                <div className="flex gap-5">
                  <div className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full border border-line bg-surface font-display text-lg font-semibold text-orange">
                    {step.n}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display text-xl font-semibold text-fg">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg-dim">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
