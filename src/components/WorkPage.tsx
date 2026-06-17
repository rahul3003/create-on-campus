import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { WorkBackButton } from "@/components/WorkBackButton";
import { WorkPageGlow } from "@/components/WorkPageGlow";
import type { WorkPageData } from "@/lib/work-pages";

export function WorkPage({ data }: { data: WorkPageData }) {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden pb-4 md:pb-8">
        <WorkPageGlow />

        <div className="relative z-10 px-6 pt-8 md:px-12 md:pt-10 lg:px-24 lg:pt-12">
          <div className="mb-8">
            <WorkBackButton />
          </div>

          <header>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="text-sm font-medium tracking-tight text-[#1a1a1a] md:text-base">
                CreateOnCampus
              </span>
            </Link>
          </header>

          <div className="pt-16 md:pt-24 lg:pt-28">
            <h1 className="font-lustria text-[56px] font-normal leading-none text-[rgba(0,0,0,0.8)] md:text-[80px] lg:text-[96px]">
              {data.title}
            </h1>

            <div className="mt-6 max-w-2xl text-[17px] leading-[1.6] text-[rgba(0,0,0,0.8)] md:mt-8 md:text-[20px] md:leading-[1.65]">
              <p>{data.description[0]}</p>
              <p>{data.description[1]}</p>
            </div>

            <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-[24px] md:mt-14 md:rounded-[32px] lg:rounded-[40px]">
              <Image
                src={data.heroImage}
                alt={data.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="px-6 pb-8 md:px-12 lg:px-24 lg:pb-12">
        <article className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[minmax(160px,240px)_1fr] md:gap-16 lg:gap-24">
            <aside className="space-y-10">
              {data.details.map((item) => (
                <div key={item.label}>
                  <p className="text-[13px] text-[#8a8a8a]">{item.label}</p>
                  <p className="mt-1.5 font-lustria text-[28px] leading-tight text-[rgba(0,0,0,0.8)] md:text-[32px]">
                    {item.value}
                  </p>
                </div>
              ))}
            </aside>

            <div className="space-y-14 md:space-y-16">
              {data.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-lustria text-[32px] text-[rgba(0,0,0,0.8)] md:text-[40px]">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-[1.75] text-[#666] md:mt-5 md:text-[16px]">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          </div>

          <div className="mt-16 space-y-8 md:mt-20">
            {data.galleryImages.map((src) => (
              <div
                key={src}
                className="relative aspect-video w-full overflow-hidden rounded-[24px] md:rounded-[32px] lg:rounded-[40px]"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1152px"
                />
              </div>
            ))}
          </div>
        </article>

        <footer className="mx-auto mt-20 max-w-6xl border-t border-[#ececec] py-8">
          <div className="flex flex-col items-start justify-between gap-3 text-sm text-[#666] md:flex-row md:items-center">
            <a
              href="mailto:create@cocreate.ventures"
              className="transition-colors hover:text-[#1a1a1a]"
            >
              Email us at create@cocreate.ventures
            </a>
            <a
              href="https://babarogic.com"
              className="transition-colors hover:text-[#1a1a1a]"
            >
              © 2024 Create On Campus
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
