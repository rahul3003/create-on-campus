"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AcademicPrograms() {
  return (
    <section className="bg-white px-6 py-24 md:px-12 lg:px-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto mb-16 flex max-w-[1000px] flex-col items-center gap-10 lg:mb-20 lg:flex-row lg:items-center lg:justify-center lg:gap-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative h-[240px] w-[240px] shrink-0 md:h-[280px] md:w-[280px] lg:h-[320px] lg:w-[320px]"
          >
            <Image
              src="/piechart.png"
              alt="Platforms, Academic Enablement, Funding, and Industry connects"
              fill
              className="object-contain drop-shadow-[0_12px_40px_rgba(13,50,114,0.18)]"
              sizes="(max-width: 768px) 240px, 320px"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, y: 12 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-left"
          >
            <h2 className="font-lustria text-[32px] font-normal capitalize leading-[1.12] tracking-[-0.02em] text-[#1a1a1a] md:text-[38px] lg:text-[42px]">
              <span className="block">Our Comprehensive</span>
              <span className="block">Support To Higher</span>
              <span className="block">Educational Institutions</span>
              <span className="block">In Creating Future</span>
              <span className="block">Innovators</span>
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mt-16 overflow-hidden rounded-3xl bg-white shadow-[0_8px_40px_rgba(13,50,114,0.08)]"
        >
          <Image
            src="/services.png"
            alt="Complete hand holding right from the Idea — ideate, build POC, get funding, find customers"
            width={1501}
            height={460}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 1152px"
          />
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-md lg:max-w-none"
          >
            <h3 className="font-lustria text-[32px] font-normal leading-[1.15] tracking-[-0.02em] text-[#3b3b3b] md:text-[36px] lg:text-[40px]">
              HIRE Academic Programs
            </h3>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-[#666666] md:text-[17px]">
              Programs that makes innovators acquire the required skills and get
              credits against the learning
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30, y: 8 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
            className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_48px_rgba(13,50,114,0.1)] md:rounded-3xl"
          >
            <Image
              src="/services1.png"
              alt="HIRE Academic programs: Harnessing Innovation and Research Experience process flow"
              width={1024}
              height={375}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </motion.div>
        </div>

       
      </div>
    </section>
  );
}
