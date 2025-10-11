"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../data";
import { useTheme } from "../components/ThemeProvider";

const SkillsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", "Frontend", "Tools"];
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const filteredSkills =
        selectedCategory === "All"
            ? skills
            : skills.filter((skill) => skill.category === selectedCategory);

    return (
        <section
            id="skills"
            className={`py-20 px-4 sm:px-6 lg:px-8 ${
                isDark ? "bg-gray-800/50" : "bg-gray-50"
            } `}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Skills & Technologies
                    </h2>
                    <p
                        className={`text-xl max-w-3xl mx-auto ${
                            isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                        Here are the technologies and tools I work with to bring
                        ideas to life
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
                        className={`flex rounded-lg p-1 shadow-lg border  dark: ${
                            isDark
                                ? "bg-gray-800 border-gray-700"
                                : "bg-white border-gray-200"
                        } `}
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                                    selectedCategory === category
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="wait">
                        {filteredSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                                className={`p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow duration-300 ${
                                    isDark
                                        ? "bg-gray-800 border-gray-700"
                                        : "bg-white border-gray-200"
                                }`}
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-lg font-semibold">
                                        {skill.name}
                                    </h3>
                                    <span
                                        className={`text-sm  ${
                                            isDark
                                                ? "text-gray-400"
                                                : "text-gray-500"
                                        }`}
                                    >
                                        {skill.level}%
                                    </span>
                                </div>
                                <div
                                    className={`w-full rounded-full h-2 ${
                                        isDark ? "bg-gray-700" : "bg-gray-200"
                                    }`}
                                >
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{
                                            width: `${skill.level}%`,
                                        }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        viewport={{ once: true }}
                                        className={`h-2 rounded-full ${
                                            skill.category === "Frontend"
                                                ? "bg-blue-600"
                                                : skill.category === "Backend"
                                                ? "bg-green-600"
                                                : "bg-purple-600"
                                        }`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
