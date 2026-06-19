"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="#top"
      onClick={onClick}
      className="ring-focus"
      aria-label={`${site.name} — accueil`}
    >
      <Image
        src="/logo.png"
        alt={site.name}
        width={48}
        height={48}
        className="h-12 w-12 object-contain"
        priority
      />
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-line bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <Wordmark />

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="ring-focus group relative text-[0.9rem] font-medium text-fg-dim transition-colors hover:text-fg"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-orange transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={site.phoneHref}
              className="ring-focus flex items-center gap-2 text-[0.9rem] font-medium text-fg transition-colors hover:text-orange"
            >
              <Phone className="size-4" strokeWidth={2} />
              {site.phone}
            </a>
            <Link
              href="#contact"
              className="ring-focus rounded-full bg-orange px-5 py-2.5 text-[0.88rem] font-medium text-white transition-colors hover:bg-orange-600"
            >
              Demander un devis
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="ring-focus -mr-1 grid size-10 place-items-center rounded-md text-fg lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg/97 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
              <nav className="flex flex-col gap-1">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 border-b border-line py-4 font-display text-3xl font-medium text-fg"
                    >
                      <span className="text-sm text-orange">
                        0{i + 1}
                      </span>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="flex flex-col gap-3">
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full bg-orange py-4 text-base font-medium text-white"
                >
                  <Phone className="size-5" /> {site.phone}
                </a>
                <a
                  href={site.emailHref}
                  className="text-center text-sm text-fg-dim"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
