"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Story", href: "#story", id: "story" },
  { label: "Service", href: "#service", id: "service" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Experience", href: "#experience", id: "experience" },
] as const;

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-6 flex-col justify-center" aria-hidden>
      <motion.span
        animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
        className="absolute h-0.5 w-6 rounded-full bg-[#1a1a1a]"
        transition={{ duration: 0.25 }}
      />
      <motion.span
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        className="absolute h-0.5 w-6 rounded-full bg-[#1a1a1a]"
        transition={{ duration: 0.2 }}
      />
      <motion.span
        animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
        className="absolute h-0.5 w-6 rounded-full bg-[#1a1a1a]"
        transition={{ duration: 0.25 }}
      />
    </span>
  );
}

function NavLink({
  link,
  isActive,
  onClick,
}: {
  link: (typeof navLinks)[number];
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={link.href}
      onClick={onClick}
      className={`inline-flex items-center gap-2 text-sm font-bold transition-colors ${
        isActive ? "text-orange" : "text-[#666666] hover:text-foreground"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {link.label}
      {isActive && (
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange"
          aria-hidden
        />
      )}
    </Link>
  );
}

export function HeroHeader() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = window.innerHeight * 0.35;
      let current: string | null = null;

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (!section) continue;

        const { top, bottom } = section.getBoundingClientRect();
        if (top <= offset && bottom > offset) {
          current = link.id;
          break;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-10 left-10 z-50">
        <div className="relative">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <HamburgerIcon open={menuOpen} />
          </button>

          <nav className="hidden flex-col gap-1 md:flex">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              >
                <NavLink link={link} isActive={activeSection === link.id} />
              </motion.div>
            ))}
          </nav>
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pointer-events-none fixed top-6 left-1/2 z-50 -translate-x-1/2 md:top-8"
      >
        <Link
          href="/"
          aria-label="CreateOnCampus"
          className="pointer-events-auto inline-flex p-1"
        >
          <Logo className="h-7 w-7 md:h-8 md:w-8" strokeWidth={1.1} color="#F4846A" />
        </Link>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 md:hidden"
              onClick={closeMenu}
              aria-label="Close menu"
            />

            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-10 left-0 z-50 flex min-w-[160px] flex-col gap-3 rounded-xl rounded-tl-none border border-[#ebebed] bg-white p-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] md:hidden"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  link={link}
                  isActive={activeSection === link.id}
                  onClick={closeMenu}
                />
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
