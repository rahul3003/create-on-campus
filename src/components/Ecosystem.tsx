"use client";

import { motion, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { AnimatedText } from "./AnimatedText";
import {
  AarambhLogo,
  CreateOnCampusLogo,
  CreateVentureLogo,
} from "./EcosystemLogos";

const tabs = [
  {
    id: "foundation",
    label: "Foundation",
    title:
      "We run a not for profit Foundation that works with Universities across the country to enable bright youngsters to become innovators. Foundation runs programs & platforms with industry partners",
    Logo: CreateOnCampusLogo,
  },
  {
    id: "venture",
    label: "Venture Studio",
    title:
      "Over the years we have helped 75+ Industries, global corporations, startups & students to convert their idea into deeptech solutions. Our unique model brings in all resources to convert idea in to a demonstratable product with the customers",
    cta: "Learn about our Venture Studio",
    href: "https://cocreate.ventures/",
    Logo: CreateVentureLogo,
  },
  {
    id: "fund",
    label: "Fund",
    title:
      "A SEBI approved VC fund that invests in prerevenue stage deeptech startups with special focus & capability to support startups on campus",
    cta: "Learn about our Fund",
    href: "https://arambh.vc/",
    Logo: AarambhLogo,
  },
] as const;

function EcosystemCtaButton({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex h-12 items-center overflow-hidden rounded-full bg-[#0D3272] pl-7 pr-14 text-sm font-medium text-white shadow-[0_4px_14px_rgba(13,50,114,0.25)] md:h-14 md:pl-8 md:pr-16 md:text-base"
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.04 },
      }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
    >
      <span className="relative z-10 h-5 overflow-hidden">
        <motion.span
          className="flex flex-col"
          variants={{
            rest: { y: 0 },
            hover: { y: -20 },
          }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="flex h-5 items-center">{children}</span>
          <span className="flex h-5 items-center">{children}</span>
        </motion.span>
      </span>
      <motion.span
        className="absolute right-1.5 h-9 w-9 rounded-full bg-orange md:h-10 md:w-10"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.14 },
        }}
        transition={{ type: "spring", stiffness: 420, damping: 22 }}
      />
    </motion.a>
  );
}

export function Ecosystem() {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];
  const ActiveLogo = active.Logo;

  return (
    <section
      id="service"
      className="flex min-h-screen flex-col justify-center bg-white px-6 py-14 md:px-12 md:py-16 lg:px-24"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center md:mb-8"
        >
          <h2 className="font-serif text-3xl text-orange md:text-4xl lg:text-[52px] lg:leading-tight">
            Our Ecosystem
          </h2>
          <h3 className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-inter-tight)] text-lg font-semibold leading-snug text-[#1a1a1a] md:mt-5 md:text-xl lg:text-2xl lg:leading-snug">
            We have created an ecosphere that enables the youth of the country
            to capitalise and leverage greater opportunities
          </h3>
        </motion.div>

        <LayoutGroup id="ecosystem-tabs">
          <div className="mb-5 flex justify-center md:mb-6">
            <div className="inline-flex rounded-full bg-[#ececec] p-1.5">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  whileHover={{ scale: activeTab === index ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative rounded-full px-5 py-2.5 text-sm font-medium md:px-8 md:py-3 md:text-[15px]"
                >
                  {activeTab === index && (
                    <motion.span
                      layoutId="ecosystem-tab-pill"
                      className="absolute inset-0 rounded-full border border-[#1a1a1a]/15 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors ${
                      activeTab === index
                        ? "text-[#1a1a1a]"
                        : "text-[#8a8a8a]"
                    }`}
                  >
                    {tab.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </LayoutGroup>

        <motion.div
          layout
          className="flex flex-1 flex-col rounded-[28px] bg-[#f0f0f0] px-6 py-10 md:rounded-[32px] md:px-12 md:py-12 lg:px-16 lg:py-14"
        >
          <div className="flex flex-col items-center">
            <motion.div
              key={`logo-${activeTab}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-6 rounded-2xl bg-white px-6 py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:mb-8 md:px-8 md:py-4"
            >
              <ActiveLogo />
            </motion.div>

            <AnimatedText
              key={`eco-text-${activeTab}`}
              text={active.title}
              as="p"
              className="mx-auto max-w-2xl text-center font-serif text-xl leading-[1.45] text-[#1a1a1a] md:text-2xl md:leading-[1.4] lg:text-[28px] lg:leading-[1.35]"
              immediate
            />

            {"href" in active && active.href && active.cta && (
              <div className="mt-8 md:mt-10">
                <EcosystemCtaButton href={active.href}>
                  {active.cta}
                </EcosystemCtaButton>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
