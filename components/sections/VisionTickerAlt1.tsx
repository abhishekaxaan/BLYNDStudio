"use client";

import React from "react";
import { motion } from "framer-motion";

const topWords = [
    "3D Game Arts", "Mobile Ecosystems", "Next-Gen Web", "Cinematic Impact",
    "Liquid Glass", "Engineering Excellence", "High Fidelity", "Strategic Code",
];

const bottomWords = [
    "Fluid Design", "Architectural Precision", "Visionary Clarity", "Multi-Disciplinary",
    "Brand Identity", "Motion Graphics", "Visual Systems", "Digital Artifacts",
];

const colors = [
    "text-brand-red/30", "text-accent-blue/30", "text-accent-purple/30", "text-accent-pink/30",
    "text-accent-amber/30", "text-accent-emerald/30", "text-brand-red/30", "text-accent-blue/30",
];

export const VisionTickerAlt1 = () => {
    return (
        <section className="py-16 md:py-24 overflow-hidden border-y border-white/5 relative bg-black">
            {/* Top edge glow */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent" />

            {/* Row 1 — moves right */}
            <div className="flex whitespace-nowrap mb-4 md:mb-6">
                <motion.div
                    className="flex gap-12 md:gap-24 items-center pr-12 md:pr-24"
                    animate={{ x: [-2000, 0] }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                >
                    {[...topWords, ...topWords, ...topWords, ...topWords].map((word, idx) => (
                        <div key={idx} className="flex items-center gap-12 md:gap-24">
                            <span className={`text-3xl md:text-6xl font-black uppercase tracking-[-0.03em] ${colors[idx % colors.length]} hover:text-white/30 transition-colors duration-700 cursor-default`}>
                                {word}
                            </span>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/10" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Row 2 — moves left */}
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-12 md:gap-24 items-center pr-12 md:pr-24"
                    animate={{ x: [0, -2000] }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                >
                    {[...bottomWords, ...bottomWords, ...bottomWords, ...bottomWords].map((word, idx) => (
                        <div key={idx} className="flex items-center gap-12 md:gap-24">
                            <span className={`text-3xl md:text-6xl font-black uppercase tracking-[-0.03em] ${colors[(idx + 3) % colors.length]} hover:text-white/30 transition-colors duration-700 cursor-default`}>
                                {word}
                            </span>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/10" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-60 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-60 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </section>
    );
};
