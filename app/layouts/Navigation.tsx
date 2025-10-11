"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ThemeButton } from "../components/Button";
import { useTheme } from "../components/ThemeProvider";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const router = useRouter();

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "contact", label: "Contact" },
    ];

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const sections = navItems.map((item) =>
    //             document.getElementById(item.id)
    //         );
    //         const scrollPosition = window.scrollY + 100;

    //         for (let i = sections.length - 1; i >= 0; i--) {
    //             const section = sections[i];
    //             if (section && section.offsetTop <= scrollPosition) {
    //                 setActiveSection(navItems[i].id);
    //                 break;
    //             }
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    // const scrollToSection = (sectionId: string) => {
    //     const element = document.getElementById(sectionId);
    //     if (element) {
    //         element.scrollIntoView({ behavior: "smooth" });
    //     }
    //     setTimeout(() => {
    //         setIsOpen(false);
    //     }, 300);
    // };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b ${
                isDark
                    ? "bg-gray-900/80 border-gray-800"
                    : "bg-white/80 border-gray-200 "
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl w-[30%] md:w-[10%] font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    >
                        <Image
                            src={`/images/logo-${
                                isDark ? "white" : "black"
                            }.png`}
                            alt="TS"
                            width={200}
                            height={200}
                            className="w-full"
                            onClick={() => router.push("/")}
                        />
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    router.push(`#${item.id}`);
                                    setActiveSection(item.id);
                                }}
                                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                                    activeSection === item.id
                                        ? `${
                                              isDark
                                                  ? "text-blue-400"
                                                  : "text-blue-600"
                                          }`
                                        : `${
                                              isDark
                                                  ? "text-gray-300"
                                                  : "text-gray-600"
                                          }`
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden p-2 rounded-md transition-colors duration-200 ${
                            isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
                        }`}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                <ThemeButton />
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`md:hidden border-t ${
                            isDark
                                ? "bg-gray-900 border-gray-800"
                                : "bg-white border-gray-200"
                        }`}
                    >
                        <div className="px-4 py-2 space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        router.push(`#${item.id}`);
                                        setIsOpen(false);
                                        setActiveSection(item.id);
                                    }}
                                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                                        activeSection === item.id
                                            ? `${
                                                  isDark
                                                      ? "bg-blue-900/50 text-blue-400"
                                                      : "bg-blue-50 text-blue-600"
                                              }`
                                            : ` ${
                                                  isDark
                                                      ? "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                                                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                                              }`
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
export default Navigation;
