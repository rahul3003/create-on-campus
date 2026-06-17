"use client";

import { PillNavButton } from "./PillNavButton";

export function CaseStudyLink({ href }: { href: string }) {
  return <PillNavButton label="See case study" href={href} arrow="→" />;
}
