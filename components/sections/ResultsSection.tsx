"use client";

import React from "react";
import { motion } from "framer-motion";

const metrics = [
    { value: "50+", label: "3D Assets Modeled" },
    { value: "0.8s", label: "App Interaction Load" },
    { value: "98%", label: "Market-Ready Score" },
    { value: "Zero", label: "Friction UX" },
];

export const ResultsSection = () => {
    return (
        <section className="py-40 px-6 bg-foreground text-background overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-blue/5 blur-[200px] rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
                    <div>
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-12 uppercase italic">
                            Strategic <br /> Results.
                        </h2>
                        <p className="text-background/60 text-xl font-light leading-relaxed max-w-md">
                            We measure success by the performance of our artifacts in the wild. From game asset optimization to mobile app retention—results are our only metric.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 md:gap-12">
                        {metrics.map((m, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 border-l border-background/10 hover:border-brand-red transition-all duration-500"
                            >
                                <div className="text-4xl md:text-6xl font-black tracking-tighter text-brand-red mb-2">{m.value}</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">{m.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="w-full h-[1px] bg-background/10" />
            </div>
        </section>
    );
};
