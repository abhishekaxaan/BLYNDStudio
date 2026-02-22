"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Cpu, Box, Share2, Terminal, Layout } from "lucide-react";
import { LiquidGlass } from "../ui/LiquidGlass";

const stacks = [
    { name: "Three.js", icon: <Box className="w-5 h-5" />, desc: "High-fidelity 3D WebGL immersion.", gradient: "from-brand-red/20 to-accent-pink/20", iconColor: "text-brand-red" },
    { name: "WordPress", icon: <Cpu className="w-5 h-5" />, desc: "Scalable, feature-rich ecosystems.", gradient: "from-accent-amber/20 to-brand-red/20", iconColor: "text-accent-amber" },
    { name: "Flutterflow", icon: <Share2 className="w-5 h-5" />, desc: "Next-gen mobile performance.", gradient: "from-accent-purple/20 to-accent-pink/20", iconColor: "text-accent-purple" },
    { name: "Webflow", icon: <Layout className="w-5 h-5" />, desc: "Cinematic design-to-code.", gradient: "from-accent-emerald/20 to-accent-blue/20", iconColor: "text-accent-emerald" },
    { name: "Next.js", icon: <Terminal className="w-5 h-5" />, desc: "Ultra-fast custom architectures.", gradient: "from-accent-blue/20 to-accent-purple/20", iconColor: "text-accent-blue" },
    { name: "Framer", icon: <Layers className="w-5 h-5" />, desc: "High-end motion interaction.", gradient: "from-accent-pink/20 to-accent-purple/20", iconColor: "text-accent-pink" },
];

export const TechMatrix = () => {
    return (
        <section className="py-24 md:py-40 px-6 relative overflow-hidden">
            {/* Background orbs for blur refraction */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Glow orbs — w-0 h-0 so only the box-shadow is visible */}
                <div className="absolute top-1/3 left-[10%] w-0 h-0 rounded-full bg-transparent" style={{ boxShadow: "0 0 200px 120px rgba(255,0,0,0.06)" }} />
                <div className="absolute bottom-1/3 right-[10%] w-0 h-0 rounded-full bg-transparent" style={{ boxShadow: "0 0 180px 100px rgba(0,112,243,0.06)" }} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24 gap-8 md:gap-12">
                    <div className="max-w-2xl">
                        <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Our Ecosystem</span>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-4">
                            The Architecture of <br /> Engineering.
                        </h2>
                    </div>
                    <p className="text-neutral-500 max-w-sm font-light leading-relaxed text-base md:text-lg">
                        A precise selection of state-of-the-art tools and frameworks used to build visionary artifacts.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {stacks.map((stack, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8, delay: idx * 0.12, ease: "easeOut" }}
                            className="h-full group"
                        >
                            <LiquidGlass
                                intensity={1.2}
                                className="p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-lg h-full"
                                innerClassName="flex flex-col items-start gap-4 md:gap-6"
                            >
                                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${stack.gradient} flex items-center justify-center ${stack.iconColor} group-hover:scale-110 transition-all duration-500`}>
                                    {stack.icon}
                                </div>
                                <div>
                                    <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3 tracking-tight uppercase">{stack.name}</h3>
                                    <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-light hidden md:block">
                                        {stack.desc}
                                    </p>
                                </div>
                            </LiquidGlass>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
