import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "ghost" | "light";

const styles: Record<Variant, string> = {
  primary:
    "bg-orange text-white hover:bg-orange-600 shadow-[0_10px_40px_-12px_rgba(240,96,24,0.7)]",
  ghost:
    "border border-line-strong text-fg hover:border-white/60 hover:bg-white/[0.04]",
  light: "bg-paper text-ink hover:bg-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  icon = true,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  icon?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group ring-focus inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[0.95rem] font-medium tracking-tight transition-all duration-300",
        styles[variant],
        className,
      )}
    >
      {children}
      {icon && (
        <ArrowUpRight
          className="size-[1.05em] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      )}
    </Link>
  );
}
