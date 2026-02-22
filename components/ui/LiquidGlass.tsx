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
                "before:absolute before:inset-0 before:rounded-[inherit] before:shadow-[0_40px_100px_-20px_rgba(239,68,68,0.15)] dark:before:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]",
                className
            )}
        >
            {/* Glass Layers Stack */}
            <div className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none">
                {/* 1. Base Glass & Intense Refraction */}
                <div
                    className={cn(
                        "absolute inset-0 rounded-[inherit]",
                        "bg-brand-red/[0.04] dark:bg-white/[0.03]",
                        "border border-white/20 dark:border-white/10"
                    )}
                    style={{
                        backdropFilter: lowPower
                            ? `blur(40px) saturate(180%) brightness(1.1)`
                            : `blur(60px) saturate(220%) brightness(1.2) contrast(1.05) url(#${filterId})`,
                    } as any}
                />

                {/* 2. SPECULAR BLOOM */}
                <motion.div
                    style={{
                        background: useTransform(
                            [glossX, glossY],
                            ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.4), transparent 60%)`
                        )
                    }}
                    className="absolute inset-0 rounded-[inherit] opacity-100 dark:opacity-50 mix-blend-overlay pointer-events-none"
                />

                {/* 3. CRYSTAL RIM */}
                <div className="absolute inset-0 rounded-[inherit] pointer-events-none">
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <div className="absolute inset-0 rounded-[inherit] border-t border-l border-white/10" />
                </div>

                {/* 4. PRISMATIC DEPTH (Subtle Red Tint) */}
                <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-brand-red/5 via-transparent to-white/5 opacity-40 mix-blend-overlay" />

                {/* 5. MATERIAL NOISE */}
                <div className="absolute inset-0 rounded-[inherit] opacity-[0.04] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            {/* Content Layer */}
            <div className={cn("relative z-10 h-full w-full rounded-[inherit]", innerClassName)}>
                {children}
            </div>
        </div>
    );
};
