"use client";

import { motion } from "framer-motion";

const paragraphs = [
  {
    text: "For the past 4 years, we have been working with Higher Educational Institutions across the country, in redefining opportunities for our tomorrow. We are a Fund, Foundry and a Foundation enabling innovation on campuses achieve their true value. Our weapons? Expertise in deep innovation and entrepreneurship, core industry insights, coupled with programs & platforms for creating the right culture of innovation that feel less like cages and more like playgrounds.",
    highlight: "We are a Fund, Foundry and a Foundation",
  },
  {
    text: "In a world where student minds are driven to conformity, we empower students & Institutions to achieve impactful results. We believe Universities must embrace innovation to attract top talent, boost research to meet future demands. We sculpt ideas, craft products, and weave partnerships that empower you, not exploit you.",
    highlight: "boost research to meet future demands",
  },
  {
    text: "Join us in this catalyzing movement. Reclaim your campus prowess, one innovation at a time. Let's enable 365 days of unmatched focus and culture.",
    highlight: "Join us in this catalyzing movement",
  },
];

function StoryParagraph({
  text,
  highlight,
  index,
}: {
  text: string;
  highlight: string;
  index: number;
}) {
  const parts = text.split(highlight);

  return (
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="font-serif text-2xl leading-relaxed text-foreground md:text-3xl lg:text-4xl"
    >
      {parts[0]}
      <span className="underline decoration-foreground/30 decoration-1 underline-offset-4">
        {highlight}
      </span>
      {parts[1]}
    </motion.p>
  );
}

export function Story() {
  return (
    <section id="story" className="px-6 py-24 md:px-12 lg:px-24 lg:py-32">
      <div className="mx-auto flex max-w-4xl flex-col gap-16 md:gap-24">
        {paragraphs.map((p, i) => (
          <StoryParagraph key={i} {...p} index={i} />
        ))}
      </div>
    </section>
  );
}
