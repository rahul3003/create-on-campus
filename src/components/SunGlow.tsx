"use client";

import { motion } from "framer-motion";

const SUN_SIZE = 820;
const SUN_TOP = -598;
const CENTER = SUN_SIZE / 2;
const CORAL = "#F4846A";

const RING_LAYERS = [
  { offset: 2, stroke: 0.75, opacity: 0.38 },
  { offset: 24, stroke: 0.65, opacity: 0.3 },
  { offset: 48, stroke: 0.6, opacity: 0.24 },
  { offset: 74, stroke: 0.55, opacity: 0.18 },
  { offset: 102, stroke: 0.5, opacity: 0.12 },
  { offset: 132, stroke: 0.45, opacity: 0.07 },
];

function ConcentricRings({
  duration,
  direction,
}: {
  duration: number;
  direction: 1 | -1;
}) {
  return (
    <motion.svg
      width={SUN_SIZE}
      height={SUN_SIZE}
      viewBox={`0 0 ${SUN_SIZE} ${SUN_SIZE}`}
      className="absolute inset-0"
      style={{ transformOrigin: "center" }}
      animate={{ rotate: direction * 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      aria-hidden
    >
      <defs>
        <linearGradient
          id={`hero-ring-${direction}`}
          gradientUnits="userSpaceOnUse"
          x1={CENTER - 200}
          y1={CENTER - 200}
          x2={CENTER + 200}
          y2={CENTER + 200}
        >
          <stop offset="0%" stopColor="#FDBA8C" />
          <stop offset="50%" stopColor="#F9A07A" />
          <stop offset="100%" stopColor="#F4846A" />
        </linearGradient>
      </defs>
      {RING_LAYERS.map((ring) => (
        <circle
          key={ring.offset}
          cx={CENTER}
          cy={CENTER}
          r={CENTER + ring.offset}
          fill="none"
          stroke={`url(#hero-ring-${direction})`}
          strokeWidth={ring.stroke}
          opacity={ring.opacity}
        />
      ))}
    </motion.svg>
  );
}

export function SunGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: SUN_TOP, width: SUN_SIZE, height: SUN_SIZE }}
      >
        <ConcentricRings duration={48} direction={1} />

        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle at 50% 50%, #ffffff 0%, #ffffff 36%, #fffaf7 44%, #fff3eb 52%, #ffe8d8 62%, #ffd9be 72%, #ffc9a3 82%, #f9b48a 92%, rgba(244, 132, 106, 0.35) 100%)`,
          }}
        />

        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(255, 210, 175, 0.55), rgba(255, 180, 140, 0.45), rgba(255, 220, 195, 0.5), rgba(255, 165, 120, 0.45), rgba(255, 210, 175, 0.55))",
            WebkitMask:
              "radial-gradient(circle, transparent calc(50% - 1px), #000 calc(50% - 1px), #000 calc(50% + 18px), transparent calc(50% + 18px))",
            mask: "radial-gradient(circle, transparent calc(50% - 1px), #000 calc(50% - 1px), #000 calc(50% + 18px), transparent calc(50% + 18px))",
            filter: "blur(10px)",
            opacity: 0.55,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        />

        <div
          className="absolute inset-0 rounded-full bg-white"
          style={{
            background:
              "radial-gradient(circle at 50% 42%, #ffffff 0%, #ffffff 54%, rgba(255, 255, 255, 0.98) 68%, rgba(255, 255, 255, 0) 78%)",
          }}
        />
      </div>

      <div
        className="absolute inset-x-0 top-0 h-[min(520px,65vh)]"
        style={{
          background:
            "radial-gradient(ellipse 90% 100% at 50% 0%, rgba(255, 235, 220, 0.45) 0%, rgba(255, 248, 242, 0.2) 38%, transparent 72%)",
        }}
      />
    </div>
  );
}

export { CORAL as HERO_CORAL };
