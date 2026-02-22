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
        <section className="py-24 md:py-32 overflow-hidden border-y border-white/5 relative bg-black">
            {/* Seamless Background Depth */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />
            </div>

            <div className="flex whitespace-nowrap relative z-10 items-center">
                <motion.div
                    className="flex gap-20 md:gap-40 items-center pr-20 md:pr-40"
                    animate={{ x: [0, -2000] }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {/* Duplicate set for seamless loop */}
                    {[...words, ...words, ...words, ...words].map((word, idx) => (
                        <div key={idx} className="flex items-center gap-20 md:gap-40">
                            <span className="text-4xl md:text-8xl font-black uppercase tracking-[-0.05em] text-white/10 hover:text-brand-red/40 transition-colors duration-700 cursor-default">
                                {word}
                            </span>
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-brand-red shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Overlay Gradient for Fade effect */}
            <div className="absolute inset-y-0 left-0 w-40 md:w-80 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-40 md:w-80 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
        </section>
    );
};
