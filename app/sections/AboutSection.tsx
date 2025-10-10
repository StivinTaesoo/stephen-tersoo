"use client";

import { motion } from "framer-motion";
import {
    Calendar,
    Download,
    MapPin,
    Code,
    Rocket,
    Users,
    Zap,
} from "lucide-react";
import { useTheme } from "../components/ThemeProvider";

interface ServiceCard {
    icon: React.ElementType;
    title: string;
    description: string;
}

const services: ServiceCard[] = [
    {
        icon: Code,
        title: "Modern Frontend",
        description:
            "Building with React, Next.js, and TypeScript using modern development patterns.",
    },
    {
        icon: Rocket,
        title: "Responsive Design",
        description:
            "Creating pixel-perfect, mobile-first designs that work beautifully on all devices.",
    },
    {
        icon: Users,
        title: "Collaborative Approach",
        description:
            "Working closely with teams and stakeholders to deliver user-centered solutions.",
    },
    {
        icon: Zap,
        title: "Fast Development",
        description:
            "Rapid prototyping and efficient workflows for quick turnaround times.",
    },
];

const AboutSection = () => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        About Me
                    </h2>
                    <p
                        className={`text-xl ${
                            isDark ? "text-gray-400" : "text-gray-600"
                        }   max-w-3xl mx-auto`}
                    >
                        Learn more about my journey, passion, and what drives me
                        as a developer
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div
                            className={`prose  ${
                                isDark ? "prose-dark" : "prose-lg"
                            }  max-w-none`}
                        >
                            <p
                                className={`${
                                    isDark ? "text-gray-300" : "text-gray-600"
                                } leading-relaxed`}
                            >
                                I&apos;m a passionate Frontend Software Engineer
                                with over 4 years of experience creating
                                exceptional digital experiences. My journey
                                began with a curiosity about how websites work,
                                which evolved into a deep love for crafting
                                beautiful, functional, and user-centric web
                                applications.
                            </p>
                            <p
                                className={`${
                                    isDark ? "text-gray-300" : "text-gray-600"
                                } leading-relaxed`}
                            >
                                I specialize in modern frontend technologies
                                including React, Next.js, and TypeScript, with a
                                strong focus on performance optimization,
                                accessibility, and user experience. I believe in
                                writing clean, maintainable code and staying
                                up-to-date with the latest industry trends and
                                best practices.
                            </p>
                            <p
                                className={`${
                                    isDark ? "text-gray-300" : "text-gray-600"
                                } leading-relaxed`}
                            >
                                When I&apos;m not coding, you can find me
                                exploring new technologies, contributing to
                                open-source projects, or sharing knowledge with
                                the developer community through blog posts and
                                mentoring.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-4"
                        >
                            <div className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                                <MapPin
                                    size={16}
                                    className={`${
                                        isDark
                                            ? "text-blue-400"
                                            : "text-blue-600"
                                    } `}
                                />
                                <span className="text-sm font-medium">
                                    Benue State, Nigeria
                                </span>
                            </div>
                            <div
                                className={`flex items-center space-x-2 ${
                                    isDark ? "bg-green-900/30" : "bg-green-100"
                                } px-4 py-2 rounded-full`}
                            >
                                <Calendar
                                    size={16}
                                    className={`${
                                        isDark
                                            ? "text-green-400"
                                            : "text-green-600"
                                    }`}
                                />
                                <span className="text-sm font-medium">
                                    Available for work
                                </span>
                            </div>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                            onClick={() =>
                                window.open(
                                    "/images/stephen-tersoo-resume.pdf",
                                    "_blank"
                                )
                            }
                        >
                            <Download size={20} />
                            <span>Download Resume</span>
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className={`${
                                        isDark
                                            ? "bg-gray-800 border-gray-700"
                                            : "bg-white border-gray-200"
                                    } p-6 rounded-xl shadow-lg border  `}
                                >
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <div className="relative">
                                            <Icon
                                                className="w-12 h-12 text-blue-600"
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-400">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
