"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

// Create context with a default value
const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {},
});

export const useTheme = () => {
    const context = useContext(ThemeContext);
    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
            .matches
            ? "dark"
            : "light";

        const initialTheme = savedTheme || systemTheme;
        setTheme(initialTheme);
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem("theme", theme);
            // Set data attribute for CSS targeting
            document.documentElement.setAttribute("data-theme", theme);
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    // Define colors matching your original Tailwind classes exactly
    const colors = {
        background: theme === "dark" ? "#111827" : "#ffffff", // dark:bg-gray-900 / bg-white
        foreground: theme === "dark" ? "#ffffff" : "#111827", // dark:text-white / text-gray-900
        buttonBg: theme === "dark" ? "#1f2937" : "#e5e7eb", // dark:bg-gray-800 / bg-gray-200
        buttonHover: theme === "dark" ? "#374151" : "#d1d5db", // dark:hover:bg-gray-700 / hover:bg-gray-300
    };

    // Always render, but show loading state until mounted
    if (!mounted) {
        return (
            <ThemeContext.Provider
                value={{ theme: "light", toggleTheme: () => {} }}
            >
                <div style={{ minHeight: "100vh", background: "#ffffff" }}>
                    {children}
                </div>
            </ThemeContext.Provider>
        );
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div
                style={{
                    minHeight: "100vh",
                    background: colors.background,
                    color: colors.foreground,
                    transition: "background-color 0.3s ease, color 0.3s ease",
                }}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
