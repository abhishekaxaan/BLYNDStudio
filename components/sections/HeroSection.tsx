"use client";

import React from "react";
import { motion } from "framer-motion";
import { LiquidGlass } from "../ui/LiquidGlass";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-48 pb-20 px-6 overflow-hidden">
            {/* Dynamic Background Depth */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 mesh-gradient-bg opacity-[0.03] dark:opacity-[0.07]" />

                {/* Animated Orbs with more presence */}
                <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent-blue/10 blur-[100px] md:blur-[140px] rounded-full animate-liquid opacity-20 dark:opacity-30" />
                <div className="absolute bottom-1/4 right-1/4 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-accent-purple/10 blur-[120px] md:blur-[160px] rounded-full animate-liquid opacity-20 dark:opacity-30" style={{ animationDelay: "-4s" }} />

                {/* Subtle Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 text-center"
            >
                <span className="text-brand-red font-black uppercase tracking-[0.5em] text-[10px] block mb-6 animate-pulse">Engineering Future</span>
                <h1 className="text-5xl md:text-8xl lg:text-[9.5rem] font-black tracking-[-0.04em] leading-[0.9] md:leading-[0.85] mb-8 md:mb-12 uppercase text-foreground">
                    BEYOND <span className="hidden md:inline"><br /></span>
                    <span className="text-neutral-400 dark:text-neutral-600">DESIGN.</span>
                </h1>

                <p className="text-base md:text-2xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed mb-12 md:mb-16 px-4">
                    We engineer high-fidelity 3D assets, mobile ecosystems, and web platforms. Multi-disciplinary excellence for the next generation.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <button className="px-14 py-7 rounded-full bg-foreground text-background font-black uppercase tracking-[0.3em] text-[10px] hover:bg-brand-red hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                        Launch Project
                    </button>
                    <LiquidGlass
                        intensity={0.8}
                        className="rounded-full"
                        innerClassName="overflow-hidden shadow-2xl"
                    >
                        <button className="px-14 py-7 text-foreground font-black uppercase tracking-[0.3em] text-[10px] hover:text-brand-red transition-all transform hover:scale-105 active:scale-95">
                            View 3D Assets
                        </button>
                    </LiquidGlass>
                </div>
            </motion.div>

            {/* Hero Refraction Piece - More subtle */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-foreground/10 to-transparent" />
        </section>
    );
};
