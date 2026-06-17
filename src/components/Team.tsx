"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    nameLines: ["Padma Shri", "Prashanth", "Prakash"],
    image:
      "https://framerusercontent.com/images/iscQKrAcHET9rgCn6pQpybbbUKY.jpg?width=1061&height=1440",
  },
  {
    nameLines: ["Suresh", "Narasimha"],
    image:
      "https://framerusercontent.com/images/xe4dk6uDhR1HpvmgmcfU3f2ISQ.jpg?width=200&height=200",
  },
  {
    nameLines: ["Ravindra", "Krishappa"],
    image:
      "https://framerusercontent.com/images/yf2NcImex50fWzD4NmKGGtn6nZY.png?width=358&height=221",
  },
  {
    nameLines: ["Pavan", "Krishnamurthy"],
    image:
      "https://framerusercontent.com/images/T7luEJw9ZTb7HRQLJ0W34Ru8k.jpg",
  },
  {
    nameLines: ["Arun", "Seetharam"],
    image:
      "https://framerusercontent.com/images/I4cPaXkNZK0dADtK2GdTZc2js.jpg",
  },
  {
    nameLines: ["Prof. Jawahar", "Doreswamy"],
    image:
      "https://framerusercontent.com/images/VZpzr6aEfxvK2U6Porq6edlT8.jpg",
  },
];

function TeamMemberCard({
  member,
  index,
}: {
  member: (typeof teamMembers)[number];
  index: number;
}) {
  const name = member.nameLines.join(" ");
  const imageOnRight = index % 2 === 1;

  return (
    <article
      className={`mx-auto flex w-full max-w-[920px] items-center gap-8 md:gap-12 lg:gap-16 ${
        imageOnRight ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: imageOnRight ? 56 : -56, scale: 0.96 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative h-[280px] w-[210px] shrink-0 overflow-hidden rounded-[36px] bg-[#f0f0f0] md:h-[360px] md:w-[270px] lg:h-[400px] lg:w-[300px] lg:rounded-[44px]"
      >
        <Image
          src={member.image}
          alt={name}
          fill
          className="object-cover object-top grayscale"
          sizes="300px"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: imageOnRight ? -56 : 56, y: 16 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className={`min-w-0 flex-1 py-2 ${imageOnRight ? "text-right" : "text-left"}`}
      >
        <span
          className={`mb-5 block h-3 w-3 rotate-45 bg-orange md:mb-6 ${
            imageOnRight ? "ml-auto" : ""
          }`}
          aria-hidden
        />
        <h3 className="font-[family-name:var(--font-inter-tight)] text-[32px] font-bold leading-[1.08] tracking-[-0.02em] text-[#1a1a1a] md:text-[38px] lg:text-[42px]">
          {member.nameLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
      </motion.div>
    </article>
  );
}

export function Team() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-12 flex max-w-[920px] flex-col items-center gap-6 text-center lg:mb-16"
        >
          <h2 className="font-[family-name:var(--font-inter-tight)] text-[13px] font-bold uppercase leading-[1.35] tracking-[0.12em] text-[#1a1a1a] md:text-sm">
            Meet the team behind the dream
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-[#888888] md:text-[15px]">
            At CreateOnCampus, our strength lies in our diverse and talented
            team. Meet the creative minds behind our success, each bringing
            unique skills and perspectives to redefine innovation across
            education.
          </p>
        </motion.div>

        <div className="mx-auto flex max-w-[920px] flex-col items-center gap-16 md:gap-20 lg:gap-24">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.nameLines.join("-")}
              member={member}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
