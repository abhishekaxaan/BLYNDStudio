"use client";

import React from "react";
import { motion } from "framer-motion";
import { LiquidGlass } from "../ui/LiquidGlass";

export const PhilosophySection = () => {
    return (
        <section className="py-40 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                <div className="relative">
                    <LiquidGlass
                        intensity={2}
                        className="aspect-[4/5] rounded-[3rem] overflow-hidden"
                    >
                        {/* Visual element representing liquid glass */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-transparent" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/10 blur-[80px] animate-liquid" />
                        <div className="absolute inset-0 flex items-center justify-center p-12">
                            <span className="text-[12rem] font-bold text-white/5 select-none pointer-events-none tracking-tighter">
                                B.
                            </span>
                        </div>
                    </LiquidGlass>
                    {/* Accent element */}
                    <motion.div
                        initial={{ rotate: -10 }}
                        whileHover={{ rotate: 0, scale: 1.1 }}
                        className="absolute -bottom-10 -right-10 z-20"
                    >
                        <LiquidGlass className="w-40 h-40 rounded-full flex items-center justify-center">
                            <div className="text-brand-red font-black text-2xl">B L Y N D</div>
                        </LiquidGlass>
                    </motion.div>
                </div>

                <div>
                    <span className="text-brand-red font-bold uppercase tracking-widest text-xs block mb-4">The Philosophy</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
                        We see what others <br /> choose to ignore.
                    </h2>
                    <div className="space-y-6 text-neutral-400 font-light text-lg leading-relaxed">
                        <p>
                            BLYND (pronounced "blind") is more than just a name. It represents our commitment to look past the surface-level noise and find the meaningful essence of every brand we touch.
                        </p>
                        <p>
                            By embracing the fluid nature of modern media, we create interfaces that feel alive, responsive, and deeply emotional. Our Liquid Glass design system is the manifestation of this vision.
                        </p>
                    </div>
                    <div className="mt-12 flex items-center gap-4 text-white font-bold tracking-widest text-[10px] uppercase">
                        <span>Learn More about our vision</span>
                        <div className="w-12 h-[1px] bg-brand-red" />
                    </div>
                </div>
            </div>
        </section>
    );
};
