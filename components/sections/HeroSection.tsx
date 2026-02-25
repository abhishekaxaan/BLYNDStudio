"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowDown, Sparkles } from "lucide-react";

const disciplines = ["3D ASSETS", "WEB", "MOBILE", "BRAND"];
const metrics = [
    { value: "50+", label: "Projects" },
    { value: "0.8s", label: "Load Time" },
    { value: "98%", label: "Score" },
];

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-48 pb-20 px-6 overflow-hidden">
            {/* Colorful Glow Orbs — box-shadow only, no filter:blur */}
            <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-20 left-[10%] w-0 h-0 rounded-full bg-transparent" style={{ boxShadow: "0 0 250px 150px rgba(255,0,0,0.12)" }} />
                <div className="absolute top-[40%] right-[5%] w-0 h-0 rounded-full bg-transparent" style={{ boxShadow: "0 0 200px 120px rgba(0,112,243,0.10)" }} />
                <div className="absolute bottom-32 left-[30%] w-0 h-0 rounded-full bg-transparent" style={{ boxShadow: "0 0 180px 100px rgba(121,40,202,0.08)" }} />
                <div className="absolute top-[60%] left-[60%] w-0 h-0 rounded-full bg-transparent" style={{ boxShadow: "0 0 150px 90px rgba(16,185,129,0.06)" }} />

                {/* Subtle Square Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_0%,transparent_100%)]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 text-center max-w-6xl mx-auto"
            >
                {/* Floating Discipline Badges */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                    {disciplines.map((d, i) => (
                        <motion.span
                            key={d}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.3em] border border-black/10 bg-black/5 backdrop-blur-sm text-neutral-500"
                        >
                            {d}
                        </motion.span>
                    ))}
                </div>

                <h1 className="text-5xl md:text-8xl lg:text-[9.5rem] font-black tracking-[-0.04em] leading-[0.9] md:leading-[0.85] mb-8 md:mb-10 uppercase text-[#ebf0f5] drop-shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff]">
                    <span className="text-neutral-800">DEFYING</span> <span className="hidden md:inline"><br /></span>
                    <span className="bg-gradient-to-r from-brand-red via-accent-purple to-accent-blue bg-clip-text text-transparent drop-shadow-sm hover:drop-shadow-lg transition-all duration-500">GRAVITY.</span>
                </h1>

                <p className="text-base md:text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed mb-10 md:mb-14 px-4">
                    Digital experiences that bridge cinematic imagination with high-performance web engineering. We craft the "Wow" factor for ambitious brands.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
                    <div
                        className="relative rounded-full bg-[#ebf0f5] shadow-[10px_10px_20px_#d1d9e6,-10px_-10px_20px_#ffffff] group hover:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] transition-all overflow-hidden border border-white/40"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-accent-pink/10 pointer-events-none" />
                        <Link
                            href="/contact"
                            className="relative z-10 px-14 py-7 text-brand-red font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center group/btn"
                        >
                            <span className="inline-flex items-center gap-3 group-hover/btn:scale-110 transition-transform duration-500">
                                <Sparkles className="w-4 h-4 text-brand-red shrink-0" />
                                <span className="translate-y-[0.5px]">Launch Project</span>
                            </span>
                        </Link>
                    </div>

                    <div
                        className="relative rounded-full bg-[#ebf0f5] shadow-[10px_10px_20px_#d1d9e6,-10px_-10px_20px_#ffffff] group hover:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] transition-all overflow-hidden border border-white/40"
                    >
                        <div className="absolute inset-0 bg-neutral-900/5 pointer-events-none" />
                        <Link
                            href="/portfolio"
                            className="relative z-10 px-14 py-7 text-neutral-600 font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center text-zoom-hover"
                        >
                            <span>Our Portfolio</span>
                        </Link>
                    </div>
                </div>

                {/* Trust Metrics */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center justify-center gap-8 md:gap-12"
                >
                    {metrics.map((m, i) => (
                        <div key={i} className="text-center">
                            <div className="text-xl md:text-2xl font-black tracking-tight bg-gradient-to-r from-brand-red to-accent-purple bg-clip-text text-transparent">{m.value}</div>
                            <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400 mt-1">{m.label}</div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-neutral-400">Scroll</span>
                <ArrowDown className="w-4 h-4 text-neutral-400" />
            </motion.div>
        </section>
    );
};

