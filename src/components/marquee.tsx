const items = [
  "Nettoyage intérieur",
  "Polissage",
  "Traitement céramique",
  "Décontamination",
  "Protection longue durée",
  "Rénovation esthétique",
  "Intervention à domicile",
  "Lustrage",
];

export function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-line bg-surface py-5">
      <div className="flex shrink-0 animate-[marquee_38s_linear_infinite] items-center gap-10 pr-10">
        {items.concat(items).map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-xl font-medium text-fg-dim sm:text-2xl">
              {item}
            </span>
            <span className="size-1.5 rounded-full bg-orange" />
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 animate-[marquee_38s_linear_infinite] items-center gap-10 pr-10"
      >
        {items.concat(items).map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-xl font-medium text-fg-dim sm:text-2xl">
              {item}
            </span>
            <span className="size-1.5 rounded-full bg-orange" />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}
