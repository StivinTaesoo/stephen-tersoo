import Link from "next/link";
import { useTheme } from "./ThemeProvider";

interface SocialLinkProps {
    url: string;
    icon: React.ComponentType<{ size?: number | string; color?: string }>;
    hasBg?: boolean;
}

const SocialLinks: React.FC<SocialLinkProps> = ({
    url,
    icon: Icon,
    hasBg = false,
}) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (
        <Link
            href={`${url}`}
            target="_blank"
            rel="noopener noreferrer"
            className={
                hasBg
                    ? `p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200`
                    : `p-2 ${
                          isDark
                              ? "text-gray-400 hover:text-blue-400"
                              : "text-gray-600 hover:text-blue-600"
                      }   transition-colors duration-200`
            }
        >
            <Icon size={24} />
        </Link>
    );
};
export default SocialLinks;
