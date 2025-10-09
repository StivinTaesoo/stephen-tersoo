import { Experience, Project, Skill } from "../types";

export const projects: Project[] = [
    {
        id: 1,
        title: "eHA Academy Website",
        description:
            "A full-featured website platform built with Next.js, featuring user authentication, course registration, and admin dashboard.",
        image: "/images/eha-academy.png",
        technologies: ["Next.js", "TypeScript", "RSuite", "Firebase"],
        liveUrl: "https://academy.ehealthafrica.org",

        category: "Full Stack",
    },
    {
        id: 2,
        title: "Eagle City Website UI",
        description: "A Tailwind UI coversion of Eagle City FC website",
        image: "/images/eagle-city.PNG",
        technologies: ["HTML", "Tailwind", "CSS3"],
        liveUrl: "https://elegant-crepe-47fd27.netlify.app",
        githubUrl: "https://github.com/StivinTaesoo/eagle-city-fc",
        category: "Frontend",
    },
    {
        id: 3,
        title: "Euthus Consult",
        description: "A responsive mobile responsive informative webpage",
        image: "/images/euthus.png",
        technologies: ["Next.js", "Typescript", "Tailwind CSS"],
        liveUrl: "https://euthus-consult-eight.vercel.app",
        githubUrl: "https://github.com/StivinTaesoo/euthus-consult",
        category: "Frontend",
    },
];

export const experiences: Experience[] = [
    {
        id: 1,
        title: "Intern Software Engineer",
        company: "eHealth Africa",
        location: "Abuja, Nigeria (Remote)",
        startDate: "2025-01",
        endDate: "2025-08",
        description: [
            "Worked with a team of 4 frontend developers in building scalable web applications using Next.js and React",
            "Improved application performance through code optimization and implementation of best practices",
            "Collaborated with UX/UI designers to create responsive and accessible user interfaces",
        ],
        technologies: ["Next.js", "React", "TypeScript", "Rsuite"],
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "Spacelink Ltd",
        location: "Abuja, Nigeria (Remote)",
        startDate: "2024-06",
        endDate: "Present",
        description: [
            "Developed the public-facing webpages of a functional multi-player card game with Next js, typescript and node js",
            "Implemented responsive design principles ensuring optimal user experience across all devices",
            "Integrated third-party APIs and payment systems to enhance application functionality",
        ],
        technologies: [
            "React",
            "JavaScript",
            "Next.js",
            "Typescript",
            "Tailwind",
        ],
    },
];

export const skills: Skill[] = [
    { name: "JavaScript", level: 75, category: "Frontend" },
    { name: "TypeScript", level: 75, category: "Frontend" },
    { name: "React", level: 80, category: "Frontend" },
    { name: "Next.js", level: 80, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "HTML5", level: 95, category: "Frontend" },
    { name: "CSS3", level: 90, category: "Frontend" },
    { name: "Git", level: 90, category: "Tools" },
    { name: "Vercel", level: 70, category: "Tools" },
    { name: "Figma", level: 80, category: "Tools" },
];
