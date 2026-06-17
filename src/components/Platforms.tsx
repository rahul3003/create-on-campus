"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CaseStudyLink } from "./CaseStudyLink";

const platforms = [
  {
    name: "6inc",
    description:
      "An AI driven infrastructure across the university to capture & nurture ideas. Platform includes necessary learning / handholding required by innovators",
    image:
      "https://framerusercontent.com/images/T7luEJw9ZTb7HRQLJ0W34Ru8k.jpg",
    href: "/work/6inc",
  },
  {
    name: "Aluminaries",
    description:
      "Involve Alumni participation in innovation on campus. Enables alumni to participate with funding, mentoring, handholding & providing necessary inputs",
    image:
      "https://framerusercontent.com/images/qw4vQnTGBajrZ92Sgq2fSRkU.jpg?width=3024&height=4032",
    href: "/work/aluminaries",
  },
  {
    name: "Scholarhouse",
    description:
      "Community for innovators to collaborate across institutions and industries. Enables talent on campus to work with others for solving industry problems.",
    image:
      "https://framerusercontent.com/images/b5BAXAQCSX9uo7JqPHBYYsrzQ.jpg",
    href: "/work/scholarhouse",
  },
  {
    name: "Clubcrate",
    description:
      "Enables students to be mentored by different industry forums. Brings all the college clubs under one umbrella to ensure right participation & sponsorships.",
    image:
      "https://framerusercontent.com/images/84v7FuTWkxO0a05UXQ1ShCgcL1k.png?width=359&height=359",
    href: "/work/clubcrate",
  },
];

function CaseStudyButton({ href }: { href: string }) {
  return <CaseStudyLink href={href} />;
}

function PlatformCard({
  name,
  description,
  image,
  href,
  index,
}: {
  name: string;
  description: string;
  image: string;
  href: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: "easeOut" }}
      className="rounded-xl bg-[#fa8e41] p-[3px]"
    >
      <motion.div
        className="group relative aspect-4/3 cursor-pointer overflow-hidden rounded-[9px]"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 bg-black/15" aria-hidden />

        <motion.h3
          className="absolute bottom-0 left-0 z-10 p-[30px] font-lustria text-[28px] capitalize leading-[1.3] text-white md:text-[32px]"
          variants={{
            rest: { opacity: 1, y: 0 },
            hover: { opacity: 0, y: 8 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {name}
        </motion.h3>

        <motion.div
          className="absolute inset-0 z-20 flex flex-col justify-end bg-black/50 p-[30px]"
          variants={{
            rest: { y: "100%", pointerEvents: "none" },
            hover: { y: 0, pointerEvents: "auto" },
          }}
          transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="flex flex-col gap-6">
            <h3 className="font-lustria text-[28px] capitalize leading-[1.3] text-white md:text-[32px]">
              {name}
            </h3>
            <p className="max-w-[365px] text-sm leading-relaxed text-white">
              {description}
            </p>
            <CaseStudyButton href={href} />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const NOISE_TEXTURE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

function PlatformsHeroGlow() {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0 h-[380px] w-full overflow-visible"
      aria-hidden
    >
      <div className="absolute top-[-15%] left-1/2 h-[min(823px,120vw)] w-[min(823px,120vw)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(#ffce8f 0deg, #e65c12 215.676deg, #ff1c1c 360deg)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="absolute top-[-15%] left-1/2 h-[min(823px,120vw)] w-[min(823px,120vw)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] mix-blend-overlay">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(#ffffff 0deg, #ffa640 180deg, #fc8f4c 360deg)",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}

function PlatformsNoise() {
  return (
    <div
      className="pointer-events-none absolute top-[-25%] left-0 h-[150%] w-full opacity-40 mix-blend-color-dodge"
      style={{
        backgroundImage: NOISE_TEXTURE,
        backgroundSize: "180px 180px",
      }}
      aria-hidden
    />
  );
}

export function Platforms() {
  return (
    <section id="work" className="bg-white px-6 pb-16 md:px-16 md:pb-16">
      <div className="mx-auto max-w-[1400px]">
        <div
          className="relative flex flex-col items-center overflow-hidden rounded-[32px] border border-[#c9664d] px-8 pb-20 pt-28 md:px-8 md:pb-20 md:pt-40"
          style={{
            background: "linear-gradient(180deg, #de523a 0%, #fa8e41 100%)",
            boxShadow:
              "0 0.602187px 2.28831px -1.25px rgba(0,0,0,0.18), 0 2.28853px 8.69643px -2.5px rgba(0,0,0,0.16), 0 10px 38px -3.75px rgba(0,0,0,0.06)",
          }}
        >
          <PlatformsHeroGlow />
          <PlatformsNoise />

          <div className="relative z-10 flex w-full max-w-[1200px] flex-col items-center gap-12 md:gap-[60px]">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex max-w-[760px] flex-col items-center gap-6 text-center"
            >
              <h2 className="font-lustria text-[36px] font-normal leading-[1.08] tracking-[-0.02em] text-white md:text-[48px] lg:text-[64px]">
                Platforms that create a culture of Innovation
              </h2>
              <p className="text-base leading-relaxed text-white md:text-[17px] md:leading-[1.65]">
                We provide access to platforms for creating a culture of
                innovation on campus, enabling innovators with resources &
                motivation while achieving the requirements of accreditation
                agencies
              </p>
            </motion.div>

            <div className="grid w-full gap-8 sm:grid-cols-2 sm:gap-10">
              {platforms.map((platform, index) => (
                <PlatformCard key={platform.name} index={index} {...platform} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
