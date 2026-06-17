"use client";

import { PageReveal } from "@/components/PageReveal";

export default function WorkTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageReveal>{children}</PageReveal>;
}
