"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  useMotionValueEvent,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SCROLL_EASE = [0.22, 1, 0.36, 1] as const;
const ABOUT_MIN_H = "min-h-[min(480px,65vh)]";

function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [count, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${latest}${suffix}`;
      }
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { value: 100, suffix: " Crore", label: "Fund to Student Startups" },
  { value: 40, suffix: "+", label: "Universities working with" },
  { value: 20, suffix: "+", label: "GCC and MNC Partners" },
];

const numbers = [
  "5000 students reached",
  "60 patents filed",
  "200 initiated ideas",
  "40 startups",
];

const tabs = ["About", "Experience"] as const;
type Tab = (typeof tabs)[number];

export function Stats() {
  const [activeTab, setActiveTab] = useState<Tab>("About");
  const contentRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const isAnimatingScroll = useRef(false);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"],
  });

  const aboutOpacity = useTransform(
    scrollYProgress,
    [0, 0.42, 0.62],
    [1, 1, 0.15],
  );
  const aboutY = useTransform(scrollYProgress, [0, 0.62], [0, -40]);
  const experienceOpacity = useTransform(
    scrollYProgress,
    [0.28, 0.52, 1],
    [0.15, 1, 1],
  );
  const experienceY = useTransform(scrollYProgress, [0.28, 0.52], [40, 0]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (isAnimatingScroll.current) return;
    setActiveTab(progress >= 0.48 ? "Experience" : "About");
  });

  const scrollToTab = (tab: Tab) => {
    const target = tab === "About" ? aboutRef.current : experienceRef.current;
    if (!target) return;

    setActiveTab(tab);
    isAnimatingScroll.current = true;

    const top =
      target.getBoundingClientRect().top + window.scrollY - (tab === "About" ? 100 : 80);

    animate(window.scrollY, Math.max(0, top), {
      duration: 0.85,
      ease: SCROLL_EASE,
      onUpdate: (latest) => window.scrollTo(0, latest),
      onComplete: () => {
        isAnimatingScroll.current = false;
      },
    });
  };

  return (
    <section
      id="experience"
      className="bg-white px-6 pt-24 pb-12 text-[#1f1f1f] md:px-12 md:pb-16 lg:px-24 lg:pt-32 lg:pb-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: SCROLL_EASE }}
              className="font-lustria text-[42px] font-normal leading-[1.08] text-[rgba(0,0,0,0.8)]"
            >
              Why Campus CoCreate <br /> For <span className="text-[#fa5c40]">Innovations</span>
            </motion.h2>

            <div className="sticky top-20 z-10 mt-12 flex flex-col items-start gap-3 bg-white pb-4">
              {tabs.map((tab) => (
                <motion.button
                  key={tab}
                  type="button"
                  onClick={() => scrollToTab(tab)}
                  animate={{
                    color: activeTab === tab ? "#fa5c40" : "#000000",
                  }}
                  whileHover={{ color: "#fa5c40" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="font-inter text-[30px] font-normal leading-[1.15]"
                >
                  {tab}
                </motion.button>
              ))}
            </div>
          </div>

          <div ref={contentRef} className="lg:col-span-8 lg:pt-[190px]">
            <motion.div
              ref={aboutRef}
              id="stats-about"
              style={{ opacity: aboutOpacity, y: aboutY }}
              className={`grid gap-10 md:grid-cols-2 ${ABOUT_MIN_H} lg:items-start`}
            >
              <p className="max-w-md font-inter text-[24px] font-normal leading-[1.55] text-[rgba(0,0,0,0.8)]">
                Composed of a core team with Venture capitalists, industry
                veterans, serial entrepreneurs. We collaborate closely with
                leaders of governments, MNCs & higher educational institutions to
                ensure that every aspect of the process, from ideas to funding,
                is validated, supported, and fundable.
              </p>

              <div className="space-y-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.55,
                      ease: SCROLL_EASE,
                    }}
                  >
                    <div className="font-lustria text-[36px] font-normal leading-none text-[#fa5c40]">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-3 text-[16px] leading-snug text-[rgba(0,0,0,0.8)]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              ref={experienceRef}
              id="stats-experience"
              style={{ opacity: experienceOpacity, y: experienceY }}
              className="pt-12 lg:pt-16"
            >
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, ease: SCROLL_EASE }}
                className="text-[12px] font-normal leading-normal text-black"
              >
                In numbers
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, delay: 0.08, ease: SCROLL_EASE }}
                className="mt-4 list-disc space-y-1 pl-5 text-[12px] font-normal leading-normal text-black"
              >
                {numbers.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.12 + index * 0.06,
                      duration: 0.45,
                      ease: SCROLL_EASE,
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
