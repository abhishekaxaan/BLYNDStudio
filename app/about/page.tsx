"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LaunchButton } from "@/components/sections/LaunchButton";

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="relative min-h-screen pt-32 md:pt-48 pb-20 px-6 overflow-hidden">
                {/* Dynamic Background Depth */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 mesh-gradient-bg opacity-[0.03] dark:opacity-[0.07]" />
                    <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent-purple/5 blur-[80px] md:blur-[120px] rounded-full animate-liquid opacity-20" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start mb-24 md:mb-40">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Our DNA</span>
                            <h1 className="text-5xl md:text-[8rem] font-black tracking-tighter leading-[0.9] md:leading-[0.85] mb-8 md:mb-12 uppercase">
                                Visionary <br className="hidden md:block" /> Clarity.
                            </h1>
                            <p className="text-xl md:text-2xl text-neutral-500 font-light leading-relaxed">
                                "BLYND" is a homophone for digital sharp-sightedness. We look past the noise to find the core signal of your project.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="liquid-glass p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-brand-red/10 blur-[80px] md:blur-[100px] rounded-full group-hover:bg-brand-red/20 transition-all duration-1000" />
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 tracking-tight">The Multi-Disciplinary Studio.</h2>
                            <div className="space-y-6 md:space-y-8 text-neutral-500 font-light leading-relaxed text-base md:text-lg relative z-10">
                                <p>
                                    Founded as a sanctuary for high-fidelity digital art, BLYND Studio has evolved into a full-scale multi-disciplinary powerhouse. We don't limit ourselves to a single medium because visionary projects don't exist in a vacuum.
                                </p>
                                <p>
                                    Whether it's a game-ready character model, a complex mobile ecosystem on FlutterFlow, or a high-performance web experience on WordPress or Webflow, we bring the same level of architectural precision to everything we build.
                                </p>
                                <p>
                                    We don't manage social media—we build the brand identities and digital artifacts that make social media management unnecessary because the work speaks for itself.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-40">
                        {[
                            {
                                tag: "Precision",
                                title: "Architectural Art",
                                desc: "Every pixel, polygon, and line of code is intentional. We build for longevity and performance."
                            },
                            {
                                tag: "Fluidity",
                                title: "Platform Agnostic",
                                desc: "Web, Mobile, 3D, or Video. We use the best tool for the job, from custom code to no-code excellence."
                            },
                            {
                                tag: "Impact",
                                title: "Ready for Launch",
                                desc: "We don't just deliver files; we launch ecosystems that are primed for market dominance."
                            }
                        ].map((box, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 md:p-10 liquid-glass rounded-[2.5rem] md:rounded-[3rem]"
                            >
                                <span className="text-brand-red font-black uppercase tracking-[0.3em] text-[9px] block mb-4">{box.tag}</span>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tight">{box.title}</h3>
                                <p className="text-neutral-500 font-light text-sm leading-relaxed">{box.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="border-t border-black/5 dark:border-white/5 pt-20 md:pt-32 mb-20 md:mb-32">
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 md:gap-20">
                            <div className="max-w-xl">
                                <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] block mb-6">The Studio Ecosystem</span>
                                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-6 md:mb-8">
                                    Strategic Focus.
                                </h2>
                                <p className="text-neutral-500 text-lg md:text-xl font-light leading-relaxed">
                                    We operate in fixed engineering cycles, ensuring every project receives undivided architectural precision. Our multi-disciplinary approach eliminates the friction between creative vision and technical execution.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 flex-1 w-full lg:w-auto">
                                {[
                                    { label: "Cycle Speed", val: "4-8 Weeks" },
                                    { label: "Client Cap", val: "3 Projects / Q" },
                                    { label: "Asset Fidelity", val: "4K PBR" },
                                    { label: "Stack Performance", val: "99+ Lighthouse" }
                                ].map((stat, i) => (
                                    <div key={i} className="border-l border-brand-red/20 pl-6 py-4">
                                        <div className="text-2xl md:text-3xl font-black tracking-tighter mb-1">{stat.val}</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-neutral-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <LaunchButton />
            <Footer />
        </>
    );
}
