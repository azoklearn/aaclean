"use client";

import {
  Truck,
  FlaskConical,
  ScanSearch,
  Smile,
  Gem,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { whyUs, stats } from "@/lib/site";
import { Reveal } from "./ui/reveal";
import { Counter } from "./ui/counter";

const icons: LucideIcon[] = [Truck, FlaskConical, ScanSearch, Smile, Gem, MapPin];

export function WhyUs() {
  return (
    <section className="relative bg-paper text-ink">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-col gap-6">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-orange-600">
              <span className="tick bg-orange-600!" />
              Pourquoi nous choisir
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display-lg max-w-3xl text-balance text-ink">
              L&apos;exigence d&apos;un studio,
              <br /> le confort du domicile.
            </h2>
          </Reveal>
        </div>

        {/* stats */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-ink/10 bg-ink/10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-paper p-7">
              <div className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                {s.value === 0 ? (
                  <span>{s.prefix}</span>
                ) : (
                  <Counter value={s.value} suffix={s.suffix} />
                )}
              </div>
              <p className="mt-3 text-sm leading-snug text-ink/60">{s.label}</p>
            </div>
          ))}
        </div>

        {/* benefits grid */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal
                key={item.title}
                delay={i % 3}
                className="group h-full rounded-[var(--radius-card)] border border-ink/10 bg-paper-2/40 p-7 hover:border-orange/40 hover:bg-paper-2/70"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-ink text-orange transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon className="size-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.96rem] leading-relaxed text-ink/65">
                  {item.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
