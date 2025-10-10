"use client";

import { Github, Linkedin, Mail } from "lucide-react";

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
                                href="https://github.com/StivinTaesoo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/mwlite/in/tersoo-stephen-66a70a93"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="mailto:stephentersoo17@example.com"
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
                            <p>Benue State, Nigeria</p>
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
export default Footer;
