"use client";

import React, { useRef, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

interface LiquidGlassProps {
    children: React.ReactNode;
    className?: string; // Standard React className (Position, Sizing, Rounding)
    innerClassName?: string; // Layout classes for the content (Flex, Padding)
    intensity?: number;
    interactive?: boolean;
    lowPower?: boolean; // If true, skips SVG refraction for standard CSS blur
}

/**
 * High-Fidelity Sculptural Glass Component (OPTIMIZED)
 * References global SVG filters to minimize GPU load.
 */
export const LiquidGlass = ({
    children,
    className,
    innerClassName,
    intensity = 1,
    interactive = true,
    lowPower = false
}: LiquidGlassProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse positions for light reaction
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const springConfig = { stiffness: 150, damping: 40 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!interactive || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handlePointerLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    // Specular highlight positions
    const glossX = useTransform(springX, [0, 1], ["5%", "95%"]);
    const glossY = useTransform(springY, [0, 1], ["0%", "40%"]);

    // Use global filter ID
    const filterId = intensity > 1.5 ? 'glass-refraction-sculptural' : 'glass-refraction-soft';

    return (
        <div
            ref={containerRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className={cn(
                "relative group transition-all duration-700",
                "before:absolute before:inset-0 before:rounded-[inherit] before:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] dark:before:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]",
                className
            )}
        >
            {/* Glass Layers Stack */}
            <div className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none">
                {/* 1. Base Glass & Intense Refraction */}
                <div
                    className={cn(
                        "absolute inset-0 rounded-[inherit]",
                        "bg-white/[0.12] dark:bg-white/[0.06]",
                        "border border-white/40 dark:border-white/20"
                    )}
                    style={{
                        backdropFilter: lowPower
                            ? `blur(60px) saturate(200%) brightness(1.1)`
                            : `blur(80px) saturate(300%) brightness(1.3) contrast(1.1) url(#${filterId})`,
                    } as any}
                />

                {/* 2. SPECULAR BLOOM */}
                <motion.div
                    style={{
                        background: useTransform(
                            [glossX, glossY],
                            ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.7), transparent 60%)`
                        )
                    }}
                    className="absolute inset-0 rounded-[inherit] opacity-100 dark:opacity-70 mix-blend-plus-lighter pointer-events-none"
                />

                {/* 3. CRYSTAL RIM */}
                <div className="absolute inset-0 rounded-[inherit] pointer-events-none">
                    <div className="absolute inset-x-0 top-0 h-[1.5px] bg-white opacity-100 shadow-[0_1px_15px_rgba(255,255,255,1)]" />
                    <div className="absolute inset-y-0 left-0 w-[1.5px] bg-gradient-to-b from-white via-white/20 to-transparent opacity-80" />
                    <div className="absolute inset-0 rounded-[inherit] border-t border-l border-white/50 shadow-[inset_2.5px_2.5px_0px_rgba(255,255,255,0.4)]" />
                    <div className="absolute inset-x-[5%] bottom-0 h-[1px] bg-white/50 shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
                </div>

                {/* 4. PRISMATIC DEPTH */}
                <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-accent-blue/20 via-transparent to-brand-red/20 opacity-40 mix-blend-overlay" />

                {/* 5. MATERIAL NOISE */}
                <div className="absolute inset-0 rounded-[inherit] opacity-[0.08] dark:opacity-[0.05] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            {/* Content Layer */}
            <div className={cn("relative z-10 h-full w-full rounded-[inherit]", innerClassName)}>
                {children}
            </div>
        </div>
    );
};
