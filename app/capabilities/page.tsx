"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LaunchButton } from "@/components/sections/LaunchButton";
import { LiquidGlass } from "@/components/ui/LiquidGlass";
import { Globe, Smartphone, Video, Palette, Target, Sword, Layout, Fingerprint, Box, Cpu, Share2 } from "lucide-react";

const serviceCategories = [
    {
        title: "Web Design",
        icon: <Globe className="w-8 h-8 text-accent-blue" />,
        desc: "Performance-driven Next.js and Webflow architectures built for speed and immersion.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
        items: ["Next.js", "Webflow", "React", "UI/UX Architecture"]
    },
    {
        title: "Logo Design",
        icon: <Fingerprint className="w-8 h-8 text-brand-red" />,
        desc: "Distilling your essence into a single, immortal mark of your brand.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
        items: ["Vector Art", "Brand Marks", "Typography", "Iconography"]
    },
    {
        title: "Brand Identity",
        icon: <Palette className="w-8 h-8 text-accent-amber" />,
        desc: "Establishing the cohesive visual laws of your brand's ecosystem.",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800",
        items: ["Brand Guidelines", "Color Systems", "Visual DNA", "Pitch Decks"]
    },
    {
        title: "Android & iOS App Development",
        icon: <Smartphone className="w-8 h-8 text-accent-purple" />,
        desc: "Premium native and cross-platform mobile experiences for modern users.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
        items: ["FlutterFlow", "React Native", "App Store Strategy", "Native UI/UX"]
    },
    {
        title: "Video Editing",
        icon: <Video className="w-8 h-8 text-brand-red" />,
        desc: "Cinematic, precision editing and post-production that commands attention.",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
        items: ["Color Grading", "Sound Design", "Narrative Pacing", "VFX"]
    },
    {
        title: "3D Models for Games",
        icon: <Sword className="w-8 h-8 text-accent-emerald" />,
        desc: "High-poly characters, legendary weapons, and game environments.",
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=800",
        items: ["Character Modeling", "Hard Surface", "Texturing", "Rigging"]
    },
    {
        title: "3D Video Ads",
        icon: <Box className="w-8 h-8 text-accent-pink" />,
        desc: "Physics-defying cinematic 3D motion ads designed for impact.",
        image: "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&fit=crop&q=80&w=800",
        items: ["Motion Graphics", "Product Sims", "Lighting", "Rendering"]
    },
    {
        title: "AI Content Creation",
        icon: <Cpu className="w-8 h-8 text-accent-purple" />,
        desc: "Human-led, AI-powered workflows that accelerate creativity.",
        image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&q=80&w=800",
        items: ["Generative Assets", "Prompt Engineering", "Workflow Automation"]
    },
    {
        title: "Social Media Content Creation",
        icon: <Share2 className="w-8 h-8 text-brand-red" />,
        desc: "Scroll-stopping assets designed for viral Instagram campaigns.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
        items: ["Viral Engineering", "Short-form Video", "Static Graphics"]
    },
    {
        title: "Social Media Planning",
        icon: <Target className="w-8 h-8 text-accent-blue" />,
        desc: "Strategic, data-driven deployment of content across social channels.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        items: ["Campaign Strategy", "Analytics", "Audience Growth", "Scheduling"]
    }
];

export default function CapabilitiesPage() {
    return (
        <>
            <Navbar />
            <main className="relative min-h-screen pt-32 md:pt-48 pb-20 px-6 overflow-hidden">
                {/* Dynamic Background Depth */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 opacity-[0.03]" />
                    <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent-blue/5 blur-[80px] md:blur-[120px] rounded-full animate-liquid opacity-20" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-20 md:mb-32"
                    >
                        <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Expertise</span>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8 md:mb-10 text-neutral-900">
                            Multi-disciplinary <br className="hidden md:block" /> excellence.
                        </h1>
                        <p className="text-neutral-600 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                            We operate at the intersection of branding, mobile, and web technology. Our studio delivers everything from game-ready 3D assets to high-performance web ecosystems.
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
                                className="relative group flex h-full"
                            >
                                <div className="w-full h-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-white/80 backdrop-blur-xl border border-white/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col relative z-10">
                                    <div className="h-48 md:h-64 w-full relative overflow-hidden bg-neutral-50 shrink-0">
                                        <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="p-8 md:p-10 flex flex-col flex-grow relative bg-white/50">
                                        <div className="absolute -top-10 left-8 md:left-10 w-16 h-16 md:w-20 md:h-20 rounded-[1.25rem] bg-white shadow-md border border-neutral-100 flex items-center justify-center -translate-y-2 group-hover:-translate-y-4 transition-transform duration-500 z-20">
                                            {cat.icon}
                                        </div>
                                        <div className="mt-8 md:mt-10 flex flex-col h-full">
                                            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-neutral-900">{cat.title}</h2>
                                            <p className="text-neutral-600 mb-8 font-medium leading-relaxed text-sm md:text-base flex-grow">
                                                {cat.desc}
                                            </p>
                                            <div className="flex flex-wrap gap-2 md:gap-3 mt-auto pt-4 border-t border-neutral-100">
                                                {cat.items.map((item, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-4 py-1.5 rounded-full border border-neutral-200/60 bg-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-neutral-700 shadow-sm mix-blend-multiply"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
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
