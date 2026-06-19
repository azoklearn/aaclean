"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { PaintSurface } from "./ui/paint-surface";
import { SectionHead } from "./ui/section-head";
import { Reveal } from "./ui/reveal";

export function BeforeAfter() {
  const [pos, setPos] = useState(52);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, pct)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const up = () => (dragging.current = false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <section
      id="transformation"
      className="relative mx-auto max-w-[1240px] scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHead
          eyebrow="L'expérience avant / après"
          title={
            <>
              Voyez la transformation,
              <br />
              <span className="text-orange">glissez</span> pour comparer.
            </>
          }
        />
        <Reveal delay={2}>
          <p className="max-w-sm text-[1.02rem] leading-relaxed text-fg-dim">
            La différence se voit, se touche et se conserve. Faites glisser le
            curseur pour révéler le résultat d&apos;une intervention complète.
          </p>
        </Reveal>
      </div>

      <Reveal delay={1}>
        <div
          ref={containerRef}
          className="group relative aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-[var(--radius-card)] border border-line"
          onPointerDown={(e) => {
            dragging.current = true;
            setFromClientX(e.clientX);
          }}
        >
          {/* AFTER (full) */}
          <PaintSurface variant="after" hue={210} className="absolute inset-0">
            <span className="absolute bottom-5 right-5 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              Après
            </span>
          </PaintSurface>

          {/* BEFORE (clipped) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <PaintSurface variant="before" hue={210} className="absolute inset-0">
              <span className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-fg-dim backdrop-blur-sm">
                Avant
              </span>
            </PaintSurface>
          </div>

          {/* divider + handle */}
          <div
            className="absolute inset-y-0 z-10 w-px bg-white/70 shadow-[0_0_24px_rgba(255,255,255,0.4)]"
            style={{ left: `${pos}%` }}
          >
            <button
              type="button"
              role="slider"
              aria-label="Comparer avant et après"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(pos)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") setPos((p) => Math.max(2, p - 4));
                if (e.key === "ArrowRight") setPos((p) => Math.min(98, p + 4));
              }}
              className="ring-focus absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-orange text-white shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-transform duration-200 group-hover:scale-105"
            >
              <MoveHorizontal className="size-5" strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={2}>
        <p className="mt-4 text-center text-sm text-fg-dim">
          Visuel de démonstration — vos véritables photos avant / après prennent
          place ici.
        </p>
      </Reveal>
    </section>
  );
}
