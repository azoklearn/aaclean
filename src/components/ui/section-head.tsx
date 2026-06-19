import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = true,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Reveal>
        <p className="eyebrow flex items-center gap-3 text-orange">
          <span className="tick" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={1}>
        <h2
          className={cn(
            "display-lg max-w-4xl text-balance",
            dark ? "text-fg" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={2}>
          <p
            className={cn(
              "max-w-xl text-[1.05rem] leading-relaxed",
              dark ? "text-fg-dim" : "text-ink/65",
              align === "center" && "mx-auto",
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
