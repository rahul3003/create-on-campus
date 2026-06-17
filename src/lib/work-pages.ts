export type WorkPageData = {
  title: string;
  description: [string, string];
  heroImage: string;
  galleryImages: string[];
  details: { label: string; value: string }[];
  sections: { title: string; body: string }[];
};

const defaultSections = [
  {
    title: "Overview",
    body: "A portfolio is any method used to showcase your best work. No matter the industry, fashion, architecture, or design, there are tons of ways to display your work in order to get a new job or expand your audience or customers.",
  },
  {
    title: "Role",
    body: "A portfolio is any method used to showcase your best work. No matter the industry, fashion, architecture, or design, there are tons of ways to display your work in order to get a new job or expand your audience or customers.",
  },
  {
    title: "Challenge",
    body: "A portfolio is any method used to showcase your best work. No matter the industry, fashion, architecture, or design, there are tons of ways to display your work in order to get a new job or expand your audience or customers.",
  },
  {
    title: "Solution",
    body: "Fintelli allows users to view all bank accounts and credit cards in one place with just a few taps on the screen. They can categorize transactions automatically based on merchant or category or tag them manually if needed. It also helps analyze users' spending by category, merchant, or tag, allowing them to see which categories are responsible for most of their expenses and underperforming.",
  },
];

const defaultGallery = [
  "https://framerusercontent.com/images/nMnWoT6CRXWEDIQ0J9raCIcdoRw.jpg",
  "https://framerusercontent.com/images/gmP0LP8gx2ragPF1HoajMIXpLY.jpg",
];

export const workPages: Record<string, WorkPageData> = {
  "6inc": {
    title: "6inc",
    description: [
      "An AI driven infrastructure across the university to capture & nurture ideas.",
      "Platform includes necessary learning / handholding required by innovators",
    ],
    heroImage:
      "https://framerusercontent.com/images/T7luEJw9ZTb7HRQLJ0W34Ru8k.jpg",
    galleryImages: defaultGallery,
    details: [
      { label: "Industry", value: "Fintech" },
      { label: "Headquarters", value: "Madrid" },
      { label: "Founded", value: "2014" },
      { label: "Company size", value: "100+" },
    ],
    sections: defaultSections,
  },
  scholarhouse: {
    title: "Scholarhouse",
    description: [
      "Community for innovators to collaborate across institutions and industries.",
      "Enables talent on campus to work with others for solving industry problems.",
    ],
    heroImage:
      "https://framerusercontent.com/images/VZpzr6aEfxvK2U6Porq6edlT8.jpg",
    galleryImages: defaultGallery,
    details: [
      { label: "Industry", value: "Insurance" },
      { label: "Headquarters", value: "Madrid" },
      { label: "Founded", value: "2014" },
      { label: "Company size", value: "100+" },
    ],
    sections: defaultSections,
  },
  aluminaries: {
    title: "Aluminaries",
    description: [
      "Involve Alumni participation in innovation on campus.",
      "Enables alumni to participate with funding, mentoring, handholding & providing necessary inputs",
    ],
    heroImage:
      "https://framerusercontent.com/images/I4cPaXkNZK0dADtK2GdTZc2js.jpg",
    galleryImages: defaultGallery,
    details: [
      { label: "Industry", value: "Cybersecurity" },
      { label: "Headquarters", value: "Madrid" },
      { label: "Founded", value: "2014" },
      { label: "Company size", value: "100+" },
    ],
    sections: defaultSections,
  },
  clubcrate: {
    title: "Clubcrate",
    description: [
      "Enables students to be mentored by different industry forums.",
      "Brings all the college clubs under one umbrella to ensure right participation & sponsorships.",
    ],
    heroImage:
      "https://framerusercontent.com/images/b5BAXAQCSX9uo7JqPHBYYsrzQ.jpg",
    galleryImages: defaultGallery,
    details: [
      { label: "Industry", value: "Crypto" },
      { label: "Headquarters", value: "Madrid" },
      { label: "Founded", value: "2014" },
      { label: "Company size", value: "100+" },
    ],
    sections: defaultSections,
  },
};
