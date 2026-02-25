"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Cpu, Box, Share2, Terminal, Layout } from "lucide-react";


const stacks = [
    { name: "Three.js", icon: <Box className="w-6 h-6" />, desc: "High-fidelity 3D WebGL immersion.", gradient: "from-brand-red/10 to-accent-pink/10", iconColor: "text-brand-red" },
    { name: "WordPress", icon: <Cpu className="w-6 h-6" />, desc: "Scalable, feature-rich ecosystems.", gradient: "from-accent-amber/10 to-brand-red/10", iconColor: "text-accent-amber" },
    { name: "Flutterflow", icon: <Share2 className="w-6 h-6" />, desc: "Next-gen mobile performance.", gradient: "from-accent-purple/10 to-accent-pink/10", iconColor: "text-accent-purple" },
    { name: "Webflow", icon: <Layout className="w-6 h-6" />, desc: "Cinematic design-to-code.", gradient: "from-accent-emerald/10 to-accent-blue/10", iconColor: "text-accent-emerald" },
    { name: "Next.js", icon: <Terminal className="w-6 h-6" />, desc: "Ultra-fast custom architectures.", gradient: "from-accent-blue/10 to-accent-purple/10", iconColor: "text-accent-blue" },
    { name: "Framer", icon: <Layers className="w-6 h-6" />, desc: "High-end motion interaction.", gradient: "from-accent-pink/10 to-accent-purple/10", iconColor: "text-accent-pink" },
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
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                            className="h-full group"
                        >
                            <div
                                className="p-8 md:p-10 rounded-[3rem] h-full bg-[#ebf0f5] shadow-[24px_24px_64px_#d1d9e6,-24px_-24px_64px_#ffffff] border border-white/50 transition-all duration-500 hover:shadow-[inset_12px_12px_24px_#d1d9e6,inset_-12px_-12px_24px_#ffffff] flex flex-col"
                            >
                                <div className="flex flex-col items-start gap-4 md:gap-6 h-full">
                                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${stack.gradient} shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] flex items-center justify-center ${stack.iconColor} transition-all duration-500 border border-white/40`}>
                                        {stack.icon}
                                    </div>
                                    <div className="flex flex-col flex-grow">
                                        <h3 className="text-lg md:text-xl font-black mb-2 md:mb-3 tracking-tight uppercase text-neutral-900">{stack.name}</h3>
                                        <p className="text-neutral-500 text-sm md:text-base leading-relaxed font-light flex-grow">
                                            {stack.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

