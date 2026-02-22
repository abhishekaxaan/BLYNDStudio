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
 * Glassmorphism Component — Premium glass effect with:
 * - Angled shadow (bottom-right, not generic top-to-bottom)
 * - Glossy corner highlights (top-left and bottom-right)
 * - Interactive specular highlight that follows the cursor
 * - Crystal rim highlight on top and left edges
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
            {/* Glass Layer — backdrop blur + semi-transparent bg */}
            <div
                className="absolute inset-0 rounded-[inherit] pointer-events-none"
                style={{
                    backgroundColor: 'var(--glass-bg)',
                    backdropFilter: `blur(${blurRadius}px) saturate(180%)`,
                    WebkitBackdropFilter: `blur(${blurRadius}px) saturate(180%)`,
                    /* Angled shadow — offset bottom-right for depth, not generic centered */
                    boxShadow: '4px 8px 24px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
                }}
            />

            {/* Interactive Specular Highlight — follows cursor */}
            <motion.div
                style={{
                    background: useTransform(
                        [glossX, glossY],
                        ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.2), transparent 60%)`
                    )
                }}
                className="absolute inset-0 rounded-[inherit] opacity-40 mix-blend-overlay pointer-events-none"
            />

            {/* Glossy Corner Highlights — top-left and bottom-right shines */}
            <div className="absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden">
                {/* Top-left glossy corner */}
                <div
                    className="absolute -top-[20%] -left-[20%] w-[50%] h-[50%] rounded-full opacity-[0.12]"
                    style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.9), transparent 70%)' }}
                />
                {/* Bottom-right subtle glow */}
                <div
                    className="absolute -bottom-[15%] -right-[15%] w-[40%] h-[40%] rounded-full opacity-[0.06]"
                    style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.8), transparent 70%)' }}
                />
            </div>

            {/* Crystal Rim — top edge and left edge shine for 3D glass feel */}
            <div className="absolute inset-0 rounded-[inherit] pointer-events-none">
                {/* Top rim */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                {/* Left rim */}
                <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/30 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className={cn("relative z-10 h-full w-full rounded-[inherit]", innerClassName)}>
                {children}
            </div>
        </div>
    );
};
