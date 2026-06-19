"use client";

import { useState } from "react";
import { MapPin, Home, Navigation } from "lucide-react";
import { SectionHead } from "./ui/section-head";
import { Reveal } from "./ui/reveal";
import { cn } from "@/lib/utils";

type Zone = {
  code: "57" | "54" | "88";
  name: string;
  cities: string;
  path: string;
  labelAt: { x: number; y: number };
};

const zones: Zone[] = [
  {
    code: "57",
    name: "Moselle",
    cities: "Metz · Thionville · Forbach",
    path: "M165,38 C255,18 360,40 372,118 C380,172 332,200 252,196 C182,192 150,156 150,108 C150,74 148,52 165,38 Z",
    labelAt: { x: 262, y: 115 },
  },
  {
    code: "54",
    name: "Meurthe-et-Moselle",
    cities: "Nancy · Lunéville · Toul",
    path: "M82,170 C150,156 250,158 272,206 C288,244 262,300 202,326 C142,350 74,326 66,268 C60,222 52,184 82,170 Z",
    labelAt: { x: 168, y: 250 },
  },
  {
    code: "88",
    name: "Vosges",
    cities: "Épinal · Saint-Dié · Remiremont",
    path: "M172,332 C248,318 342,330 354,388 C362,438 304,458 244,453 C184,448 152,420 154,382 C155,356 154,338 172,332 Z",
    labelAt: { x: 256, y: 392 },
  },
];

export function ServiceArea() {
  const [active, setActive] = useState<Zone["code"] | null>("54");
  const current = zones.find((z) => z.code === active);

  return (
    <section
      id="zone"
      className="relative mx-auto max-w-[1240px] scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHead
            eyebrow="Zone d'intervention"
            title={
              <>
                On se déplace
                <br /> jusque chez vous.
              </>
            }
            intro="Intervention à domicile à Nancy et dans tout le Grand Est : Meurthe-et-Moselle (54), Moselle (57) et Vosges (88). Particuliers, professionnels et flottes."
          />

          <div className="mt-10 flex flex-col gap-3">
            {zones.map((z) => (
              <button
                key={z.code}
                onMouseEnter={() => setActive(z.code)}
                onFocus={() => setActive(z.code)}
                onClick={() => setActive(z.code)}
                className={cn(
                  "ring-focus group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300",
                  active === z.code
                    ? "border-orange/50 bg-surface"
                    : "border-line hover:border-line-strong",
                )}
              >
                <span
                  className={cn(
                    "grid size-12 shrink-0 place-items-center rounded-xl font-display text-lg font-semibold transition-colors",
                    active === z.code
                      ? "bg-orange text-white"
                      : "bg-surface-2 text-fg-dim",
                  )}
                >
                  {z.code}
                </span>
                <span className="flex-1">
                  <span className="block font-medium text-fg">{z.name}</span>
                  <span className="block text-sm text-fg-dim">{z.cities}</span>
                </span>
                <Navigation
                  className={cn(
                    "size-4 transition-opacity",
                    active === z.code
                      ? "text-orange opacity-100"
                      : "opacity-0 group-hover:opacity-60",
                  )}
                />
              </button>
            ))}
          </div>

          <Reveal>
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4">
              <Home className="size-5 text-orange" />
              <p className="text-sm text-fg-dim">
                <span className="text-fg">Déplacement à domicile inclus</span>{" "}
                dans nos prestations sur l&apos;ensemble de la zone.
              </p>
            </div>
          </Reveal>
        </div>

        {/* minimalist map */}
        <Reveal delay={1}>
          <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface p-6">
            <div
              className="absolute inset-0 opacity-[0.4]"
              style={{
                backgroundImage:
                  "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
            />
            <svg
              viewBox="0 0 420 480"
              className="relative mx-auto h-auto w-full max-w-md"
              role="img"
              aria-label="Carte de la zone d'intervention : Moselle, Meurthe-et-Moselle, Vosges"
            >
              {zones.map((z) => {
                const isActive = active === z.code;
                return (
                  <g
                    key={z.code}
                    onMouseEnter={() => setActive(z.code)}
                    onClick={() => setActive(z.code)}
                    className="cursor-pointer"
                  >
                    <path
                      d={z.path}
                      className="transition-all duration-500"
                      fill={isActive ? "var(--color-orange)" : "#222"}
                      fillOpacity={isActive ? 0.9 : 1}
                      stroke={isActive ? "var(--color-orange-300)" : "#333"}
                      strokeWidth={1.5}
                    />
                    <text
                      x={z.labelAt.x}
                      y={z.labelAt.y}
                      textAnchor="middle"
                      className="pointer-events-none font-display"
                      fontSize="22"
                      fontWeight="600"
                      fill={isActive ? "#fff" : "#777"}
                    >
                      {z.code}
                    </text>
                  </g>
                );
              })}

              {/* Nancy home base pin */}
              <g className="pointer-events-none">
                <circle cx="150" cy="252" r="16" fill="var(--color-orange)" opacity="0.25">
                  <animate
                    attributeName="r"
                    values="10;22;10"
                    dur="2.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.35;0;0.35"
                    dur="2.6s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="150" cy="252" r="5.5" fill="#fff" />
                <text
                  x="150"
                  y="232"
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="600"
                  className="font-body"
                  fill="var(--color-orange)"
                >
                  Nancy
                </text>
              </g>
            </svg>

            {/* zone caption */}
            <div className="relative mt-2 flex items-center gap-3 border-t border-line pt-4">
              <MapPin className="size-5 text-orange" />
              {current ? (
                <p className="text-sm text-fg">
                  <span className="font-medium">
                    {current.name} ({current.code})
                  </span>{" "}
                  <span className="text-fg-dim">— {current.cities}</span>
                </p>
              ) : (
                <p className="text-sm text-fg-dim">
                  Survolez une zone pour la mettre en évidence.
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
