"use client";

import { motion } from "framer-motion";

export function VisionInvite() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 md:px-16 md:py-24 md:pb-40">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #ffd3b5 28.83%, #ffffff 79.63%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-[1000px]"
        >
          <h1 className="font-lustria text-left text-[36px] font-normal leading-[1.4] tracking-[-0.04em] text-[rgba(0,0,0,0.8)] md:text-[48px] lg:text-[48px]">
            <span className="block">
              In our vision to enable a better tomorrow, we
            </span>
            <span className="block">
              invite Universities, Institutions and Industries to
            </span>
            <span className="block">partner with us</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
