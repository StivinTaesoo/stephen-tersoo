import AboutSection from "./components/AboutSection";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillSection";
import ThemeProvider from "./components/ThemeProvider";

export default function Home() {
    return (
        <ThemeProvider>
            <Navigation />
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
        </ThemeProvider>
    );
}
