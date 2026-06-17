"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import { ApplyButton } from "./ApplyButton";
import { HeroHeader } from "./HeroHeader";
import { SunGlow } from "./SunGlow";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-white">
      <SunGlow />
      <HeroHeader />
      <div className="h-[88px] shrink-0 md:h-[96px]" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5.5rem)] w-full max-w-[980px] flex-col items-center justify-center px-6 pb-56 pt-8 text-center md:min-h-[calc(100vh-6rem)] md:px-12 md:pb-64 md:pt-12">
        <h1
          className="font-lustria w-full text-center text-[52px] font-normal leading-[1.1] tracking-[-0.01em] text-[#2e2e2e] md:text-[84px] lg:text-[92px]"
          aria-label="Fueling the Future, one innovator at a time"
        >
          <AnimatedText
            text="Fueling the Future,"
            as="span"
            className="flex w-full justify-center"
            immediate
          />
          <AnimatedText
            text="one innovator at a time"
            as="span"
            className="flex w-full justify-center"
            delay={0.4}
            immediate
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 max-w-[440px] text-[15px] font-normal leading-[1.7] text-[#6b6b6b] md:mt-10 md:text-[17px]"
        >
          We are a Foundation with a vision to enable youth in campuses to
          become innovators of tomorrow
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 flex flex-col items-center gap-4 md:mt-14"
          id="apply"
        >
          <ApplyButton />
          <p className="text-xs text-[#a3a3a3]">
            Facing issues? Write to us at{" "}
            <a
              href="mailto:analyst@cocreate.ventures"
              className="text-[#6b6b6b] underline underline-offset-2 transition-colors hover:text-[#1a1a1a]"
            >
              analyst@cocreate.ventures
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
