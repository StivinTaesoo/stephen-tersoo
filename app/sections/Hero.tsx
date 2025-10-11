"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useTheme } from "../components/ThemeProvider";
import { ButtonPrimary } from "../components/Button";
import SocialLinks from "../components/SocialLinks";

const HeroSection = () => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <section
            id="home"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 1rem",
                paddingTop: "8rem",
            }}
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
                                Hi, I&apos;m{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Stephen Tersoo
                                </span>
                            </motion.h1>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className={`text-xl sm:text-2xl ${
                                    isDark ? "text-gray-300" : "text-gray-600"
                                } `}
                            >
                                Frontend Software Engineer
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className={`text-lg ${
                                    isDark ? "text-gray-400" : "text-gray-600"
                                }  max-w-lg`}
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
                            <ButtonPrimary
                                text="View My Work"
                                link="projects"
                            />
                            <ButtonPrimary
                                text="Get In Touch"
                                link="contact"
                                isOutline={true}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex space-x-4"
                        >
                            <SocialLinks
                                url="https://github.com/StivinTaesoo"
                                icon={Github}
                            />
                            <SocialLinks
                                url="https://www.linkedin.com/mwlite/in/tersoo-stephen-66a70a93"
                                icon={Linkedin}
                            />
                            <SocialLinks
                                url="mailto:stephentersoo17@gmail.com"
                                icon={Mail}
                            />
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
                                <div
                                    className={`w-full h-full rounded-full ${
                                        isDark ? "bg-gray-900" : "bg-white"
                                    }  flex items-center justify-center`}
                                >
                                    <div
                                        className={`w-72 h-72 rounded-full bg-gradient-to-r ${
                                            isDark
                                                ? "from-gray-700 to-gray-600 text-gray-400"
                                                : "from-gray-200 to-gray-300 text-gray-500"
                                        }   flex items-center justify-center text-6xl font-bold  `}
                                    >
                                        <Image
                                            src={"/images/tersoo.png"}
                                            alt="ST"
                                            className="w-full h-full"
                                            width={200}
                                            height={200}
                                        />
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
export default HeroSection;
