"use client";

import React from "react";
import { motion } from "framer-motion";

export const CTASection = () => {
    return (
        <section className="py-40 px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand-red/10 blur-[150px] rounded-full animate-liquid opacity-30" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.8] mb-12">
                    READY TO <br />
                    <span className="text-brand-red">SEE?</span>
                </h2>
                <p className="text-neutral-400 text-lg md:text-xl font-light mb-16 max-w-xl mx-auto">
                    Start your transformation journey with BLYND Studio today. We bring visions to life through fluid design.
                </p>

                <button className="px-16 py-8 rounded-[2rem] bg-foreground text-background font-black uppercase tracking-[0.2em] text-sm hover:bg-brand-red hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
                    Get in Touch
                </button>
            </div>
        </section>
    );
};
