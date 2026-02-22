"use client";

import React from "react";
import { motion } from "framer-motion";
import { Box, Cpu, Share2, Layout, Terminal, Layers } from "lucide-react";
import { LiquidGlass } from "../ui/LiquidGlass";

const tools = [
    { name: "Three.js", icon: <Box className="w-6 h-6" />, category: "3D Interaction", gradient: "from-brand-red/20 to-accent-pink/20", iconColor: "text-brand-red" },
    { name: "Next.js", icon: <Terminal className="w-6 h-6" />, category: "Framework", gradient: "from-accent-blue/20 to-accent-purple/20", iconColor: "text-accent-blue" },
    { name: "Flutterflow", icon: <Share2 className="w-6 h-6" />, category: "Mobile", gradient: "from-accent-purple/20 to-accent-pink/20", iconColor: "text-accent-purple" },
    { name: "Webflow", icon: <Layout className="w-6 h-6" />, category: "No-Code", gradient: "from-accent-emerald/20 to-accent-blue/20", iconColor: "text-accent-emerald" },
    { name: "WordPress", icon: <Cpu className="w-6 h-6" />, category: "CMS", gradient: "from-accent-amber/20 to-brand-red/20", iconColor: "text-accent-amber" },
    { name: "Framer", icon: <Layers className="w-6 h-6" />, category: "Animation", gradient: "from-accent-pink/20 to-accent-purple/20", iconColor: "text-accent-pink" },
];

export const EcosystemSectionNew = () => {
    return (
        <section className="py-24 md:py-48 px-6 relative overflow-hidden bg-background text-foreground">
            {/* Glow orbs — w-0 h-0 so only the box-shadow is visible */}
            <div className="absolute top-1/4 right-[10%] w-0 h-0 rounded-full bg-transparent pointer-events-none" style={{ boxShadow: "0 0 200px 120px rgba(121,40,202,0.08)" }} />
            <div className="absolute bottom-1/4 left-[5%] w-0 h-0 rounded-full bg-transparent pointer-events-none" style={{ boxShadow: "0 0 180px 100px rgba(0,112,243,0.08)" }} />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Future Stack</span>
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none uppercase">
                            The Liquid <br /> Universe.
                        </h2>
                    </div>
                    <p className="text-neutral-500 max-w-sm mb-4 leading-relaxed font-light text-base md:text-lg">
                        A precise selection of state-of-the-art tools and frameworks used to build visionary artifacts.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {tools.map((tool, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <LiquidGlass
                                intensity={1.2}
                                className="p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] group h-full shadow-lg border border-black/5"
                            >
                                <div className="flex flex-col items-start gap-4 md:gap-6">
                                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center ${tool.iconColor} group-hover:scale-110 transition-all duration-500`}>
                                        {tool.icon}
                                    </div>
                                    <div className="text-left">
                                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-1 md:mb-2 block">
                                            {tool.category}
                                        </span>
                                        <h3 className="text-base md:text-xl font-bold tracking-tight uppercase">
                                            {tool.name}
                                        </h3>
                                    </div>
                                </div>
                            </LiquidGlass>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
