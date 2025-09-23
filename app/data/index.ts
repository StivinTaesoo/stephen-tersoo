// Sample data
const projects: Project[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description:
            "A full-featured e-commerce platform built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
        image: "/api/placeholder/600/400",
        technologies: [
            "Next.js",
            "TypeScript",
            "Stripe",
            "Prisma",
            "PostgreSQL",
        ],
        liveUrl: "https://example-ecommerce.com",
        githubUrl: "https://github.com/stephenterso/ecommerce-platform",
        category: "Full Stack",
    },
    {
        id: 2,
        title: "Task Management App",
        description:
            "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "/api/placeholder/600/400",
        technologies: [
            "React",
            "TypeScript",
            "Socket.io",
            "Express",
            "MongoDB",
        ],
        liveUrl: "https://example-taskapp.com",
        githubUrl: "https://github.com/stephenterso/task-manager",
        category: "Frontend",
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description:
            "A responsive weather dashboard with location-based forecasts, interactive charts, and personalized weather alerts.",
        image: "/api/placeholder/600/400",
        technologies: [
            "Next.js",
            "Chart.js",
            "Tailwind CSS",
            "OpenWeather API",
        ],
        liveUrl: "https://example-weather.com",
        githubUrl: "https://github.com/stephenterso/weather-dashboard",
        category: "Frontend",
    },
    {
        id: 4,
        title: "AI Chat Application",
        description:
            "An intelligent chat application powered by AI with natural language processing and real-time conversation capabilities.",
        image: "/api/placeholder/600/400",
        technologies: ["Next.js", "OpenAI API", "WebSocket", "Redis", "Docker"],
        liveUrl: "https://example-aichat.com",
        githubUrl: "https://github.com/stephenterso/ai-chat-app",
        category: "Full Stack",
    },
    {
        id: 5,
        title: "Portfolio Website",
        description:
            "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
        image: "/api/placeholder/600/400",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
        ],
        liveUrl: "https://stephenterso.dev",
        githubUrl: "https://github.com/stephenterso/portfolio",
        category: "Frontend",
    },
    {
        id: 6,
        title: "Blog Platform",
        description:
            "A full-stack blog platform with markdown support, comment system, and content management for writers and readers.",
        image: "/api/placeholder/600/400",
        technologies: ["Next.js", "MDX", "Supabase", "Tailwind CSS", "Vercel"],
        liveUrl: "https://example-blog.com",
        githubUrl: "https://github.com/stephenterso/blog-platform",
        category: "Full Stack",
    },
];

const experiences: Experience[] = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        company: "TechCorp Solutions",
        location: "San Francisco, CA (Remote)",
        startDate: "2023-01",
        endDate: "Present",
        description: [
            "Led a team of 4 frontend developers in building scalable web applications using Next.js and React",
            "Improved application performance by 40% through code optimization and implementation of best practices",
            "Collaborated with UX/UI designers to create responsive and accessible user interfaces",
            "Mentored junior developers and conducted code reviews to maintain high code quality standards",
        ],
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "GraphQL",
        ],
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "StartupXYZ",
        location: "Austin, TX",
        startDate: "2021-06",
        endDate: "2022-12",
        description: [
            "Developed and maintained customer-facing web applications serving 50,000+ monthly active users",
            "Implemented responsive design principles ensuring optimal user experience across all devices",
            "Integrated third-party APIs and payment systems to enhance application functionality",
            "Participated in agile development processes and sprint planning sessions",
        ],
        technologies: ["React", "JavaScript", "CSS3", "Node.js", "MongoDB"],
    },
    {
        id: 3,
        title: "Junior Frontend Developer",
        company: "WebAgency Pro",
        location: "Dallas, TX",
        startDate: "2020-03",
        endDate: "2021-05",
        description: [
            "Built responsive websites and web applications for various clients across different industries",
            "Collaborated with design teams to translate mockups into functional, interactive web interfaces",
            "Optimized websites for search engines and improved loading speeds by 35%",
            "Learned and applied modern frontend technologies and development workflows",
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "WordPress"],
    },
];

const skills: Skill[] = [
    { name: "JavaScript", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Frontend" },
    { name: "React", level: 95, category: "Frontend" },
    { name: "Next.js", level: 90, category: "Frontend" },
    { name: "Tailwind CSS", level: 85, category: "Frontend" },
    { name: "HTML5", level: 98, category: "Frontend" },
    { name: "CSS3", level: 95, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Express.js", level: 75, category: "Backend" },
    { name: "MongoDB", level: 70, category: "Backend" },
    { name: "PostgreSQL", level: 75, category: "Backend" },
    { name: "Git", level: 90, category: "Tools" },
    { name: "Docker", level: 70, category: "Tools" },
    { name: "AWS", level: 65, category: "Tools" },
    { name: "Figma", level: 80, category: "Tools" },
];
