import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import Footer from "./layouts/FooterSection";
import HeroSection from "./sections/Hero";
import Navigation from "./layouts/Navigation";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillSection";
import ContactSection from "./sections/ContactSection";

export default function Home() {
    return (
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
    );
}
