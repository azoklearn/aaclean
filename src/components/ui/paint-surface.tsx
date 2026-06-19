import { cn } from "@/lib/utils";

/**
 * Designed placeholder evoking a close-up of a detailed paint panel.
 *  - variant "after"  → deep, glossy, reflective, hydrophobic beads
 *  - variant "before" → dull, hazed, swirl-marked, desaturated
 *
 * Replace these with real client photography by swapping the component for a
 * <Image /> (hosts are pre-approved in next.config.ts). Kept abstract on
 * purpose: no stock supercars, no AI cars, no tuning clichés.
 */
export function PaintSurface({
  variant = "after",
  hue = 14,
  className,
  children,
}: {
  variant?: "before" | "after";
  hue?: number;
  className?: string;
  children?: React.ReactNode;
}) {
  const after = variant === "after";

  const base = after
    ? `radial-gradient(120% 90% at 18% 8%, hsl(${hue} 8% 32% / 0.55), transparent 45%),
       radial-gradient(140% 120% at 85% 110%, hsl(${hue} 55% 10%), transparent 60%),
       linear-gradient(135deg, hsl(${hue} 50% 26%), hsl(${hue} 58% 8%) 72%)`
    : // neglected panel: lighter, flat, desaturated — dull rather than dark
      `radial-gradient(120% 100% at 30% 14%, hsl(${hue} 5% 40% / 0.35), transparent 55%),
       linear-gradient(135deg, hsl(${hue} 7% 33%), hsl(${hue} 6% 21%) 78%)`;

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ backgroundImage: base }}
      aria-hidden="true"
    >
      {/* specular sweep — crisp on a polished panel, absent when dull */}
      {after && (
        <>
          <div
            className="absolute -inset-x-10 top-0 h-[140%] opacity-70"
            style={{
              background:
                "linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.16) 47%, rgba(255,255,255,0.42) 50%, rgba(255,255,255,0.12) 54%, transparent 63%)",
              transform: "rotate(-2deg)",
            }}
          />
          {/* hydrophobic beading */}
          <div
            className="absolute inset-0 opacity-[0.18] mix-blend-screen"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 0.6px, transparent 1.4px)",
              backgroundSize: "13px 13px",
            }}
          />
          {/* soft glossy reflection pool */}
          <div
            className="absolute -bottom-1/3 left-1/4 h-2/3 w-1/2 rounded-full opacity-30 blur-2xl"
            style={{ background: "rgba(255,255,255,0.5)" }}
          />
        </>
      )}

      {/* swirl haze for the "before" state */}
      {!after && (
        <>
          {/* swirl marks / wash haze */}
          <div
            className="absolute inset-0 opacity-[0.55] mix-blend-overlay"
            style={{
              backgroundImage:
                "repeating-radial-gradient(circle at 68% 28%, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 2px, transparent 5px)",
            }}
          />
          {/* dusty, matte film — makes the panel look neglected */}
          <div className="absolute inset-0 bg-[#b9b2a6]/10 mix-blend-soft-light" />
          <div className="absolute inset-0 bg-[#9a958c]/[0.08]" />
        </>
      )}

      {/* vignette to seat it as a photograph */}
      <div
        className="absolute inset-0"
        style={{
          boxShadow: "inset 0 0 120px rgba(0,0,0,0.55)",
        }}
      />
      {children}
    </div>
  );
}
