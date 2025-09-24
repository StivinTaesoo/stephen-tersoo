"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Moon,
    Sun,
    Menu,
    X,
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Download,
    ChevronDown,
    Calendar,
    MapPin,
    Send,
    CheckCircle,
} from "lucide-react";
import ThemeProvider from "./ThemeProvider";

// Main App Component
const AppComponent = () => {
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
};

export default AppComponent;
