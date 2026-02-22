"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LaunchButton } from "@/components/sections/LaunchButton";
import { Boxes, Globe, Smartphone, Video, Palette, Target, Sword, Layout } from "lucide-react";

const serviceCategories = [
    {
        title: "Game-Ready 3D Arts",
        icon: <Sword className="w-8 h-8 text-brand-red" />,
        desc: "Crafting high-fidelity 3D assets optimized for modern game engines. From legendary weapons to complex character models.",
        items: ["Character Modeling", "Game Assets (Swords, Shields, etc.)", "Environmental Design", "Props & Hard Surface", "Texturing & PBR Workflows"]
    },
    {
        title: "Next-Gen Web Ecosystems",
        icon: <Globe className="w-8 h-8 text-accent-blue" />,
        desc: "Bridging the gap between custom code and powerful no-code frameworks for scalable, stunning web experiences.",
        items: ["Custom Next.js/React Dev", "WordPress & Webflow", "Builder.io Integration", "Framer Sites", "Performance Optimization"]
    },
    {
        title: "High-Fidelity Mobile Apps",
        icon: <Smartphone className="w-8 h-8 text-accent-purple" />,
        desc: "Dynamic iOS and Android applications built with premium no-code and low-code frameworks for rapid, reliable launch.",
        items: ["FlutterFlow Development", "Adalo & Glide Apps", "Cross-Platform UI/UX", "App Store Strategy", "API Integrations"]
    },
    {
        title: "Visual Storytelling & Video",
        icon: <Video className="w-8 h-8 text-orange-500" />,
        desc: "Cinematic video editing and motion graphics that capture attention and drive digital narrative.",
        items: ["Cinematic Editing", "Motion Graphics", "Color Grading", "Social Media Edits", "Corporate Vision Videos"]
    },
    {
        title: "Brand Identity & Design",
        icon: <Palette className="w-8 h-8 text-pink-500" />,
        desc: "Comprehensive brand systems that define how the world perceives your visionary project.",
        items: ["Logo Design", "Visual Identity Systems", "Brand Guidelines", "Social Media Assets", "Pitch Deck Design"]
    }
];

export default function CapabilitiesPage() {
    return (
        <>
            <Navbar />
            <main className="relative min-h-screen pt-32 md:pt-48 pb-20 px-6 overflow-hidden">
                {/* Dynamic Background Depth */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 mesh-gradient-bg opacity-[0.03] dark:opacity-[0.07]" />
                    <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent-blue/5 blur-[80px] md:blur-[120px] rounded-full animate-liquid opacity-20" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-20 md:mb-32"
                    >
                        <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Expertise</span>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8 md:mb-10">
                            Multi-disciplinary <br className="hidden md:block" /> excellence.
                        </h1>
                        <p className="text-neutral-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                            We operate at the intersection of gaming, mobile, and web technology. Our studio delivers everything from game-ready 3D assets to high-performance mobile ecosystems.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {serviceCategories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="liquid-glass p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] group hover:border-brand-red/30"
                            >
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-white/5 flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 transition-transform">
                                    {cat.icon}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 tracking-tight">{cat.title}</h2>
                                <p className="text-neutral-500 mb-8 md:mb-10 font-light leading-relaxed text-sm md:text-base">
                                    {cat.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    {cat.items.map((item, i) => (
                                        <span
                                            key={i}
                                            className="px-4 md:px-5 py-1.5 md:py-2 rounded-full border border-white/5 bg-white/5 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-foreground group-hover:border-white/10 transition-all font-sans"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <LaunchButton />
            <Footer />
        </>
    );
}
