"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Reveal-on-scroll built on CSS transitions (compositor-driven, so it works
 * even when the tab is throttled) and toggled by IntersectionObserver — with a
 * fallback timer + reduced-motion guard so content is NEVER stuck invisible.
 */
function useReveal(rootMargin = "0px 0px -12% 0px") {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      setInView(true);
      return;
    }

    let done = false;
    const reveal = () => {
      if (!done) {
        done = true;
        setInView(true);
      }
    };

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          reveal();
          obs.disconnect();
        }
      },
      { rootMargin },
    );
    obs.observe(el);

    // Safety net: reveal anyway if IO is throttled/unavailable.
    const fallback = window.setTimeout(reveal, 1300);

    return () => {
      obs.disconnect();
      window.clearTimeout(fallback);
    };
  }, [rootMargin]);

  return { ref, inView };
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useReveal();
  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform] motion-reduce:transition-none",
        inView ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay * 90}ms` }}
    >
      {children}
    </div>
  );
}
