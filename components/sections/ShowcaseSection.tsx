"use client";

import React from "react";
import { motion } from "framer-motion";


const showcaseItems = [
    { label: "Digital Presence", title: "Web Design", desc: "Performance-driven Next.js and Webflow architectures built for speed and immersion.", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800" },
    { label: "Core Identity", title: "Logo Design", desc: "Distilling your essence into a single, immortal mark of your brand.", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800" },
    { label: "Visual Ecosystem", title: "Brand Identity", desc: "Establishing the cohesive visual laws of your brand's ecosystem.", image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800" },
    { label: "Mobile Experiences", title: "Android & iOS App Dev", desc: "Premium native and cross-platform mobile experiences for modern users.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" },
    { label: "Post-Production", title: "Video Editing", desc: "Cinematic, precision editing and post-production that commands attention.", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800" },
    { label: "Interactive Assets", title: "3D Models for Games", desc: "High-poly characters, legendary weapons, and game environments.", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=800" },
    { label: "Cinematic Motion", title: "3D Video Ads", desc: "Physics-defying cinematic 3D motion ads designed for impact.", image: "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&fit=crop&q=80&w=800" },
    { label: "Algorithmic Media", title: "AI Content Creation", desc: "Human-led, AI-powered workflows that accelerate creativity.", image: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&q=80&w=800" },
    { label: "Audience Engagement", title: "Social Media Content", desc: "Scroll-stopping assets designed for viral Instagram campaigns.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800" },
    { label: "Strategic Growth", title: "Social Media Planning", desc: "Strategic, data-driven deployment of content across social channels.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
];

export const ShowcaseSection = () => {
    return (
        <section className="py-40 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-24">
                    <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] block mb-4">Our Services</span>
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none text-neutral-900 uppercase">
                        The Master<br /> Disciplines.
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {showcaseItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8, delay: (idx % 3) * 0.12, ease: "easeOut" }}
                            className="group"
                        >
                            <div className="h-full rounded-[2.5rem] flex flex-col bg-[#ebf0f5] shadow-[10px_10px_20px_#d1d9e6,-10px_-10px_20px_#ffffff] hover:shadow-transparent transition-all duration-500 group relative">
                                {/* Inset shadow overlay triggered on hover */}
                                <div className="absolute inset-0 rounded-[2.5rem] transition-shadow duration-500 pointer-events-none z-30 group-hover:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]" />

                                <div className="h-64 md:h-80 w-full relative overflow-hidden rounded-t-[2.5rem] z-10">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-8 md:p-10 flex flex-col flex-grow bg-[#ebf0f5] rounded-b-[2.5rem] z-10">
                                    <span className="text-brand-red font-bold uppercase tracking-widest text-[10px] block mb-3">{item.label}</span>
                                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-4">{item.title}</h3>
                                    <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-medium">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

