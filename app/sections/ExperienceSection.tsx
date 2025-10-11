"use client";

import { motion } from "framer-motion";
import { experiences } from "../data";
import { MapPin } from "lucide-react";
import { useTheme } from "../components/ThemeProvider";

const ExperienceSection = () => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (
        <section
            id="experience"
            className={`py-20 px-4 sm:px-6 lg:px-8 ${
                isDark ? "bg-gray-800/50" : "bg-gray-50"
            }`}
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
                        Work Experience
                    </h2>
                    <p
                        className={`"text-xl max-w-3xl mx-auto" ${
                            isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                        My professional journey and key achievements
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

                    {experiences.map((experience, index) => (
                        <motion.div
                            key={experience.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative flex items-center mb-12 ${
                                index % 2 === 0
                                    ? "md:flex-row"
                                    : "md:flex-row-reverse"
                            }`}
                        >
                            <div
                                className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4   z-10 ${
                                    isDark ? "border-gray-900" : "border-white"
                                }`}
                            ></div>

                            <div
                                className={`w-full md:w-1/2 ${
                                    index % 2 === 0
                                        ? "md:pr-12 ml-12 md:ml-0"
                                        : "md:pl-12 ml-12 md:ml-0"
                                }`}
                            >
                                <div
                                    className={`p-6 rounded-xl shadow-lg border ${
                                        isDark
                                            ? "bg-gray-800 border-gray-700"
                                            : "bg-white border-gray-200"
                                    }`}
                                >
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">
                                                {experience.title}
                                            </h3>
                                            <p
                                                className={`font-medium ${
                                                    isDark
                                                        ? "text-blue-400"
                                                        : "text-blue-600"
                                                }`}
                                            >
                                                {experience.company}
                                            </p>
                                            <p
                                                className={`text-sm flex items-center mt-1 ${
                                                    isDark
                                                        ? "text-gray-400"
                                                        : "text-gray-500"
                                                }`}
                                            >
                                                <MapPin
                                                    size={14}
                                                    className="mr-1"
                                                />
                                                {experience.location}
                                            </p>
                                        </div>
                                        <div
                                            className={`text-sm mt-2 sm:mt-0 ${
                                                isDark
                                                    ? "text-gray-400"
                                                    : "text-gray-500"
                                            }`}
                                        >
                                            {experience.startDate} -{" "}
                                            {experience.endDate}
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-4">
                                        {experience.description.map(
                                            (item, idx) => (
                                                <li
                                                    key={idx}
                                                    className={`text-sm flex items-start ${
                                                        isDark
                                                            ? "text-gray-300"
                                                            : "text-gray-600"
                                                    }`}
                                                >
                                                    <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    {item}
                                                </li>
                                            )
                                        )}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {experience.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default ExperienceSection;
