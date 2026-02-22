"use client";

import React from "react";

const steps = [
    { id: "01", title: "Conceptual Blueprint", desc: "We deconstruct your vision into technical and artistic requirements, from character arcs to user flows." },
    { id: "02", title: "Architectural Build", desc: "Our specialists develop the core logic and high-fidelity 3D assets optimized for your platform." },
    { id: "03", title: "Fluid Integration", desc: "We integrate components into seamless ecosystems—be it a game engine, mobile environment, or the web." },
    { id: "04", title: "Strategic Launch", desc: "Deploying high-performance digital artifacts with market-ready precision and cinematic impact." },
];

export const ProcessSection = () => {
    return (
        <section className="py-40 px-6">
            <div className="max-w-7xl mx-auto">
                <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] block mb-6">The Method</span>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-24">A sequence of <br /> high-fidelity.</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative group">
                            <span className="text-6xl md:text-8xl font-black text-foreground/5 absolute -top-12 -left-8 group-hover:text-brand-red/10 transition-colors duration-500 select-none font-sans italic">
                                {step.id}
                            </span>
                            <div className="relative z-10 pt-8">
                                <h3 className="text-xl font-bold mb-4 tracking-tight uppercase tracking-[0.1em]">{step.title}</h3>
                                <p className="text-neutral-500 text-sm leading-relaxed font-light">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
