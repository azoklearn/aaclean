import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          {/* brand */}
          <div className="md:col-span-5">
            <Image src="/logo.png" alt={site.name} width={64} height={64} className="h-16 w-16 object-contain" />
            <p className="mt-4 max-w-sm text-[1.05rem] font-medium leading-snug text-fg">
              {site.slogan}
            </p>
            <p className="mt-1 text-sm text-fg-dim">{site.baseline}</p>
          </div>

          {/* nav */}
          <div className="md:col-span-3">
            <h3 className="eyebrow text-fg-dim">Navigation</h3>
            <ul className="mt-5 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-fg-dim transition-colors hover:text-orange"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="md:col-span-4">
            <h3 className="eyebrow text-fg-dim">Contact & zone</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 text-sm text-fg transition-colors hover:text-orange"
                >
                  <Phone className="size-4 text-orange" /> {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-2.5 break-all text-sm text-fg transition-colors hover:text-orange"
                >
                  <Mail className="size-4 text-orange" /> {site.email}
                </a>
              </li>
              <li className="pt-1 text-sm text-fg-dim">
                Intervention à domicile — Nancy, Meurthe-et-Moselle (54), Moselle
                (57), Vosges (88).
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-7 sm:flex-row">
          <p className="text-xs text-fg-dim">
            © {new Date().getFullYear()} {site.name}. Tous droits réservés.
          </p>
          <p className="text-xs text-fg-dim">
            Detailing premium · Nettoyage · Polissage · Traitement céramique
          </p>
        </div>
      </div>
    </footer>
  );
}
