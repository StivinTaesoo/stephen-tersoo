import type { Config } from "tailwindcss";

const config: Config = {
    // Tell Tailwind where to look for classes
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    // CRITICAL: Use class-based dark mode instead of media query
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--color-background)",
                foreground: "var(--color-foreground)",
            },
        },
    },
    plugins: [],
};

export default config;
