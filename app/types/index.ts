// Types
interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    category: string;
}

interface Experience {
    id: number;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
    technologies: string[];
}

interface Skill {
    name: string;
    level: number;
    category: string;
}
