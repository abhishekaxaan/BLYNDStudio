"use client";

import React from "react";
import { motion } from "framer-motion";


const steps = [
    { id: "01", title: "Conceptual Blueprint", desc: "We deconstruct your vision into technical and artistic requirements, from character arcs to user flows." },
    { id: "02", title: "Architectural Build", desc: "Our specialists develop the core logic and high-fidelity 3D assets optimized for your platform." },
    { id: "03", title: "Fluid Integration", desc: "We integrate components into seamless ecosystems—be it a game engine, mobile environment, or the web." },
    { id: "04", title: "Strategic Launch", desc: "Deploying high-performance digital artifacts with market-ready precision and cinematic impact." },
];

export const ProcessSection = () => {
    return (
        <section className="py-24 md:py-40 px-6 relative overflow-hidden">
            {/* Glow orbs — w-0 h-0 so only the box-shadow is visible */}
            <div className="absolute top-1/4 left-[5%] w-0 h-0 rounded-full bg-transparent pointer-events-none" style={{ boxShadow: "0 0 180px 100px rgba(16,185,129,0.07)" }} />
            <div className="absolute bottom-1/4 right-[10%] w-0 h-0 rounded-full bg-transparent pointer-events-none" style={{ boxShadow: "0 0 200px 120px rgba(121,40,202,0.07)" }} />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-xl mb-16 md:mb-24">
                    <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] block mb-6">The Method</span>
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none uppercase">A sequence of <br /> high-fidelity.</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative group">

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.8, delay: idx * 0.12, ease: "easeOut" }}
                                className="h-full"
                            >
                                <div
                                    className="p-8 md:p-10 rounded-[3rem] h-full bg-[#ebf0f5] shadow-[24px_24px_64px_#d1d9e6,-24px_-24px_64px_#ffffff] border border-white/50 transition-all duration-500 hover:shadow-[inset_12px_12px_24px_#d1d9e6,inset_-12px_-12px_24px_#ffffff]"
                                >
                                    <div className="flex flex-col gap-4 md:gap-6 h-full">
                                        <span className="text-4xl font-black text-brand-red font-sans italic opacity-50">
                                            {step.id}
                                        </span>
                                        <div className="flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold tracking-tight uppercase tracking-[0.1em] text-neutral-800">
                                                {step.title}
                                            </h3>
                                            <p className="text-neutral-500 text-sm leading-relaxed font-light flex-grow">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

