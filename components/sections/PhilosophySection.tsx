"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";


export const PhilosophySection = () => {
    return (
        <section className="py-40 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                <div className="relative">
                    <div
                        className="aspect-[4/5] rounded-[3.5rem] bg-[#ebf0f5] p-5 shadow-[15px_15px_30px_#d1d9e6,-15px_-15px_30px_#ffffff] hover:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff] transition-all duration-500 relative group flex"
                    >
                        <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative shadow-[inset_4px_4px_10px_rgba(0,0,0,0.1),inset_-4px_-4px_10px_rgba(255,255,255,0.5)] group-hover:shadow-transparent transition-all duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&fit=crop&q=80&w=800"
                                alt="Abstract 3D Motion"
                                className="absolute inset-0 w-full h-full object-cover opacity-90 grayscale-[20%] group-hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <span className="text-brand-red font-bold uppercase tracking-widest text-xs block mb-4">The Philosophy</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
                        We see what others <br /> choose to ignore.
                    </h2>
                    <div className="space-y-6 text-neutral-400 font-light text-lg leading-relaxed">
                        <p>
                            True vision does not require sight; it requires insight. We exist to cut through the digital noise and architect the visual DNA of tomorrow's most ambitious brands.
                        </p>
                        <p>
                            We create comprehensive brand systems—from ethereal 3D simulations to seamless Next.js platforms—ensuring you are completely unrecognizable from the competition.
                        </p>
                    </div>
                    <Link href="/about" className="mt-12 inline-flex items-center gap-4 text-neutral-800 hover:text-brand-red transition-colors font-bold tracking-widest text-[10px] uppercase group cursor-pointer">
                        <span>Learn More about our vision</span>
                        <div className="w-12 h-[1px] bg-brand-red group-hover:w-16 transition-all duration-300" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

