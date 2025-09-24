import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/FooterSection";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillSection";
import ThemeProvider from "./components/ThemeProvider";

export default function Home() {
    return (
        <ThemeProvider>
            <div className="relative">
                <Navigation />
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ExperienceSection />
                <ContactSection />
                <Footer />
            </div>
        </ThemeProvider>
    );
}
