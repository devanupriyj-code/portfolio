import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: {
    default: "Devanupriy Jain | Full Stack Developer",
    template: "%s | Devanupriy Jain",
  },

  description:
    "Full Stack Developer skilled in Next.js, React, and modern web technologies. Explore my projects, skills, and portfolio.",

  keywords: [
    "Devanupriy Jain",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Portfolio Website",
    "UI UX Developer",
    "India Developer",
  ],

  authors: [
    {
      name: "Devanupriy Jain",
      url: "https://github.com/devanupriyj-code",
    },
  ],

  creator: "Devanupriy Jain",

  openGraph: {
    title: "Devanupriy Jain | Full Stack Developer",
    description:
      "Explore my portfolio built with Next.js, featuring projects, animations, and modern UI.",
    url: "https://your-portfolio-url.com", // 🔁 replace
    siteName: "Devanupriy Portfolio",
    images: [
      {
        url: "/og-image.png", // 🔁 add this in public/
        width: 1200,
        height: 630,
        alt: "Devanupriy Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Devanupriy Jain | Portfolio",
    description:
      "Check out my projects, skills, and modern web development work.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};