"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, useCursor } from "@react-three/drei";
import * as THREE from "three";
import Link from "next/link";
import { motion } from "framer-motion";

const FloatingElement = ({ position, color, speed = 1, distort = 0.4 }: any) => {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Orbit logic around center
        const radius = Math.sqrt(position[0] ** 2 + position[1] ** 2);
        const initialAngle = Math.atan2(position[1], position[0]);
        const currentAngle = initialAngle + time * speed * 0.2;

        meshRef.current.position.x = Math.cos(currentAngle) * radius;
        meshRef.current.position.y = Math.sin(currentAngle) * radius + Math.sin(time * speed) * 0.2;
        meshRef.current.position.z = Math.sin(currentAngle * 0.5) * 1;

        meshRef.current.rotation.x = time * speed * 0.5;
        meshRef.current.rotation.z = time * speed * 0.3;
    });

    return (
        <Float speed={1} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef}>
                <octahedronGeometry args={[0.25, 0]} />
                <MeshDistortMaterial
                    color={color}
                    speed={speed}
                    distort={distort}
                    radius={0.25}
                    opacity={0.3}
                    transparent
                />
            </mesh>
        </Float>
    );
};

const RotatingRing = () => {
    return (
        <group>
            {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const radius = 3.5 + Math.random() * 0.5;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                    <FloatingElement
                        key={i}
                        position={[x, y, 0]}
                        color={i % 2 === 0 ? "#ffffff" : "#333333"}
                        speed={0.4 + Math.random() * 0.4}
                        distort={0.1 + Math.random() * 0.2}
                    />
                );
            })}
        </group>
    );
}

export const LaunchScene = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={0.5} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={0.5} />
                <RotatingRing />
            </Canvas>
        </div>
    );
};

export const LaunchButton = () => {
    return (
        <section className="py-16 md:py-24 px-6 relative overflow-hidden flex items-center justify-center">
            <LaunchScene />

            <div className="relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative flex items-center justify-center"
                >
                    <Link
                        href="/contact"
                        className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-black text-white font-black uppercase tracking-[0.3em] text-xs md:text-sm transition-all duration-700 shadow-lg flex items-center justify-center group transform active:scale-95 border border-white/10 relative overflow-hidden hover:shadow-[0_0_60px_rgba(239,68,68,0.3)] active:shadow-[0_0_60px_rgba(239,68,68,0.5)]"
                    >
                        {/* Hover/Tap gradient overlay */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-red via-accent-purple to-accent-blue opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10 text-center">Ready to <br /> <span className="text-2xl md:text-4xl block mt-2">Launch?</span></span>

                        {/* Subtle orbital ring */}
                        <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                    </Link>

                    {/* Badge - Now Neutral */}
                    <motion.div
                        className="absolute -top-12 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-neutral-900 text-white text-[9px] font-black uppercase tracking-widest shadow-xl whitespace-nowrap border border-white/10"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        Limited Engineering Slots
                    </motion.div>
                </motion.div>

                <p className="mt-16 text-neutral-500 font-light text-lg max-w-sm text-center leading-relaxed opacity-60">
                    Accepting select visionary projects for the upcoming quarter.
                </p>
            </div>
        </section>
    );
};
