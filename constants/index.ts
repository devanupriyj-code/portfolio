import { ElementType } from "react";
export const FRONTEND_SKILL = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "Material UI", image: "mui.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Redux", image: "redux.png", width: 80, height: 80 },
  { skill_name: "React Query", image: "reactquery.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "Next.js 14", image: "next.png", width: 80, height: 80 },
] as const;
export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      { name: "YouTube", icon: null, link: "https://youtube.com" },
      { name: "GitHub", icon: null, link: "https://github.com/devanupriyj-code" },
      { name: "Discord", icon: null, link: "https://discord.com" },
    ],
  },
  {
    title: "Social Media",
    data: [
      { name: "Instagram", icon: null, link: "https://instagram.com" },
      { name: "Twitter", icon: null, link: "https://x.com" },
      { name: "LinkedIn", icon: null, link: "https://linkedin.com" },
    ],
  },
  {
    title: "About",
    data: [
      { name: "Contact Me", icon: null, link: "devanupriyj@gmail.com" },
    ],
  },
] as const;
export const BACKEND_SKILL = [
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "Firebase", image: "firebase.png", width: 55, height: 55 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70 },
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
  { skill_name: "Prisma", image: "prisma.png", width: 70, height: 70 },
  { skill_name: "GraphQL", image: "graphql.png", width: 80, height: 80 },
] as const;

export const FULLSTACK_SKILL = [
  { skill_name: "React Native", image: "reactnative.png", width: 70, height: 70 },
  { skill_name: "Tauri", image: "tauri.png", width: 70, height: 70 },
  { skill_name: "Docker", image: "docker.png", width: 70, height: 70 },
  { skill_name: "Figma", image: "figma.png", width: 50, height: 50 },
] as const;

export const OTHER_SKILL = [
  { skill_name: "Go", image: "go.png", width: 60, height: 60 },
] as const;
export const LINKS = {
  sourceCode: "https://github.com/devanupriyj-code", // change to your repo
} as const;
export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
] as const;
import { RxGithubLogo, RxLinkedinLogo, RxInstagramLogo } from "react-icons/rx";

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/devanupriyj-code",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
] as const;
export const PROJECTS = [
  {
    title: "Modern Next.js Portfolio",
    description:
      "A dynamic portfolio built with Next.js showcasing modern UI, animations, and performance.",
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "Interactive Cards Portfolio",
    description:
      "An interactive portfolio using animated cards for engaging UI experience.",
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "Space Themed Website",
    description:
      "A visually rich space-themed website with animations and immersive design.",
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
] as const;