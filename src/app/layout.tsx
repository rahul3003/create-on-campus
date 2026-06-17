import type { Metadata } from "next";
import { Instrument_Sans, Inter, Inter_Tight, Lustria } from "next/font/google";
import { PageTransitionProvider } from "@/components/PageTransition";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lustria = Lustria({
  variable: "--font-lustria",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create On Campus",
  description:
    "We work with Institutions to create student startups on campus and encourage the brightest minds to pursue entrepreneurship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${inter.variable} ${interTight.variable} ${lustria.variable}`}
    >
      <body className="antialiased">
        <PageTransitionProvider>{children}</PageTransitionProvider>
      </body>
    </html>
  );
}
