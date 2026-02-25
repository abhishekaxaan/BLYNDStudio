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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="relative group cursor-pointer w-full max-w-5xl mx-auto px-4 md:px-0"
            onClick={onClick}
        >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/5 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)]">
                <LiquidGlass
                    intensity={0.8}
                    className="w-full h-auto"
                >
                    <div className="relative w-full h-full">
                        {/* Real Image */}
                        <img
                            src={src}
                            alt={`Blynd Studio Portfolio - Piece ${index + 1}`}
                            className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-[1.02] select-none pointer-events-none block"
                            draggable={false}
                            onError={() => setError(true)}
                        />

                        {/* High-security Transparent Overlay */}
                        <div
                            className="absolute inset-0 bg-transparent z-[15] select-none touch-none"
                            onContextMenu={(e) => e.preventDefault()}
                        />

                        {/* Hover UI Reveal */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px] z-20">
                            <div className="p-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                                <ZoomIn className="text-white w-6 h-6" strokeWidth={1.5} />
                            </div>
                        </div>

                        {/* Metadata Tag */}
                        <div className="absolute bottom-8 left-8 z-30">
                            <div className="flex flex-col gap-1">
                                <span className="text-[9px] font-black tracking-[0.4em] uppercase text-white/40">
                                    ASSET TYPE / [PV.SC]
                                </span>
                                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/80">
                                    SEQ_{String(index + 1).padStart(3, "0")}
                                </span>
                            </div>
                        </div>
                    </div>
                </LiquidGlass>
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
        <>
            <Navbar />
            <main className="relative min-h-screen pt-32 md:pt-48 pb-20 px-6 overflow-hidden text-foreground">
                {/* Dynamic Background Depth */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 opacity-[0.03]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-foreground/5 blur-[100px] md:blur-[140px] rounded-full animate-liquid opacity-10" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-12 md:mb-20 text-left"
                    >
                        <span className="text-brand-red font-bold uppercase tracking-widest text-[10px] block mb-4">The Work</span>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6 md:mb-8 uppercase">
                            Visual <br className="hidden md:block" /> Chronicle.
                        </h1>
                        <p className="max-w-xl text-neutral-500 font-light text-base md:text-lg">
                            A sequential gallery of our landscape explorations. Protected and preserved in high-fidelity.
                        </p>
                    </motion.div>

                    <div className="flex flex-col gap-12 md:gap-24">
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
                        className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-4 md:p-10"
                        onContextMenu={(e) => e.preventDefault()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/40 hover:text-white transition-all hover:scale-110 z-[110] p-2"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close Lightbox"
                        >
                            <X size={32} strokeWidth={1.5} />
                        </button>

                        {/* Navigation Controls */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-10 pointer-events-none z-[110]">
                            <button
                                className="text-white/20 hover:text-white transition-all hover:scale-110 pointer-events-auto p-2"
                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                aria-label="Previous Image"
                            >
                                <ChevronLeft size={48} strokeWidth={1} />
                            </button>

                            <button
                                className="text-white/20 hover:text-white transition-all hover:scale-110 pointer-events-auto p-2"
                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                aria-label="Next Image"
                            >
                                <ChevronRight size={48} strokeWidth={1} />
                            </button>
                        </div>

                        {/* Main Image Container */}
                        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedImage}
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 1.05, y: -10 }}
                                    transition={{
                                        type: "spring",
                                        damping: 30,
                                        stiffness: 300,
                                        opacity: { duration: 0.2 }
                                    }}
                                    className="relative max-w-full max-h-[85vh] rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 pointer-events-auto"
                                >
                                    <LiquidGlass intensity={3} className="w-full h-full bg-black/90">
                                        <div className="relative w-full h-full flex items-center justify-center">
                                            <img
                                                src={images[selectedImage]}
                                                alt={`Blynd Studio Portfolio - Asset ${selectedImage + 1}`}
                                                className="max-w-full max-h-[85vh] w-auto h-auto object-contain select-none pointer-events-none block"
                                                draggable={false}
                                            />
                                            {/* High-security Transparent Overlay */}
                                            <div
                                                className="absolute inset-0 bg-transparent z-[105] select-none"
                                                onContextMenu={(e) => e.preventDefault()}
                                            />
                                        </div>
                                    </LiquidGlass>
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
                                <span className="text-white/40 text-[9px] md:text-[10px] uppercase font-black tracking-[0.6em]">
                                    GALLERY / SEQUENCE / {String(selectedImage + 1).padStart(3, "0")}
                                </span>
                                <div className="h-px w-8 bg-brand-red/30" />
                                <span className="text-white/20 text-[8px] uppercase font-medium tracking-[0.2em] max-w-[200px] md:max-w-none">
                                    Proprietary Asset — BLYND STUDIO Visual Chronicle © 2024
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <LaunchButton />
            <Footer />
        </>
    );
}
