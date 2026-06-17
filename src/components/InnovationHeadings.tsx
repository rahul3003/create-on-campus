"use client";

import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { CatalyzingHeadingReveal } from "./CatalyzingHeadingReveal";

const scrollHeadings = [
  {
    lines: ["Incentivise students to focus on", "innovation"],
    variant: "primary" as const,
  },
  {
    lines: ["Platforms to instill culture of innovation"],
    variant: "primary" as const,
  },
  {
    lines: ["Mobilizing resources & experts to help", "students"],
    variant: "primary" as const,
  },
  {
    lines: ["Leveraging Industry for fostering innovation"],
    variant: "muted" as const,
  },
];

const SCROLL_VH = 400;

function ScalingLine({
  lines,
  index,
  scrollYProgress,
  variant,
}: {
  lines: string[];
  index: number;
  scrollYProgress: MotionValue<number>;
  variant: "primary" | "muted";
}) {
  const start = index * 0.14;
  const end = start + 0.18;

  const scale = useTransform(
    scrollYProgress,
    [0, start, end, 1],
    [0.42, 0.42, 1, 1]
  );
  const y = useTransform(
    scrollYProgress,
    [0, start, end, 1],
    [56, 56, 0, 0]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, start, end, 1],
    [0.35, 0.35, 1, 1]
  );

  const isMuted = variant === "muted";

  return (
    <motion.h2
      style={{ scale, y, opacity }}
      className={`origin-left font-lustria text-[42px] font-normal capitalize leading-[1.15] tracking-[-0.04em] will-change-transform ${
        isMuted ? "text-[#b8b8b8]" : "text-[#1a1a1a]"
      }`}
    >
      {lines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </motion.h2>
  );
}

export function InnovationHeadings() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const primaryHeadings = scrollHeadings.filter((h) => h.variant === "primary");
  const mutedHeading = scrollHeadings[3];

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: `${SCROLL_VH}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="hidden h-full w-full lg:flex">
          <aside className="flex w-[30%] max-w-[420px] shrink-0 flex-col justify-start pl-[72px] pt-36 xl:pl-[190px]">
            <CatalyzingHeadingReveal />
          </aside>

          <div className="relative min-w-0 flex-1">
            <div className="absolute inset-x-0 top-1/2 flex translate-y-[-42%] flex-col gap-10 pl-6 pr-[110px] xl:gap-14 xl:pr-[150px]">
              {primaryHeadings.map((heading, index) => (
                <ScalingLine
                  key={heading.lines.join("-")}
                  lines={heading.lines}
                  index={index}
                  scrollYProgress={scrollYProgress}
                  variant="primary"
                />
              ))}
            </div>

            <div className="absolute inset-x-0 bottom-16 pl-6 pr-[110px] xl:bottom-20 xl:pr-[150px]">
              <ScalingLine
                lines={mutedHeading.lines}
                index={3}
                scrollYProgress={scrollYProgress}
                variant="muted"
              />
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col justify-center gap-10 px-6 py-24 md:px-12 lg:hidden">
          <CatalyzingHeadingReveal />
          {scrollHeadings.map((heading, index) => (
            <ScalingLine
              key={heading.lines.join("-")}
              lines={heading.lines}
              index={index}
              scrollYProgress={scrollYProgress}
              variant={heading.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
