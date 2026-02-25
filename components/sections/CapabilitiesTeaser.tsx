"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sword, Globe, Smartphone, Palette, Video, Cpu, Share2, Target, Box, Fingerprint } from "lucide-react";


const capabilities = [
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Digital Presence & Platforms",
        desc: "High-performance web architecture and immersive mobile experiences.",
        gradient: "from-accent-blue/10 to-accent-purple/10",
        iconColor: "text-accent-blue",
        tools: ["Web Design", "App Development", "Next.js", "Webflow"]
    },
    {
        icon: <Palette className="w-6 h-6" />,
        title: "Brand Ecosystem & Identity",
        desc: "Establishing the cohesive visual laws and immortal marks of your brand.",
        gradient: "from-brand-red/10 to-accent-pink/10",
        iconColor: "text-brand-red",
        tools: ["Logo Design", "Brand Identity", "Visual DNA"]
    },
    {
        icon: <Sword className="w-6 h-6" />,
        title: "3D Worlds & Cinematic Motion",
        desc: "Simulating reality with high-poly models, environments, and motion graphics.",
        gradient: "from-accent-emerald/10 to-accent-blue/10",
        iconColor: "text-accent-emerald",
        tools: ["3D Game Models", "3D Video Ads", "Video Editing"]
    },
    {
        icon: <Smartphone className="w-6 h-6" />,
        title: "AI & Algorithmic Growth",
        desc: "Human-led, AI-powered content workflows scaling your audience engagement.",
        gradient: "from-accent-purple/10 to-accent-pink/10",
        iconColor: "text-accent-purple",
        tools: ["AI Content Creation", "Social Media Content", "Social Planning"]
    },
];

export const CapabilitiesTeaser = () => {
    return (
        <section className="py-32 px-6 relative overflow-hidden">
            {/* Glow orbs — w-0 h-0 so only the box-shadow is visible */}
            <div className="absolute top-1/3 right-[5%] w-0 h-0 rounded-full bg-transparent pointer-events-none" style={{ boxShadow: "0 0 200px 120px rgba(121,40,202,0.07)" }} />
            <div className="absolute bottom-1/4 left-[10%] w-0 h-0 rounded-full bg-transparent pointer-events-none" style={{ boxShadow: "0 0 180px 100px rgba(255,0,0,0.07)" }} />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
                    <div className="max-w-xl">
                        <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] block mb-4">The Scorch Sequence</span>
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none uppercase">
                            Core Service <br /> Hierarchy.
                        </h2>
                    </div>
                    <p className="text-neutral-500 max-w-sm mb-4 leading-relaxed font-light text-base md:text-lg">
                        We don’t just build pages; we build digital worlds. High-end aesthetics meet flawless execution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {capabilities.map((cap, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                            className="relative group"
                        >
                            <div className="w-full h-full rounded-[3rem] p-8 md:p-10 bg-[#ebf0f5] shadow-[24px_24px_64px_#d1d9e6,-24px_-24px_64px_#ffffff] border border-white/50 transition-all duration-500 hover:shadow-[inset_12px_12px_24px_#d1d9e6,inset_-12px_-12px_24px_#ffffff] flex flex-col relative overflow-hidden group">
                                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${cap.gradient} shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] flex items-center justify-center ${cap.iconColor} transition-all duration-300 mb-8 border border-white/40`}>
                                    {cap.icon}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight text-neutral-900 uppercase">{cap.title}</h3>
                                <p className="text-neutral-500 md:text-lg leading-relaxed font-light mb-8 flex-grow">
                                    {cap.desc}
                                </p>
                                <div className="flex flex-wrap gap-4 md:gap-5 mt-auto pt-6 border-t border-white/40">
                                    {cap.tools.map((tool, i) => (
                                        <span key={i} className="px-4 py-2 rounded-xl bg-[#ebf0f5] shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] text-[9px] md:text-[10px] font-black uppercase tracking-widest text-neutral-600 border border-white/20">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

