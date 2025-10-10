import { useTheme } from "./ThemeProvider";

interface SocialLinkProps {
    url: string;
    icon: React.ComponentType<{ size?: number | string; color?: string }>;
}

const SocialLinks: React.FC<SocialLinkProps> = ({ url, icon: Icon }) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (
        <a
            href={`${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 ${
                isDark ? "text-gray-400" : "text-gray-600"
            }  hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200`}
        >
            <Icon size={24} />
        </a>
    );
};
export default SocialLinks;
