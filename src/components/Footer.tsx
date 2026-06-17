"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border-gray px-6 py-10 md:px-12 md:py-12 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex items-center gap-2.5">
          <Logo />
          <span className="text-sm font-medium text-foreground">
            CreateOnCampus
          </span>
        </div>

        <motion.a
          href="mailto:create@cocreate.ventures"
          whileHover={{ scale: 1.02 }}
          className="text-center text-sm text-muted transition-colors hover:text-foreground"
        >
          Email us at{" "}
          <span className="font-medium text-foreground">
            create@cocreate.ventures
          </span>
        </motion.a>

        <p className="text-sm text-muted">© 2024 Create On Campus</p>
      </div>
    </footer>
  );
}
