"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

const HeroSection = () => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
        <section
            id="home"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 1rem",
                paddingTop: "8rem",
            }}
        >
            <div style={{ maxWidth: "80rem", margin: "0 auto", width: "100%" }}>
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
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                            }}
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                style={{
                                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                                    fontWeight: "bold",
                                    lineHeight: "1.2",
                                }}
                            >
                                Hi, I&apos;m{" "}
                                <span
                                    style={{
                                        background:
                                            "linear-gradient(to right, #3b82f6, #8b5cf6)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    Stephen Tersoo
                                </span>
                            </motion.h1>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                style={{
                                    fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                                    color: isDark ? "#d1d5db" : "#6b7280",
                                }}
                            >
                                Frontend Software Engineer
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                style={{
                                    fontSize: "1.125rem",
                                    color: isDark ? "#9ca3af" : "#6b7280",
                                    maxWidth: "32rem",
                                }}
                            >
                                Passionate about creating beautiful, functional,
                                and user-friendly web experiences with modern
                                technologies like React, Next.js, and
                                TypeScript.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                            }}
                            className="sm:flex-row"
                        >
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("projects")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                style={{
                                    padding: "0.75rem 2rem",
                                    background:
                                        "linear-gradient(to right, #3b82f6, #8b5cf6)",
                                    color: "white",
                                    borderRadius: "0.5rem",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "1rem",
                                    fontWeight: "500",
                                    transition: "transform 0.2s ease",
                                    boxShadow:
                                        "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform =
                                        "scale(1.05)";
                                    e.currentTarget.style.background =
                                        "linear-gradient(to right, #2563eb, #7c3aed)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform =
                                        "scale(1)";
                                    e.currentTarget.style.background =
                                        "linear-gradient(to right, #3b82f6, #8b5cf6)";
                                }}
                            >
                                View My Work
                            </button>
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                style={{
                                    padding: "0.75rem 2rem",
                                    border: `2px solid #3b82f6`,
                                    color: isDark ? "#60a5fa" : "#3b82f6",
                                    background: "transparent",
                                    borderRadius: "0.5rem",
                                    cursor: "pointer",
                                    fontSize: "1rem",
                                    fontWeight: "500",
                                    transition: "all 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform =
                                        "scale(1.05)";
                                    e.currentTarget.style.background =
                                        "#3b82f6";
                                    e.currentTarget.style.color = "white";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform =
                                        "scale(1)";
                                    e.currentTarget.style.background =
                                        "transparent";
                                    e.currentTarget.style.color = isDark
                                        ? "#60a5fa"
                                        : "#3b82f6";
                                }}
                            >
                                Get In Touch
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            style={{ display: "flex", gap: "1rem" }}
                        >
                            <a
                                href="https://github.com/StivinTaesoo"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    padding: "0.5rem",
                                    color: isDark ? "#9ca3af" : "#6b7280",
                                    transition: "color 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = isDark
                                        ? "#60a5fa"
                                        : "#3b82f6";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = isDark
                                        ? "#9ca3af"
                                        : "#6b7280";
                                }}
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/mwlite/in/tersoo-stephen-66a70a93"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    padding: "0.5rem",
                                    color: isDark ? "#9ca3af" : "#6b7280",
                                    transition: "color 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = isDark
                                        ? "#60a5fa"
                                        : "#3b82f6";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = isDark
                                        ? "#9ca3af"
                                        : "#6b7280";
                                }}
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="mailto:stephentersoo17@gmail.com"
                                style={{
                                    padding: "0.5rem",
                                    color: isDark ? "#9ca3af" : "#6b7280",
                                    transition: "color 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = isDark
                                        ? "#60a5fa"
                                        : "#3b82f6";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = isDark
                                        ? "#9ca3af"
                                        : "#6b7280";
                                }}
                            >
                                <Mail size={24} />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                        className="lg:justify-end"
                    >
                        <div style={{ position: "relative" }}>
                            <div
                                style={{
                                    width: "20rem",
                                    height: "20rem",
                                    borderRadius: "50%",
                                    background:
                                        "linear-gradient(to right, #3b82f6, #8b5cf6)",
                                    padding: "0.25rem",
                                }}
                            >
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "50%",
                                        background: isDark
                                            ? "#111827"
                                            : "#ffffff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "18rem",
                                            height: "18rem",
                                            borderRadius: "50%",
                                            background: isDark
                                                ? "linear-gradient(to right, #374151, #4b5563)"
                                                : "linear-gradient(to right, #e5e7eb, #d1d5db)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "4rem",
                                            fontWeight: "bold",
                                            color: isDark
                                                ? "#9ca3af"
                                                : "#6b7280",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <Image
                                            src={"/images/tersoo.png"}
                                            alt="ST"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                            }}
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    style={{
                        position: "absolute",
                        bottom: "2rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        animation: "bounce 2s infinite",
                    }}
                >
                    <ChevronDown size={32} style={{ color: "#9ca3af" }} />
                </motion.div>
            </div>
        </section>
    );
};
export default HeroSection;
