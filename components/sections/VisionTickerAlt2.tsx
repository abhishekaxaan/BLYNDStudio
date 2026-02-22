"use client";

import React from "react";
import { motion } from "framer-motion";

const words = [
    "Visionary", "Clarity", "Liquid", "Glass", "Engineering",
    "Excellence", "High", "Fidelity", "Strategic", "Code",
    "Fluid", "Design", "Cinematic", "Impact", "Precision",
    "Artifacts",
];

export const VisionTickerAlt2 = () => {
    return (
        <section className="py-20 md:py-32 overflow-hidden border-y border-white/5 relative bg-black">
            {/* Gradient edge accents */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-accent-emerald/30 via-accent-purple/30 to-brand-red/30" />
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-brand-red/30 via-accent-blue/30 to-accent-emerald/30" />

            <div className="flex whitespace-nowrap relative z-10 items-center">
                <motion.div
                    className="flex gap-6 md:gap-12 items-baseline pr-6 md:pr-12"
                    animate={{ x: [0, -3000] }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                >
                    {[...words, ...words, ...words, ...words, ...words, ...words].map((word, idx) => (
                        <span
                            key={idx}
                            className={`text-5xl md:text-[8rem] font-black uppercase tracking-[-0.04em] cursor-default transition-colors duration-700 ${idx % 3 === 0
                                    ? "bg-gradient-to-r from-brand-red via-accent-pink to-accent-purple bg-clip-text text-transparent"
                                    : idx % 3 === 1
                                        ? "text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] hover:[-webkit-text-stroke:1px_rgba(255,255,255,0.4)]"
                                        : "bg-gradient-to-r from-accent-blue via-accent-emerald to-accent-amber bg-clip-text text-transparent"
                                }`}
                        >
                            {word}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </section>
    );
};
