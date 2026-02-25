"use client";

import React from "react";
import { motion } from "framer-motion";

const words = [
    "Visionary Clarity", "Tactile Interfaces", "Multi-Disciplinary", "3D Game Arts", "Mobile Ecosystems",
    "Next-Gen Web", "Cinematic Impact", "Strategic Code", "Fluid Design", "Engineering Excellence",
    "High Fidelity", "Architectural Precision"
];

export const VisionTicker = () => {
    const [duration, setDuration] = React.useState(60);

    React.useEffect(() => {
        const updateSpeed = () => {
            setDuration(window.innerWidth >= 768 ? 120 : 60);
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
                    className="flex shrink-0 items-center"
                    animate={{ x: [0, "-50%"] }}
                    transition={{
                        duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {/* Render twice for seamless loop */}
                    {[...words, ...words].map((word, idx) => (
                        <div key={idx} className="flex items-center gap-20 md:gap-40 pr-20 md:pr-40">
                            <span className="text-4xl md:text-8xl font-black uppercase tracking-[-0.05em] drop-shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-accent-purple to-accent-blue hover:scale-105 transition-all duration-500 cursor-default pr-2 md:pr-4">
                                {word}
                            </span>
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-brand-red shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                        </div>
                    ))}
                    {[...words, ...words].map((word, idx) => (
                        <div key={`dup-${idx}`} className="flex items-center gap-20 md:gap-40 pr-20 md:pr-40">
                            <span className="text-4xl md:text-8xl font-black uppercase tracking-[-0.05em] drop-shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-accent-purple to-accent-blue hover:scale-105 transition-all duration-500 cursor-default pr-2 md:pr-4">
                                {word}
                            </span>
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-brand-red shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Overlay Gradient for Fade effect */}
            <div className="absolute inset-y-0 left-0 w-40 md:w-80 bg-gradient-to-r from-[#ebf0f5] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-40 md:w-80 bg-gradient-to-l from-[#ebf0f5] to-transparent pointer-events-none z-10" />
        </section>
    );
};

