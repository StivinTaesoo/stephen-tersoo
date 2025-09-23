"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Moon,
    Sun,
    Menu,
    X,
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Download,
    ChevronDown,
    Calendar,
    MapPin,
    Send,
    CheckCircle,
} from "lucide-react";

// Navigation Component
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) =>
                document.getElementById(item.id)
            );
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    >
                        Stephen Tersoo
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                                    activeSection === item.id
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "text-gray-600 dark:text-gray-300"
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
                    >
                        <div className="px-4 py-2 space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                                        activeSection === item.id
                                            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50"
                                            : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

// Hero Section
const HeroSection = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
                            >
                                Hi, I'm{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Stephen Tersoo
                                </span>
                            </motion.h1>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300"
                            >
                                Frontend Software Engineer
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-lg text-gray-600 dark:text-gray-400 max-w-lg"
                            >
                                Passionate about creating beautiful, functional,
                                and user-friendly web experiences with modern
                                technologies like React, Next.js, and
                                TypeScript.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("projects")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                            >
                                View My Work
                            </button>
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105"
                            >
                                Get In Touch
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex space-x-4"
                        >
                            <a
                                href="https://github.com/stephenterso"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://linkedin.com/in/stephenterso"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="mailto:stephen.terso@example.com"
                                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                <Mail size={24} />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
                                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                                    <div className="w-72 h-72 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-6xl font-bold text-gray-500 dark:text-gray-400">
                                        ST
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
                >
                    <ChevronDown size={32} className="text-gray-400" />
                </motion.div>
            </div>
        </section>
    );
};

// About Section
const AboutSection = () => {
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
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
                        <div className="prose prose-lg dark:prose-dark max-w-none">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                I'm a passionate Frontend Software Engineer with
                                over 4 years of experience creating exceptional
                                digital experiences. My journey began with a
                                curiosity about how websites work, which evolved
                                into a deep love for crafting beautiful,
                                functional, and user-centric web applications.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                I specialize in modern frontend technologies
                                including React, Next.js, and TypeScript, with a
                                strong focus on performance optimization,
                                accessibility, and user experience. I believe in
                                writing clean, maintainable code and staying
                                up-to-date with the latest industry trends and
                                best practices.
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                When I'm not coding, you can find me exploring
                                new technologies, contributing to open-source
                                projects, or sharing knowledge with the
                                developer community through blog posts and
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
                                    className="text-blue-600 dark:text-blue-400"
                                />
                                <span className="text-sm font-medium">
                                    San Francisco, CA
                                </span>
                            </div>
                            <div className="flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full">
                                <Calendar
                                    size={16}
                                    className="text-green-600 dark:text-green-400"
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
                            onClick={() => window.open("/resume.pdf", "_blank")}
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
                        className="grid grid-cols-2 gap-6"
                    >
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                4+
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">
                                Years Experience
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                                50+
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">
                                Projects Completed
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                                15+
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">
                                Technologies
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">
                                100%
                            </div>
                            <div className="text-gray-600 dark:text-gray-300">
                                Client Satisfaction
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Skills Section
const SkillsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", "Frontend", "Backend", "Tools"];

    const filteredSkills =
        selectedCategory === "All"
            ? skills
            : skills.filter((skill) => skill.category === selectedCategory);

    return (
        <section
            id="skills"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
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
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
                    <div className="flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg border border-gray-200 dark:border-gray-700">
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
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-lg font-semibold">
                                        {skill.name}
                                    </h3>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {skill.level}%
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
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

// Projects Section
const ProjectsSection = () => {
    const [selectedFilter, setSelectedFilter] = useState("All");
    const [visibleProjects, setVisibleProjects] = useState(6);

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
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
                    <div className="flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-lg border border-gray-200 dark:border-gray-700">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedFilter(category)}
                                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                                    selectedFilter === category
                                        ? "bg-blue-600 text-white shadow-md"
                                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
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
                                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                                            >
                                                <Github size={20} />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl font-semibold">
                                                {project.title}
                                            </h3>
                                            <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                                                {project.category}
                                            </span>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies
                                                .slice(0, 3)
                                                .map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            {project.technologies.length >
                                                3 && (
                                                <span className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
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
                            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                        >
                            Load More Projects
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

// Experience Section
const ExperienceSection = () => {
    return (
        <section
            id="experience"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
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
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
                            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                            <div
                                className={`w-full md:w-1/2 ${
                                    index % 2 === 0
                                        ? "md:pr-12 ml-12 md:ml-0"
                                        : "md:pl-12 ml-12 md:ml-0"
                                }`}
                            >
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">
                                                {experience.title}
                                            </h3>
                                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                                                {experience.company}
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mt-1">
                                                <MapPin
                                                    size={14}
                                                    className="mr-1"
                                                />
                                                {experience.location}
                                            </p>
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                                            {experience.startDate} -{" "}
                                            {experience.endDate}
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-4">
                                        {experience.description.map(
                                            (item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-gray-600 dark:text-gray-300 text-sm flex items-start"
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

// Contact Section
const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => setSubmitStatus("idle"), 5000);
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love
                        to hear from you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">
                                Let's start a conversation
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                I'm always interested in hearing about new
                                projects and opportunities. Whether you're a
                                company looking to hire, or you're a fellow
                                developer wanting to collaborate, don't hesitate
                                to reach out.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                                    <Mail
                                        className="text-blue-600 dark:text-blue-400"
                                        size={20}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        stephen.terso@example.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                    <MapPin
                                        className="text-green-600 dark:text-green-400"
                                        size={20}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        San Francisco, CA
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                                    <Github
                                        className="text-purple-600 dark:text-purple-400"
                                        size={20}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-medium">GitHub</h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        github.com/stephenterso
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">
                                Follow me on social media
                            </h4>
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/stephenterso"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/stephenterso"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none transition-colors duration-200"
                                    placeholder="Tell me about your project or just say hi!"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <AnimatePresence>
                                    {submitStatus === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="flex items-center space-x-2 text-green-600 dark:text-green-400"
                                        >
                                            <CheckCircle size={20} />
                                            <span className="text-sm">
                                                Message sent successfully!
                                            </span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="ml-auto flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Footer
const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                            Stephen Tersoo
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Frontend Software Engineer passionate about creating
                            beautiful and functional web experiences.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/stephenterso"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://linkedin.com/in/stephenterso"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="mailto:stephen.terso@example.com"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {[
                                "About",
                                "Skills",
                                "Projects",
                                "Experience",
                                "Contact",
                            ].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() =>
                                            document
                                                .getElementById(
                                                    item.toLowerCase()
                                                )
                                                ?.scrollIntoView({
                                                    behavior: "smooth",
                                                })
                                        }
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Get In Touch
                        </h4>
                        <div className="space-y-2 text-gray-400">
                            <p>San Francisco, CA</p>
                            <p>stephen.terso@example.com</p>
                            <p>Available for new opportunities</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} Stephen Tersoo. All
                        rights reserved.
                    </p>
                    <p className="mt-2 text-sm">
                        Built with Next.js, TypeScript, and Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

// Main App Component
const AppComponent = () => {
    return (
        <ThemeProvider>
            <div className="relative">
                <Navigation />
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ExperienceSection />
                <ContactSection />
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default AppComponent;
