"use client";

import React from "react";
import { motion } from "framer-motion";

const words = [
    "Visionary", "Clarity", "Tactile", "Depth", "Engineering",
    "Excellence", "High", "Fidelity", "Strategic", "Code",
    "Fluid", "Design", "Cinematic", "Impact", "Precision",
    "Artifacts",
];

export const VisionTickerAlt2 = () => {
    const [duration, setDuration] = React.useState(80);

    React.useEffect(() => {
        const updateSpeed = () => {
            setDuration(window.innerWidth >= 768 ? 160 : 80);
        };
        updateSpeed();
        window.addEventListener('resize', updateSpeed);
        return () => window.removeEventListener('resize', updateSpeed);
    }, []);

    return (
        <section className="py-24 md:py-32 overflow-hidden relative bg-transparent">

            <div className="flex whitespace-nowrap relative z-10 items-center overflow-hidden">
                <motion.div
                    key={duration}
                    className="flex shrink-0 items-baseline"
                    animate={{ x: [0, "-50%"] }}
                    transition={{ duration, repeat: Infinity, ease: "linear" }}
                >
                    {[...words, ...words].map((word, idx) => (
                        <span
                            key={idx}
                            className={`text-5xl md:text-[8rem] font-black uppercase tracking-[-0.04em] cursor-default transition-all duration-500 drop-shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] pr-6 md:pr-12 hover:scale-105 ${idx % 3 === 0
                                ? "bg-gradient-to-r from-brand-red via-accent-pink to-accent-purple bg-clip-text text-transparent"
                                : idx % 3 === 1
                                    ? "text-transparent [-webkit-text-stroke:2px_#3b82f6] hover:[-webkit-text-stroke:2px_#ec4899]"
                                    : "bg-gradient-to-r from-accent-blue via-accent-emerald to-accent-amber bg-clip-text text-transparent"
                                }`}
                        >
                            {word}
                        </span>
                    ))}
                    {[...words, ...words].map((word, idx) => (
                        <span
                            key={`dup-${idx}`}
                            className={`text-5xl md:text-[8rem] font-black uppercase tracking-[-0.04em] cursor-default transition-all duration-500 drop-shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] pr-6 md:pr-12 hover:scale-105 ${idx % 3 === 0
                                ? "bg-gradient-to-r from-brand-red via-accent-pink to-accent-purple bg-clip-text text-transparent"
                                : idx % 3 === 1
                                    ? "text-transparent [-webkit-text-stroke:2px_#3b82f6] hover:[-webkit-text-stroke:2px_#ec4899]"
                                    : "bg-gradient-to-r from-accent-blue via-accent-emerald to-accent-amber bg-clip-text text-transparent"
                                }`}
                        >
                            {word}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-[#ebf0f5] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-[#ebf0f5] to-transparent pointer-events-none z-10" />
        </section>
    );
};

