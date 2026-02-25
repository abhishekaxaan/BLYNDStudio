"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LaunchButton } from "@/components/sections/LaunchButton";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { LiquidGlass } from "@/components/ui/LiquidGlass";

// Scaled to match the 50 images provided in the public folder.
const imageCount = 50;
const images = Array.from({ length: imageCount }, (_, i) => `/portfolio/${i + 1}.jpg`);

const PortfolioItem = ({ src, index, onClick }: { src: string; index: number; onClick: () => void }) => {
    const [error, setError] = useState(false);

    if (error) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="relative group cursor-pointer w-full max-w-5xl mx-auto px-4 md:px-0"
            onClick={onClick}
        >
            <div className="relative p-3 md:p-6 rounded-[3rem] md:rounded-[4rem] bg-[#ebf0f5] shadow-[24px_24px_64px_#d1d9e6,-24px_-24px_64px_#ffffff] border border-white/60 transition-all duration-700 group-hover:shadow-[inset_12px_12px_24px_#d1d9e6,inset_-12px_-12px_24px_#ffffff]">
                <div className="relative aspect-auto rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05)]">
                    {/* Real Image */}
                    <img
                        src={src}
                        alt={`Blynd Studio Portfolio - Piece ${index + 1}`}
                        className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-[1.01] select-none pointer-events-none block mix-blend-multiply opacity-95 group-hover:opacity-100"
                        draggable={false}
                        onError={() => setError(true)}
                    />

                    {/* High-security Transparent Overlay */}
                    <div
                        className="absolute inset-0 bg-transparent z-[15] select-none touch-none"
                        onContextMenu={(e) => e.preventDefault()}
                    />

                    {/* Hover UI Reveal */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[1px] z-20">
                        <div className="p-5 rounded-full bg-white/40 border border-white/60 shadow-lg backdrop-blur-md">
                            <ZoomIn className="text-neutral-900 w-8 h-8" strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Metadata Tag */}
                    <div className="hidden md:block absolute bottom-6 left-6 md:bottom-10 md:left-10 z-30">
                        <div className="flex flex-col gap-1 px-4 py-2 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 shadow-sm">
                            <span className="text-[8px] font-black tracking-[0.4em] uppercase text-neutral-400">
                                ASSET TYPE / [PV.SC]
                            </span>
                            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-neutral-900">
                                SEQ_{String(index + 1).padStart(3, "0")}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function Portfolio() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % imageCount);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + imageCount) % imageCount);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImage === null) return;
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") setSelectedImage(null);
        };

        const preventDefault = (e: MouseEvent) => {
            if (e.type === 'contextmenu') e.preventDefault();
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("contextmenu", preventDefault);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("contextmenu", preventDefault);
        };
    }, [selectedImage]);

    return (
        <div className="bg-[#ebf0f5]">
            <Navbar />
            <main className="relative min-h-screen pt-32 md:pt-48 pb-20 px-6 overflow-hidden text-foreground">
                {/* Dynamic Global Background Elements */}
                <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                    <div className="absolute top-20 left-[10%] w-0 h-0 rounded-full bg-transparent" style={{ boxShadow: "0 0 250px 150px rgba(255,0,0,0.12)" }} />
                    <div className="absolute top-[40%] right-[5%] w-0 h-0 rounded-full bg-transparent" style={{ boxShadow: "0 0 200px 120px rgba(0,112,243,0.10)" }} />
                    <div className="absolute bottom-32 left-[30%] w-0 h-0 rounded-full bg-transparent" style={{ boxShadow: "0 0 180px 100px rgba(121,40,202,0.08)" }} />
                    <div className="absolute top-[60%] left-[60%] w-0 h-0 rounded-full bg-transparent" style={{ boxShadow: "0 0 150px 90px rgba(16,185,129,0.06)" }} />

                    {/* Subtle Square Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_0%,transparent_100%)]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-12 md:mb-20 text-left"
                    >
                        <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] block mb-6">The Work</span>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-6 md:mb-8 uppercase text-neutral-900">
                            Visual <br className="hidden md:block" /> Chronicle.
                        </h1>
                        <p className="max-w-xl text-neutral-500 font-light text-base md:text-lg">
                            A sequential gallery of our landscape explorations. Protected and preserved in high-fidelity.
                        </p>
                    </motion.div>

                    <div className="flex flex-col gap-12 md:gap-32">
                        {images.map((src, idx) => (
                            <PortfolioItem
                                key={idx}
                                src={src}
                                index={idx}
                                onClick={() => setSelectedImage(idx)}
                            />
                        ))}
                    </div>
                </div>
            </main>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-[#ebf0f5]/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
                        onContextMenu={(e) => e.preventDefault()}
                    >
                        {/* Close Button - Skeuomorphic */}
                        <button
                            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#ebf0f5] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] border border-white/40 flex items-center justify-center text-neutral-400 hover:text-brand-red transition-all active:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] z-[110]"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close Lightbox"
                        >
                            <X size={24} strokeWidth={2} />
                        </button>

                        {/* Navigation Controls */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-10 pointer-events-none z-[110]">
                            <button
                                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#ebf0f5] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] border border-white/40 flex items-center justify-center text-neutral-400 hover:text-neutral-900 transition-all active:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] pointer-events-auto"
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                aria-label="Previous Image"
                            >
                                <ChevronLeft size={24} strokeWidth={2} />
                            </button>

                            <button
                                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#ebf0f5] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] border border-white/40 flex items-center justify-center text-neutral-400 hover:text-neutral-900 transition-all active:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] pointer-events-auto"
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                aria-label="Next Image"
                            >
                                <ChevronRight size={24} strokeWidth={2} />
                            </button>
                        </div>

                        {/* Main Image Container */}
                        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedImage}
                                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 1.02, y: -10 }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "circOut"
                                    }}
                                    className="relative max-w-full max-h-[80vh] p-2 md:p-4 rounded-[2.5rem] md:rounded-[4rem] bg-[#ebf0f5] shadow-[30px_30px_60px_#d1d9e6,-30px_-30px_60px_#ffffff] border border-white/50 pointer-events-auto"
                                >
                                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-[2rem] md:rounded-[3.2rem] bg-white shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05)]">
                                        <img
                                            src={images[selectedImage]}
                                            alt={`Blynd Studio Portfolio - Asset ${selectedImage + 1}`}
                                            className="max-w-full max-h-[80vh] w-auto h-auto object-contain select-none pointer-events-none block mix-blend-multiply"
                                            draggable={false}
                                        />
                                        {/* High-security Transparent Overlay */}
                                        <div
                                            className="absolute inset-0 bg-transparent z-[105] select-none"
                                            onContextMenu={(e) => e.preventDefault()}
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Metadata Footer */}
                        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 w-full text-center px-6">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col items-center gap-2"
                            >
                                <span className="text-neutral-400 text-[10px] uppercase font-black tracking-[0.6em] px-6 py-2 rounded-full bg-[#ebf0f5] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff]">
                                    GALLERY / SEQUENCE / {String(selectedImage + 1).padStart(3, "0")}
                                </span>
                                <div className="h-px w-12 bg-neutral-200 mt-2" />
                                <span className="text-neutral-300 text-[8px] uppercase font-bold tracking-[0.2em] max-w-[200px] md:max-w-none">
                                    Proprietary Asset — BLYND STUDIO Visual Chronicle © 2024
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <LaunchButton />
            <Footer />
        </div>
    );
}
