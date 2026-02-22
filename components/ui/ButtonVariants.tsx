"use client";

import React from "react";
import Link from "next/link";
import { LiquidGlass } from "./LiquidGlass";

export const ButtonVariantA = () => (
    <LiquidGlass
        intensity={1.8}
        className="rounded-full bg-[#660000] border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
    >
        <Link href="/contact" className="px-14 py-7 text-white/90 font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center hover:bg-[#800000] transition-colors">
            <span>Launch Project (Deep Maroon)</span>
        </Link>
    </LiquidGlass>
);

export const ButtonVariantB = () => (
    <LiquidGlass
        intensity={2.5}
        className="rounded-full bg-black/40 border-white/10 backdrop-blur-3xl group"
    >
        <Link href="/contact" className="px-14 py-7 text-white font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center hover:bg-white/10 transition-colors">
            <span className="relative z-10">Launch Project (Ghost Glass)</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </Link>
    </LiquidGlass>
);

export const ButtonVariantC = () => (
    <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#440000] to-[#880000] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <LiquidGlass
            intensity={0.5}
            className="rounded-full bg-black border-white/5 relative"
        >
            <Link href="/contact" className="px-14 py-7 text-white font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center">
                <span>Launch Project (Minimalist Dark)</span>
            </Link>
        </LiquidGlass>
    </div>
);
