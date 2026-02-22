"use client";

import React from "react";
import { motion } from "framer-motion";
import { LiquidGlass } from "../ui/LiquidGlass";

const showcaseItems = [
    { label: "High-End UX", title: "Liquid Interfaces" },
    { label: "Visual ID", title: "Glass Brands" },
    { label: "Marketing", title: "Visionary Reach" },
];

export const ShowcaseSection = () => {
    return (
        <section className="py-40 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {showcaseItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.8 }}
                            className="group"
                        >
                            <LiquidGlass
                                intensity={1.2}
                                className="aspect-[3/4] rounded-[3rem] mb-10 overflow-hidden relative shadow-lg border border-black/5"
                            >
                                <div className="absolute inset-0 bg-neutral-950 group-hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/5 opacity-40" />
                                <div className="absolute bottom-10 left-10">
                                    <span className="text-brand-red font-bold uppercase tracking-widest text-[10px] block mb-2">{item.label}</span>
                                    <h3 className="text-2xl font-bold tracking-tighter text-white">{item.title}</h3>
                                </div>
                            </LiquidGlass>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
