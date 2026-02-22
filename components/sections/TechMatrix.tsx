"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Cpu, Box, Share2, Terminal, Code2, Database, Layout } from "lucide-react";

const stacks = [
    { name: "Three.js", icon: <Box className="w-5 h-5" />, desc: "High-fidelity 3D WebGL immersion." },
    { name: "WordPress", icon: <Cpu className="w-5 h-5" />, desc: "Scalable, feature-rich ecosystems." },
    { name: "Flutterflow", icon: <Share2 className="w-5 h-5" />, desc: "Next-gen mobile performance." },
    { name: "Webflow", icon: <Layout className="w-5 h-5" />, desc: "Cinematic design-to-code." },
    { name: "Next.js", icon: <Terminal className="w-5 h-5" />, desc: "Ultra-fast custom architectures." },
    { name: "Framer", icon: <Layers className="w-5 h-5" />, desc: "High-end motion interaction." },
];

export const TechMatrix = () => {
    return (
        <section className="py-24 md:py-40 px-6 relative overflow-hidden">
            {/* Mesh Gradient Background Integration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 mesh-gradient-bg opacity-[0.02] dark:opacity-[0.05]" />
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stacks.map((stack, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -8 }}
                            className="p-8 md:p-10 liquid-glass rounded-[2.5rem] md:rounded-[3rem] border border-black/5 dark:border-white/5 flex flex-col items-start gap-6 md:gap-8 group"
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-foreground/5 flex items-center justify-center text-foreground group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                                {stack.icon}
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-bold mb-3 tracking-tight uppercase tracking-widest">{stack.name}</h3>
                                <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-light">
                                    {stack.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
