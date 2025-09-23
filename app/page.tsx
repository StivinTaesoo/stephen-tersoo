import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
import ThemeProvider from "./components/ThemeProvider";

export default function Home() {
    return (
        <ThemeProvider>
            <Navigation />
            <HeroSection />
        </ThemeProvider>
    );
}
