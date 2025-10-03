"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check if we're in browser environment
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("theme");
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setIsDark(saved ? saved === "dark" : prefersDark);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("theme", isDark ? "dark" : "light");
            document.documentElement.classList.toggle("dark", isDark);
        }
    }, [isDark]);

    return (
        <div className={isDark ? "dark" : ""}>
            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
                <button
                    onClick={() => setIsDark(!isDark)}
                    className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
                    aria-label="Toggle theme"
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                {children}
            </div>
        </div>
    );
};

export default ThemeProvider;
