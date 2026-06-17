"use client";

import { PageReveal } from "@/components/PageReveal";

export default function HomeTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageReveal>{children}</PageReveal>;
}
