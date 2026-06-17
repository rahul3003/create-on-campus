"use client";

import { motion } from "framer-motion";

export function ApplyButton() {
  return (
    <motion.a
      href="#apply"
      className="group relative inline-flex h-14 w-[180px] items-center justify-center overflow-hidden rounded-full bg-blue pl-8 pr-16 text-white"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10 h-[19px] overflow-hidden">
        <motion.span
          className="flex flex-col"
          animate={{ y: [0, -19, -38, -57] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
          }}
        >
          {["Apply Now", "Apply Now", "Apply Now", "Apply Now"].map((text, i) => (
            <span
              key={i}
              className="flex h-[19px] items-center text-sm font-normal tracking-wide"
            >
              {text}
            </span>
          ))}
        </motion.span>
      </span>
      <motion.div
        className="absolute right-1.5 h-11 w-11 rounded-full bg-orange"
        initial={false}
        whileHover={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      />
    </motion.a>
  );
}
