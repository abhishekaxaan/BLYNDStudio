"use client";

import React from "react";
import { motion } from "framer-motion";

const topWords = [
    "3D Game Arts", "Mobile Ecosystems", "Next-Gen Web", "Cinematic Impact",
    "Tactile Depth", "Engineering Excellence", "High Fidelity", "Strategic Code",
];

const bottomWords = [
    "Fluid Design", "Architectural Precision", "Visionary Clarity", "Multi-Disciplinary",
    "Brand Identity", "Motion Graphics", "Visual Systems", "Digital Artifacts",
];

const colors = [
    "text-brand-red", "text-accent-blue", "text-accent-purple", "text-accent-pink",
    "text-accent-amber", "text-accent-emerald", "text-brand-red", "text-accent-blue",
];

export const VisionTickerAlt1 = () => {
    const [duration, setDuration] = React.useState({ row1: 50, row2: 44 });

    React.useEffect(() => {
        const updateSpeed = () => {
            const isDesktop = window.innerWidth >= 768;
            setDuration({
                row1: isDesktop ? 150 : 75,
                row2: isDesktop ? 130 : 65
            });
        };
        updateSpeed();
        window.addEventListener('resize', updateSpeed);
        return () => window.removeEventListener('resize', updateSpeed);
    }, []);

    return (
        <section className="py-16 md:py-24 overflow-hidden relative bg-transparent">

            {/* Row 1 — moves right */}
            <div className="flex whitespace-nowrap mb-4 md:mb-6 overflow-hidden">
                <motion.div
                    key={duration.row1}
                    className="flex shrink-0 items-center"
                    animate={{ x: ["-50%", 0] }}
                    transition={{ duration: duration.row1, repeat: Infinity, ease: "linear" }}
                >
                    {[...topWords, ...topWords].map((word, idx) => (
                        <div key={idx} className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24">
                            <span className={`text-3xl md:text-6xl font-black uppercase tracking-[-0.03em] ${colors[idx % colors.length]} drop-shadow-[3px_3px_6px_#d1d9e6,-3px_-3px_6px_#ffffff] hover:scale-105 transition-all duration-500 cursor-default`}>
                                {word}
                            </span>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#ebf0f5]/10" />
                        </div>
                    ))}
                    {[...topWords, ...topWords].map((word, idx) => (
                        <div key={`dup-${idx}`} className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24">
                            <span className={`text-3xl md:text-6xl font-black uppercase tracking-[-0.03em] ${colors[idx % colors.length]} drop-shadow-[3px_3px_6px_#d1d9e6,-3px_-3px_6px_#ffffff] hover:scale-105 transition-all duration-500 cursor-default`}>
                                {word}
                            </span>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#ebf0f5]/10" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Row 2 — moves left */}
            <div className="flex whitespace-nowrap overflow-hidden">
                <motion.div
                    key={duration.row2}
                    className="flex shrink-0 items-center"
                    animate={{ x: [0, "-50%"] }}
                    transition={{ duration: duration.row2, repeat: Infinity, ease: "linear" }}
                >
                    {[...bottomWords, ...bottomWords].map((word, idx) => (
                        <div key={idx} className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24">
                            <span className={`text-3xl md:text-6xl font-black uppercase tracking-[-0.03em] ${colors[(idx + 3) % colors.length]} drop-shadow-[3px_3px_6px_#d1d9e6,-3px_-3px_6px_#ffffff] hover:scale-105 transition-all duration-500 cursor-default`}>
                                {word}
                            </span>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#ebf0f5]/10" />
                        </div>
                    ))}
                    {[...bottomWords, ...bottomWords].map((word, idx) => (
                        <div key={`dup-${idx}`} className="flex items-center gap-12 md:gap-24 pr-12 md:pr-24">
                            <span className={`text-3xl md:text-6xl font-black uppercase tracking-[-0.03em] ${colors[(idx + 3) % colors.length]} drop-shadow-[3px_3px_6px_#d1d9e6,-3px_-3px_6px_#ffffff] hover:scale-105 transition-all duration-500 cursor-default`}>
                                {word}
                            </span>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#ebf0f5]/10" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-60 bg-gradient-to-r from-[#ebf0f5] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-60 bg-gradient-to-l from-[#ebf0f5] to-transparent pointer-events-none z-10" />
        </section>
    );
};

