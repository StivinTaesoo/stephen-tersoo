import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ButtonProps {
    text: string;
    link: string;
    isOutline?: boolean;
}

export const ButtonPrimary: React.FC<ButtonProps> = ({
    text,
    link,
    isOutline = false,
}) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (
        <button
            onClick={() =>
                document
                    .getElementById(`${link}`)
                    ?.scrollIntoView({ behavior: "smooth" })
            }
            className={
                !isOutline
                    ? "px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                    : `px-8 py-3 border-2 border-blue-600  ${
                          isDark ? "text-gray-400" : "text-gray-600"
                      } rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105`
            }
        >
            {text}
        </button>
    );
};

export const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";
    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`fixed top-4 right-20 md:right-4 z-50 p-2 rounded-full  transition-colors duration-200 ${
                isDark
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-200 hover:bg-gray-300"
            }`}
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
};
