"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LaunchButton } from "@/components/sections/LaunchButton";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { LiquidGlass } from "@/components/ui/LiquidGlass";

// Assuming 12 images for now as a default sequence. 
const imageCount = 12;
const images = Array.from({ length: imageCount }, (_, i) => `/portfolio/${i + 1}.jpg`);

const PortfolioItem = ({ src, index, onClick }: { src: string; index: number; onClick: () => void }) => {
    const [error, setError] = useState(false);

    if (error) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group cursor-pointer"
            onClick={onClick}
            onContextMenu={(e) => e.preventDefault()}
        >
            <LiquidGlass
                intensity={0.5}
                className="aspect-[3/2] rounded-[2rem] overflow-hidden relative"
            >
                {/* Real Image - protected */}
                <img
                    src={src}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none pointer-events-none"
                    draggable={false}
                    onError={() => setError(true)}
                />

                {/* Protection Overlay */}
                <div className="absolute inset-0 bg-transparent z-10" />

                {/* UI Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm z-20">
                    <ZoomIn className="text-white w-8 h-8" />
                </div>

                {/* Index Label */}
                <div className="absolute bottom-6 left-6 z-30">
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/50">
                        SEQ / {String(index + 1).padStart(3, "0")}
                    </span>
                </div>
            </LiquidGlass>
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
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
                        onContextMenu={(e) => e.preventDefault()}
                    >
                        <button
                            className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors z-[110]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} strokeWidth={1} />
                        </button>

                        <button
                            className="absolute left-4 md:left-10 text-white/20 hover:text-white transition-colors z-[110]"
                            onClick={prevImage}
                        >
                            <ChevronLeft size={60} strokeWidth={1} />
                        </button>

                        <button
                            className="absolute right-4 md:right-10 text-white/20 hover:text-white transition-colors z-[110]"
                            onClick={nextImage}
                        >
                            <ChevronRight size={60} strokeWidth={1} />
                        </button>

                        <div className="relative w-full h-full flex items-center justify-center">
                            <motion.div
                                key={selectedImage}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="relative max-w-full max-h-full aspect-[3/2] rounded-[2rem] overflow-hidden"
                            >
                                <LiquidGlass intensity={2.5} className="w-full h-full">
                                    <img
                                        src={images[selectedImage]}
                                        alt="Zoomed View"
                                        className="w-full h-full object-contain select-none pointer-events-none"
                                        draggable={false}
                                    />
                                    {/* Anti-download Transparent Overlay */}
                                    <div className="absolute inset-0 bg-transparent z-[105]" />
                                </LiquidGlass>
                            </motion.div>
                        </div>

                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-[10px] uppercase font-black tracking-[0.5em] text-center px-6">
                            IMAGE {selectedImage + 1} / {imageCount} — BLYND STUDIO PROTECTED ASSET
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <LaunchButton />
            <Footer />
        </>
    );
}
