"use client";

import { motion, type Variants } from "framer-motion";

const EASE_OUT = "easeOut" as const;

export const headingContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

export const headingWordVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE_OUT,
    },
  },
};

const defaultHeadingLines = [
  ["Catalyzing"],
  ["Innovation", "In"],
  ["Universities"],
];

type CatalyzingHeadingRevealProps = {
  headingLines?: string[][];
  className?: string;
};

export function CatalyzingHeadingReveal({
  headingLines = defaultHeadingLines,
  className = "",
}: CatalyzingHeadingRevealProps) {
  return (
    <motion.h2
      className={`font-lustria text-left text-[36px] font-normal capitalize leading-[1.08] tracking-[-1px] text-[#ff3c00] ${className}`}
      variants={headingContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      aria-label="Catalyzing Innovation In Universities"
    >
      {headingLines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.map((word, wordIndex) => (
            <motion.span
              key={`${lineIndex}-${word}`}
              variants={headingWordVariants}
              className="inline-block"
            >
              {word}
              {wordIndex < line.length - 1 && "\u00a0"}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h2>
  );
}
