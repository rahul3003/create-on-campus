"use client";

import { motion } from "framer-motion";

export function WorkPageGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#fff6e8] via-[#fffaf3] to-white" />

      <div className="absolute top-[-30%] right-[-20%] h-[min(920px,130vw)] w-[min(920px,130vw)] rounded-full blur-[120px]">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #ffe566, #ffb84d, #ff9f43, #fa5c40, #ff9f43, #ffb84d, #ffe566)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="absolute top-[-30%] right-[-20%] h-[min(920px,130vw)] w-[min(920px,130vw)] rounded-full blur-[120px] mix-blend-overlay">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #ffffff 0deg, #ffa640 120deg, #fc8f4c 240deg, #ffffff 360deg)",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </div>
  );
}
