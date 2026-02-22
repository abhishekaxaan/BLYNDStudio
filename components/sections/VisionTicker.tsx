"use client";

import React from "react";
import { motion } from "framer-motion";

const words = [
    "Visionary Clarity", "Liquid Glass", "Multi-Disciplinary", "3D Game Arts", "Mobile Ecosystems",
    "Next-Gen Web", "Cinematic Impact", "Strategic Code", "Fluid Design", "Engineering Excellence",
    "High Fidelity", "Architectural Precision"
];

export const VisionTicker = () => {
    return (
        <section className="py-12 md:py-20 overflow-hidden border-y border-black/5 dark:border-white/5 relative bg-white dark:bg-black">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-8 md:gap-16 items-center pr-8 md:pr-16"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {/* Duplicate set for seamless loop */}
                    {[...words, ...words, ...words].map((word, idx) => (
                        <div key={idx} className="flex items-center gap-8 md:gap-16">
                            <span className="text-2xl md:text-6xl font-black uppercase tracking-tighter text-foreground opacity-[0.03] dark:opacity-[0.05] hover:opacity-20 transition-opacity">
                                {word}
                            </span>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-red opacity-10" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Overlay Gradient for Fade effect */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </section>
    );
};
