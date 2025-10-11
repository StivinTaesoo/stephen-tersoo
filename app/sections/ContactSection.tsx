"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
    CheckCircle,
    Github,
    Linkedin,
    Mail,
    MapPin,
    Send,
} from "lucide-react";
import { useTheme } from "../components/ThemeProvider";
import Link from "next/link";

const ContactSection = () => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } catch (error) {
            console.error("Failed to send email:", error);
            setIsSubmitting(false);
            setSubmitStatus("error");
        }
    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Get In Touch
                    </h2>
                    <p
                        className={`text-xl max-w-3xl mx-auto ${
                            isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                        Have a project in mind or want to collaborate? I&apos;d
                        love to hear from you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">
                                Let&apos;s start a conversation
                            </h3>
                            <p
                                className={`mb-8 ${
                                    isDark ? "text-gray-300" : "text-gray-600"
                                }`}
                            >
                                I&apos;m always interested in hearing about new
                                projects and opportunities. Whether you&apos;re
                                a company looking to hire, or you&apos;re a
                                fellow developer wanting to collaborate,
                                don&apos;t hesitate to reach out.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                        isDark
                                            ? "bg-blue-900/30"
                                            : "bg-blue-100"
                                    }`}
                                >
                                    <Mail
                                        className={`${
                                            isDark
                                                ? "text-blue-400"
                                                : "text-blue-600"
                                        }`}
                                        size={20}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <p
                                        className={`${
                                            isDark
                                                ? "text-gray-300"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        stephentersoo17@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                        isDark
                                            ? "bg-green-900/30"
                                            : "bg-green-100"
                                    }`}
                                >
                                    <MapPin
                                        className={` ${
                                            isDark
                                                ? "text-green-400"
                                                : "text-green-600"
                                        }`}
                                        size={20}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <p
                                        className={`${
                                            isDark
                                                ? "text-gray-300"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        Benue State, Nigeria
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                        isDark
                                            ? "bg-purple-900/30"
                                            : "bg-purple-100"
                                    }`}
                                >
                                    <Github
                                        className={`${
                                            isDark
                                                ? "text-purple-400"
                                                : "text-purple-600"
                                        }`}
                                        size={20}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-medium">GitHub</h4>
                                    <p
                                        className={`${
                                            isDark
                                                ? "text-gray-300"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        github.com/StivinTaesoo
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">
                                Follow me on social media
                            </h4>
                            <div className="flex space-x-4">
                                <Link
                                    href="https://github.com/StivinTaesoo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                                        isDark
                                            ? "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                                >
                                    <Github size={20} />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/mwlite/in/tersoo-stephen-66a70a93"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                                        isDark
                                            ? "bg-gray-800 text-gray-400 hover:bg-gray-700"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                                >
                                    <Linkedin size={20} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className={` dark: p-8 rounded-xl shadow-lg border ${
                            isDark
                                ? "bg-gray-800 border-gray-700"
                                : "bg-white border-gray-200"
                        }`}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-200 ${
                                            isDark
                                                ? "bg-gray-700 border-gray-600"
                                                : "bg-white border-gray-300"
                                        }`}
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-200 ${
                                            isDark
                                                ? "bg-gray-700 border-gray-600"
                                                : "bg-white border-gray-300"
                                        }`}
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-200 ${
                                        isDark
                                            ? "bg-gray-700 border-gray-600"
                                            : "bg-white border-gray-300"
                                    }`}
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white transition-colors duration-200 ${
                                        isDark
                                            ? "bg-gray-700 border-gray-600"
                                            : "bg-white border-gray-300"
                                    }`}
                                    placeholder="Tell me about your project or just say hi!"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <AnimatePresence>
                                    {submitStatus === "success" && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className={`flex items-center space-x-2 ${
                                                isDark
                                                    ? "text-green-400"
                                                    : "text-green-600"
                                            }`}
                                        >
                                            <CheckCircle size={20} />
                                            <span className="text-sm">
                                                Message sent successfully!
                                            </span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="ml-auto flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
