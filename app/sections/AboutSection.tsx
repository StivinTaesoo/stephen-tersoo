"use client";

import { motion } from "framer-motion";
import {
    Calendar,
    Download,
    MapPin,
    Code,
    Rocket,
    Users,
    Zap,
} from "lucide-react";
import { useTheme } from "../components/ThemeProvider";

interface ServiceCard {
    icon: React.ElementType;
    title: string;
    description: string;
}

const services: ServiceCard[] = [
    {
        icon: Code,
        title: "Modern Frontend",
        description:
            "Building with React, Next.js, and TypeScript using modern development patterns.",
    },
    {
        icon: Rocket,
        title: "Responsive Design",
        description:
            "Creating pixel-perfect, mobile-first designs that work beautifully on all devices.",
    },
    {
        icon: Users,
        title: "Collaborative Approach",
        description:
            "Working closely with teams and stakeholders to deliver user-centered solutions.",
    },
    {
        icon: Zap,
        title: "Fast Development",
        description:
            "Rapid prototyping and efficient workflows for quick turnaround times.",
    },
];

const AboutSection = () => {
    const { theme } = useTheme();

    // Define colors based on theme
    const isDark = theme === "dark";

    return (
        <section id="about" style={{ padding: "5rem 1rem" }}>
            <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginBottom: "4rem" }}
                >
                    <h2
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: "bold",
                            marginBottom: "1rem",
                        }}
                    >
                        About Me
                    </h2>
                    <p
                        style={{
                            fontSize: "1.25rem",
                            color: "var(--text-secondary)",
                            maxWidth: "48rem",
                            margin: "0 auto",
                        }}
                    >
                        Learn more about my journey, passion, and what drives me
                        as a developer
                    </p>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "3rem",
                        alignItems: "center",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem",
                        }}
                    >
                        <div>
                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    lineHeight: "1.8",
                                    marginBottom: "1rem",
                                }}
                            >
                                I'm a passionate Frontend Software Engineer with
                                over 4 years of experience creating exceptional
                                digital experiences. My journey began with a
                                curiosity about how websites work, which evolved
                                into a deep love for crafting beautiful,
                                functional, and user-centric web applications.
                            </p>
                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    lineHeight: "1.8",
                                    marginBottom: "1rem",
                                }}
                            >
                                I specialize in modern frontend technologies
                                including React, Next.js, and TypeScript, with a
                                strong focus on performance optimization,
                                accessibility, and user experience. I believe in
                                writing clean, maintainable code and staying
                                up-to-date with the latest industry trends and
                                best practices.
                            </p>
                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    lineHeight: "1.8",
                                }}
                            >
                                When I'm not coding, you can find me exploring
                                new technologies, contributing to open-source
                                projects, or sharing knowledge with the
                                developer community through blog posts and
                                mentoring.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "1rem",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    background: isDark
                                        ? "rgba(59, 130, 246, 0.2)"
                                        : "rgba(59, 130, 246, 0.1)",
                                    padding: "0.5rem 1rem",
                                    borderRadius: "9999px",
                                }}
                            >
                                <MapPin
                                    size={16}
                                    style={{ color: "var(--accent-blue)" }}
                                />
                                <span
                                    style={{
                                        fontSize: "0.875rem",
                                        fontWeight: "500",
                                    }}
                                >
                                    Benue State, Nigeria
                                </span>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    background: isDark
                                        ? "rgba(16, 185, 129, 0.2)"
                                        : "rgba(16, 185, 129, 0.1)",
                                    padding: "0.5rem 1rem",
                                    borderRadius: "9999px",
                                }}
                            >
                                <Calendar
                                    size={16}
                                    style={{ color: "var(--accent-green)" }}
                                />
                                <span
                                    style={{
                                        fontSize: "0.875rem",
                                        fontWeight: "500",
                                    }}
                                >
                                    Available for work
                                </span>
                            </div>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            onClick={() =>
                                window.open(
                                    "/images/stephen-tersoo-resume.pdf",
                                    "_blank"
                                )
                            }
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.75rem 1.5rem",
                                background:
                                    "linear-gradient(to right, #3b82f6, #8b5cf6)",
                                color: "white",
                                border: "none",
                                borderRadius: "0.5rem",
                                cursor: "pointer",
                                fontSize: "1rem",
                                fontWeight: "500",
                                transition: "transform 0.2s ease",
                                width: "fit-content",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                            }}
                        >
                            <Download size={20} />
                            <span>Download Resume</span>
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    style={{
                                        background: "var(--card-bg)",
                                        padding: "1.5rem",
                                        borderRadius: "0.75rem",
                                        border: "1px solid var(--card-border)",
                                        boxShadow: `0 4px 6px var(--card-shadow)`,
                                        transition: "box-shadow 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = `0 10px 15px var(--card-shadow)`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = `0 4px 6px var(--card-shadow)`;
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center",
                                            gap: "1rem",
                                        }}
                                    >
                                        <Icon
                                            size={48}
                                            style={{
                                                color: "var(--accent-blue)",
                                                strokeWidth: 1.5,
                                            }}
                                        />
                                        <h3
                                            style={{
                                                fontSize: "1.25rem",
                                                fontWeight: "600",
                                                color: "var(--text-primary)",
                                            }}
                                        >
                                            {service.title}
                                        </h3>
                                        <p
                                            style={{
                                                color: "var(--text-secondary)",
                                                lineHeight: "1.6",
                                            }}
                                        >
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
