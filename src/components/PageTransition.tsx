"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import {
  markPageReveal,
  REVEAL_DURATION,
  REVEAL_EASE,
  type RevealOrigin,
} from "./PageReveal";

type PageTransitionContextValue = {
  navigateWithTransition: (href: string, origin?: RevealOrigin) => void;
  isTransitioning: boolean;
};

const PageTransitionContext = createContext<PageTransitionContextValue | null>(
  null,
);

const EXIT_DURATION = 0.42;

export function usePageTransition() {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error("usePageTransition must be used within PageTransitionProvider");
  }
  return context;
}

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [exitOrigin, setExitOrigin] = useState<RevealOrigin | null>(null);

  const navigateWithTransition = useCallback(
    (href: string, origin?: RevealOrigin) => {
      if (isTransitioning) return;

      const clickOrigin: RevealOrigin = origin ?? {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };

      setIsTransitioning(true);
      setExitOrigin(clickOrigin);

      const hashIndex = href.indexOf("#");
      const path = hashIndex >= 0 ? href.slice(0, hashIndex) || "/" : href;
      const hash = hashIndex >= 0 ? href.slice(hashIndex + 1) : "";

      const navigate = () => {
        markPageReveal(clickOrigin);
        router.push(path);

        if (hash) {
          requestAnimationFrame(() => {
            document.getElementById(hash)?.scrollIntoView({ behavior: "auto" });
          });
        }
      };

      window.setTimeout(navigate, EXIT_DURATION * 1000);

      window.setTimeout(() => {
        setExitOrigin(null);
        setIsTransitioning(false);
      }, (EXIT_DURATION + REVEAL_DURATION) * 1000 + 80);
    },
    [isTransitioning, router],
  );

  return (
    <PageTransitionContext.Provider
      value={{ navigateWithTransition, isTransitioning }}
    >
      {children}

      <AnimatePresence>
        {exitOrigin && (
          <motion.div
            key="circle-exit"
            className="pointer-events-none fixed inset-0 z-[9999] bg-white"
            initial={{
              clipPath: `circle(0% at ${exitOrigin.x}px ${exitOrigin.y}px)`,
            }}
            animate={{
              clipPath: `circle(150% at ${exitOrigin.x}px ${exitOrigin.y}px)`,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: EXIT_DURATION, ease: REVEAL_EASE }}
            aria-hidden
          />
        )}
      </AnimatePresence>
    </PageTransitionContext.Provider>
  );
}
