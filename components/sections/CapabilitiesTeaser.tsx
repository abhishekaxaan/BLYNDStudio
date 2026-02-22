"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sword, Globe, Smartphone, Palette } from "lucide-react";

const capabilities = [
    {
        icon: <Sword className="w-6 h-6" />,
        title: "3D Art & Assets",
        desc: "Game-ready 3D modeling for characters, legendary weapons, and immersive environments.",
        color: "text-brand-red"
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Web Ecosystems",
        desc: "Strategic development across WordPress, Webflow, and custom code frameworks.",
        color: "text-accent-blue"
    },
    {
        icon: <Smartphone className="w-6 h-6" />,
        title: "Mobile App Dev",
        desc: "Premium iOS and Android solutions built with state-of-the-art low-code builders.",
        color: "text-accent-purple"
    },
    {
        icon: <Palette className="w-6 h-6" />,
        title: "Brand Identity",
        desc: "Visual storytelling through logo design, motion graphics, and video editing.",
        color: "text-pink-500"
    },
];

export const CapabilitiesTeaser = () => {
    return (
        <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-xl">
                        <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Our Expertise</span>
                        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none">
                            Capabilities that <br /> define impact.
                        </h2>
                    </div>
                    <p className="text-neutral-500 max-w-sm mb-4 leading-relaxed font-light text-lg">
                        We build and launch high-performance digital artifacts, from game assets to mobile ecosystems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((cap, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="liquid-glass p-10 rounded-[3rem] group"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-foreground group-hover:text-background transition-all duration-500 ${cap.color}`}>
                                {cap.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">{cap.title}</h3>
                            <p className="text-neutral-500 text-sm leading-relaxed font-light">
                                {cap.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
