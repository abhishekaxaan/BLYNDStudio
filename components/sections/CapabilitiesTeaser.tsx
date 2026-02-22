"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sword, Globe, Smartphone, Palette } from "lucide-react";
import { LiquidGlass } from "../ui/LiquidGlass";

const capabilities = [
    {
        icon: <Sword className="w-6 h-6" />,
        title: "3D Art & Assets",
        desc: "Game-ready 3D modeling for characters, legendary weapons, and immersive environments.",
        gradient: "from-brand-red/20 to-accent-pink/20",
        iconColor: "text-brand-red"
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Web Ecosystems",
        desc: "Strategic development across WordPress, Webflow, and custom code frameworks.",
        gradient: "from-accent-blue/20 to-accent-purple/20",
        iconColor: "text-accent-blue"
    },
    {
        icon: <Smartphone className="w-6 h-6" />,
        title: "Mobile App Dev",
        desc: "Premium iOS and Android solutions built with state-of-the-art low-code builders.",
        gradient: "from-accent-purple/20 to-accent-emerald/20",
        iconColor: "text-accent-purple"
    },
    {
        icon: <Palette className="w-6 h-6" />,
        title: "Brand Identity",
        desc: "Visual storytelling through logo design, motion graphics, and video editing.",
        gradient: "from-accent-amber/20 to-accent-pink/20",
        iconColor: "text-accent-amber"
    },
];

export const CapabilitiesTeaser = () => {
    return (
        <section className="py-32 px-6 relative overflow-hidden">
            {/* Glow orbs — w-0 h-0 so only the box-shadow is visible */}
            <div className="absolute top-1/3 right-[5%] w-0 h-0 rounded-full bg-transparent pointer-events-none" style={{ boxShadow: "0 0 200px 120px rgba(121,40,202,0.07)" }} />
            <div className="absolute bottom-1/4 left-[10%] w-0 h-0 rounded-full bg-transparent pointer-events-none" style={{ boxShadow: "0 0 180px 100px rgba(255,0,0,0.07)" }} />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
                    <div className="max-w-xl">
                        <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Our Expertise</span>
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none uppercase">
                            Capabilities that <br /> define impact.
                        </h2>
                    </div>
                    <p className="text-neutral-500 max-w-sm mb-4 leading-relaxed font-light text-base md:text-lg">
                        We build and launch high-performance digital artifacts, from game assets to mobile ecosystems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {capabilities.map((cap, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8, delay: idx * 0.12, ease: "easeOut" }}
                            className="relative"
                        >
                            <LiquidGlass
                                intensity={1.2}
                                className="p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-lg h-full"
                                innerClassName="flex flex-col gap-4 md:gap-6"
                            >
                                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center ${cap.iconColor} group-hover:scale-110 transition-all duration-500`}>
                                    {cap.icon}
                                </div>
                                <div>
                                    <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4 tracking-tight uppercase">{cap.title}</h3>
                                    <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-light">
                                        {cap.desc}
                                    </p>
                                </div>
                            </LiquidGlass>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
