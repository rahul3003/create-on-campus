"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "Service", href: "#service" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 lg:px-16"
    >
      <Link href="/" className="flex items-center gap-2.5">
        <Logo />
        <span className="text-sm font-medium tracking-tight text-foreground md:text-base">
          CreateOnCampus
        </span>
      </Link>

      <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
