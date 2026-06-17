"use client";

import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";

const REVEAL_KEY = "coc-page-reveal";
const ORIGIN_KEY = "coc-page-reveal-origin";
export const REVEAL_EASE = [0.32, 0.72, 0, 1] as const;
export const REVEAL_DURATION = 0.72;

export type RevealOrigin = { x: number; y: number };

function readRevealState(): { active: boolean; origin: RevealOrigin } {
  if (typeof window === "undefined") {
    return { active: false, origin: { x: 0, y: 0 } };
  }

  const active = sessionStorage.getItem(REVEAL_KEY) === "1";
  const stored = sessionStorage.getItem(ORIGIN_KEY);
  let origin: RevealOrigin = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };

  if (stored) {
    const [x, y] = stored.split(",").map(Number);
    if (!Number.isNaN(x) && !Number.isNaN(y)) {
      origin = { x, y };
    }
  }

  return { active, origin };
}

export function markPageReveal(origin?: RevealOrigin) {
  sessionStorage.setItem(REVEAL_KEY, "1");
  if (origin) {
    sessionStorage.setItem(ORIGIN_KEY, `${origin.x},${origin.y}`);
  } else {
    sessionStorage.removeItem(ORIGIN_KEY);
  }
}

export function PageReveal({ children }: { children: ReactNode }) {
  const [reveal] = useState(() => {
    const state = readRevealState();
    if (state.active) {
      sessionStorage.removeItem(REVEAL_KEY);
      sessionStorage.removeItem(ORIGIN_KEY);
    }
    return state;
  });

  if (!reveal.active) {
    return <>{children}</>;
  }

  const { x, y } = reveal.origin;

  return (
    <motion.div
      initial={{ clipPath: `circle(0% at ${x}px ${y}px)` }}
      animate={{ clipPath: `circle(150% at ${x}px ${y}px)` }}
      transition={{ duration: REVEAL_DURATION, ease: REVEAL_EASE }}
      className="min-h-screen bg-white"
    >
      {children}
    </motion.div>
  );
}
