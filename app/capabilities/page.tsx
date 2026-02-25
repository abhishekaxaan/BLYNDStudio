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
        icon: <Globe className="w-6 h-6 text-accent-blue" />,
        desc: "Performance-driven Next.js and Webflow architectures built for speed and immersion.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
        items: ["Next.js", "Webflow", "React", "UI/UX Architecture"]
    },
    {
        title: "Logo Design",
        icon: <Fingerprint className="w-6 h-6 text-brand-red" />,
        desc: "Distilling your essence into a single, immortal mark of your brand.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
        items: ["Vector Art", "Brand Marks", "Typography", "Iconography"]
    },
    {
        title: "Brand Identity",
        icon: <Palette className="w-6 h-6 text-accent-amber" />,
        desc: "Establishing the cohesive visual laws of your brand's ecosystem.",
        image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800",
        items: ["Brand Guidelines", "Color Systems", "Visual DNA", "Pitch Decks"]
    },
    {
        title: "Android & iOS App Development",
        icon: <Smartphone className="w-6 h-6 text-accent-purple" />,
        desc: "Premium native and cross-platform mobile experiences for modern users.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
        items: ["FlutterFlow", "React Native", "App Store Strategy", "Native UI/UX"]
    },
    {
        title: "Video Editing",
        icon: <Video className="w-6 h-6 text-brand-red" />,
        desc: "Cinematic, precision editing and post-production that commands attention.",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
        items: ["Color Grading", "Sound Design", "Narrative Pacing", "VFX"]
    },
    {
        title: "3D Models for Games",
        icon: <Sword className="w-6 h-6 text-accent-emerald" />,
        desc: "High-poly characters, legendary weapons, and game environments.",
        image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=800",
        items: ["Character Modeling", "Hard Surface", "Texturing", "Rigging"]
    },
    {
        title: "3D Video Ads",
        icon: <Box className="w-6 h-6 text-accent-pink" />,
        desc: "Physics-defying cinematic 3D motion ads designed for impact.",
        image: "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&fit=crop&q=80&w=800",
        items: ["Motion Graphics", "Product Sims", "Lighting", "Rendering"]
    },
    {
        title: "AI Content Creation",
        icon: <Cpu className="w-6 h-6 text-accent-purple" />,
        desc: "Human-led, AI-powered workflows that accelerate creativity.",
        image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&q=80&w=800",
        items: ["Generative Assets", "Prompt Engineering", "Workflow Automation"]
    },
    {
        title: "Social Media Content Creation",
        icon: <Share2 className="w-6 h-6 text-brand-red" />,
        desc: "Scroll-stopping assets designed for viral Instagram campaigns.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
        items: ["Viral Engineering", "Short-form Video", "Static Graphics"]
    },
    {
        title: "Social Media Planning",
        icon: <Target className="w-6 h-6 text-accent-blue" />,
        desc: "Strategic, data-driven deployment of content across social channels.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        items: ["Campaign Strategy", "Analytics", "Audience Growth", "Scheduling"]
    }
];

export default function CapabilitiesPage() {
    return (
        <div className="bg-[#ebf0f5]">
            <Navbar />
            <main className="relative min-h-screen pt-32 md:pt-48 pb-20 px-6 overflow-hidden">
                {/* Dynamic Global Background Elements */}
                <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                    <div className="absolute top-20 left-[10%] w-0 h-0 rounded-full bg-transparent" style={{ boxShadow: "0 0 250px 150px rgba(255,0,0,0.12)" }} />
                    <div className="absolute top-[40%] right-[5%] w-0 h-0 rounded-full bg-transparent" style={{ boxShadow: "0 0 200px 120px rgba(0,112,243,0.10)" }} />
                    <div className="absolute bottom-32 left-[30%] w-0 h-0 rounded-full bg-transparent" style={{ boxShadow: "0 0 180px 100px rgba(121,40,202,0.08)" }} />
                    <div className="absolute top-[60%] left-[60%] w-0 h-0 rounded-full bg-transparent" style={{ boxShadow: "0 0 150px 90px rgba(16,185,129,0.06)" }} />

                    {/* Subtle Square Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_0%,transparent_100%)]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-20 md:mb-32"
                    >
                        <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Expertise</span>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 md:mb-10 text-neutral-900 uppercase">
                            Multi-disciplinary <br className="hidden md:block" /> excellence.
                        </h1>
                        <p className="text-neutral-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                            We operate at the intersection of branding, mobile, and web technology. Our studio delivers everything from game-ready 3D assets to high-performance web ecosystems.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {serviceCategories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative group"
                            >
                                <div className="w-full h-full rounded-[3rem] p-4 bg-[#ebf0f5] shadow-[24px_24px_64px_#d1d9e6,-24px_-24px_64px_#ffffff] border border-white/50 transition-all duration-500 hover:shadow-[inset_12px_12px_24px_#d1d9e6,inset_-12px_-12px_24px_#ffffff] flex flex-col group relative">
                                    <div className="h-64 md:h-80 w-full relative overflow-hidden rounded-[2.5rem] bg-[#e6e9ef] shadow-[inset_12px_12px_24px_#d1d9e6,inset_-12px_-12px_24px_#ffffff] mb-8">
                                        <img
                                            src={cat.image}
                                            alt={cat.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 mix-blend-multiply opacity-90"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#ebf0f5]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    <div className="px-6 pb-8 flex flex-col flex-grow">
                                        <div className="mb-6 flex items-center justify-between">
                                            <div className="w-16 h-16 rounded-2xl bg-[#ebf0f5] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] flex items-center justify-center border border-white/40 overflow-hidden relative">
                                                <div className={`absolute inset-0 opacity-10 ${cat.icon.props.className.includes('text-accent-blue') ? 'bg-accent-blue' : cat.icon.props.className.includes('text-brand-red') ? 'bg-brand-red' : cat.icon.props.className.includes('text-accent-amber') ? 'bg-accent-amber' : cat.icon.props.className.includes('text-accent-purple') ? 'bg-accent-purple' : cat.icon.props.className.includes('text-accent-emerald') ? 'bg-accent-emerald' : cat.icon.props.className.includes('text-accent-pink') ? 'bg-accent-pink' : ''}`} />
                                                <div className="relative z-10">{cat.icon}</div>
                                            </div>
                                            <div className="h-px flex-grow mx-6 bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
                                        </div>

                                        <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight text-neutral-900 uppercase">{cat.title}</h2>
                                        <p className="text-neutral-500 mb-8 font-light leading-relaxed text-sm md:text-base flex-grow">
                                            {cat.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-4 md:gap-5 mt-auto pt-6 border-t border-white/40">
                                            {cat.items.map((item, i) => (
                                                <span
                                                    key={i}
                                                    className="px-4 py-2 rounded-xl bg-[#ebf0f5] shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] text-[9px] md:text-[10px] font-black uppercase tracking-widest text-neutral-600 border border-white/20"
                                                >
                                                    {item}
                                                </span>
                                            ))}
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
        </div>
    );
}
