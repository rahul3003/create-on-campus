import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Ecosystem } from "@/components/Ecosystem";
import { InnovationHeadings } from "@/components/InnovationHeadings";
import { Team } from "@/components/Team";
import { AcademicPrograms } from "@/components/AcademicPrograms";
import { Platforms } from "@/components/Platforms";
import { VisionInvite } from "@/components/VisionInvite";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Story />
      <Ecosystem />
      <InnovationHeadings />
      <Team />
      <AcademicPrograms />
      <Platforms />
      <VisionInvite />
      <Stats />
      <Footer />
    </main>
  );
}
