"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "../data";
import { ExternalLink, Github } from "lucide-react";
import { useTheme } from "../components/ThemeProvider";
import SocialLinks from "../components/SocialLinks";

const ProjectsSection = () => {
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [visibleProjects, setVisibleProjects] = useState(6);
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const categories = ["All", "Frontend", "Full Stack"];

    const filteredProjects =
        selectedFilter === "All"
            ? projects
            : projects.filter((project) => project.category === selectedFilter);

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Featured Projects
                    </h2>
                    <p
                        className={`text-xl max-w-3xl mx-auto ${
                            isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                        A showcase of my recent work and side projects
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-12"
                >
                    <div
                        className={`flex rounded-lg p-1 shadow-lg border  ${
                            isDark
                                ? "bg-gray-800 border-gray-700"
                                : "bg-white border-gray-200"
                        }`}
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedFilter(category)}
                                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                                    selectedFilter === category
                                        ? `bg-blue-600 text-white shadow-md `
                                        : ` dark:  dark: ${
                                              isDark
                                                  ? "text-gray-300 hover:text-blue-400"
                                                  : "text-gray-600 hover:text-blue-600"
                                          }`
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {filteredProjects
                            .slice(0, visibleProjects)
                            .map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    className={`rounded-xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 group ${
                                        isDark
                                            ? "bg-gray-800 border-gray-700"
                                            : "bg-white border-gray-200"
                                    }`}
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                            <SocialLinks
                                                url={project.liveUrl}
                                                icon={ExternalLink}
                                                hasBg={true}
                                            />

                                            {project.githubUrl && (
                                                <SocialLinks
                                                    url={project.githubUrl}
                                                    icon={Github}
                                                    hasBg={true}
                                                />
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl font-semibold">
                                                {project.title}
                                            </h3>
                                            <span
                                                className={`px-2 py-1 text-xs  dark:  dark: rounded-full ${
                                                    isDark
                                                        ? "bg-blue-900/30 text-blue-400"
                                                        : "bg-blue-100 text-blue-600"
                                                }`}
                                            >
                                                {project.category}
                                            </span>
                                        </div>

                                        <p
                                            className={`mb-4 line-clamp-3 ${
                                                isDark
                                                    ? "text-gray-300"
                                                    : "text-gray-600"
                                            }`}
                                        >
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies
                                                .slice(0, 3)
                                                .map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className={`px-3 py-1 text-xs  rounded-full ${
                                                            isDark
                                                                ? "bg-gray-700 text-gray-300"
                                                                : "bg-gray-100 text-gray-700"
                                                        }`}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            {project.technologies.length >
                                                3 && (
                                                <span
                                                    className={`px-3 py-1 text-xs  rounded-full ${
                                                        isDark
                                                            ? "bg-gray-700 text-gray-300"
                                                            : "bg-gray-100 text-gray-700"
                                                    }`}
                                                >
                                                    +
                                                    {project.technologies
                                                        .length - 3}{" "}
                                                    more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                    </AnimatePresence>
                </div>

                {filteredProjects.length > visibleProjects && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <button
                            onClick={() =>
                                setVisibleProjects((prev) => prev + 3)
                            }
                            className={`px-8 py-3 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 ${
                                isDark ? "text-blue-400" : "text-blue-600"
                            }`}
                        >
                            Load More Projects
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
export default ProjectsSection;
