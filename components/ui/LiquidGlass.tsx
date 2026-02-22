"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    innerClassName?: string;
    intensity?: number;
    interactive?: boolean;
}

/**
 * Glassmorphism Component — Pure CSS backdrop-filter: blur()
 * Light mode only. The `intensity` prop scales blur radius (base 12px).
 */
export const LiquidGlass = ({
    children,
    className,
    innerClassName,
    intensity = 1,
    interactive = true,
    style,
    ...props
}: LiquidGlassProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const springConfig = { stiffness: 150, damping: 40 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!interactive || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    };

    const handlePointerLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    const glossX = useTransform(springX, [0, 1], ["5%", "95%"]);
    const glossY = useTransform(springY, [0, 1], ["0%", "40%"]);

    const blurRadius = Math.round(12 * intensity);

    return (
        <div
            ref={containerRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className={cn(
                "relative group transition-all duration-700",
                className
            )}
            style={style}
            {...props}
        >
            {/* Glass Layer */}
            <div
                className="absolute inset-0 rounded-[inherit] pointer-events-none"
                style={{
                    backgroundColor: 'var(--glass-bg)',
                    border: '0.5px solid var(--glass-border)',
                    backdropFilter: `blur(${blurRadius}px) saturate(180%)`,
                    WebkitBackdropFilter: `blur(${blurRadius}px) saturate(180%)`,
                }}
            />

            {/* Specular Highlight */}
            <motion.div
                style={{
                    background: useTransform(
                        [glossX, glossY],
                        ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.15), transparent 60%)`
                    )
                }}
                className="absolute inset-0 rounded-[inherit] opacity-30 mix-blend-overlay pointer-events-none"
            />

            {/* Crystal Rim */}
            <div className="absolute inset-0 rounded-[inherit] pointer-events-none">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>

            {/* Content */}
            <div className={cn("relative z-10 h-full w-full rounded-[inherit]", innerClassName)}>
                {children}
            </div>
        </div>
    );
};
