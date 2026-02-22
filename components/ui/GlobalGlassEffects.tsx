"use client";

import React from "react";

/**
 * GlobalGlassEffects
 * 
 * Consolidates all heavy SVG filters into a single root-level definition.
 * This allows all LiquidGlass components across the site to share a single 
 * displacement map/refraction rendering pipeline, drastically reducing GPU load.
 */
export const GlobalGlassEffects = () => {
    return (
        <svg
            className="fixed pointer-events-none opacity-0"
            style={{ width: 0, height: 0, visibility: 'hidden' }}
            aria-hidden="true"
        >
            <defs>
                {/* 1. SCULPTURAL REFRACTION (The standard "Liquid" look) */}
                <filter id="glass-refraction-sculptural" x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.005"
                        numOctaves="2"
                        seed="42"
                        result="noise"
                    />
                    <feComponentTransfer in="noise" result="curvedMap">
                        <feFuncR type="gamma" exponent="1.5" />
                        <feFuncG type="gamma" exponent="1.5" />
                    </feComponentTransfer>
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="curvedMap"
                        scale="60"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>

                {/* 2. SOFT REFRACTION (More subtle, lighter on GPU) */}
                <filter id="glass-refraction-soft" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.01"
                        numOctaves="1"
                        seed="7"
                        result="noise"
                    />
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="noise"
                        scale="20"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </defs>
        </svg>
    );
};
