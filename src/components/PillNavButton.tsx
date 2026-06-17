"use client";

import { motion } from "framer-motion";
import { usePageTransition } from "./PageTransition";

type PillNavButtonProps = {
  label: string;
  href: string;
  arrow?: string;
};

export function PillNavButton({
  label,
  href,
  arrow = "→",
}: PillNavButtonProps) {
  const { navigateWithTransition, isTransitioning } = usePageTransition();

  return (
    <motion.button
      type="button"
      disabled={isTransitioning}
      onClick={(event) =>
        navigateWithTransition(href, {
          x: event.clientX,
          y: event.clientY,
        })
      }
      initial={false}
      whileHover={{ backgroundColor: "#fa5c40" }}
      style={{ backgroundColor: "#0d3272" }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative inline-flex h-11 cursor-pointer items-center rounded-full py-2 pl-6 pr-[52px] text-sm font-medium text-white disabled:cursor-wait"
    >
      <span>{label}</span>
      <span className="absolute right-1 flex h-9 w-9 items-center justify-center rounded-full bg-white text-base text-[#0d3272]">
        {arrow}
      </span>
    </motion.button>
  );
}
