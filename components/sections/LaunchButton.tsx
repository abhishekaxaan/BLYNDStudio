"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import Link from "next/link";
import { motion } from "framer-motion";

const FloatingElement = ({ position, color, speed = 1, distort = 0.4 }: any) => {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
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
            {[...Array(24)].map((_, i) => {
                const angle = (i / 24) * Math.PI * 2;
                const radius = 3.5 + Math.random() * 0.5;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                    <FloatingElement
                        key={i}
                        position={[x, y, 0]}
                        color={i % 2 === 0 ? "#ef4444" : "#a855f7"}
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
                <ambientLight intensity={0.8} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <RotatingRing />
            </Canvas>
        </div>
    );
};

export const LaunchButton = () => {
    return (
        <section className="pt-32 pb-40 md:pt-32 md:pb-40 px-6 relative overflow-hidden flex items-center justify-center">
            <LaunchScene />

            <div className="relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative flex items-center justify-center group"
                >
                    <Link
                        href="/contact"
                        className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-[#ebf0f5] shadow-[15px_15px_30px_#d1d9e6,-15px_-15px_30px_#ffffff] hover:shadow-[inset_10px_10px_20px_#d1d9e6,inset_-10px_-10px_20px_#ffffff] text-neutral-800 font-black uppercase tracking-[0.3em] text-xs md:text-sm transition-all duration-500 flex items-center justify-center transform active:scale-95 relative overflow-hidden"
                    >
                        <span className="relative z-10 text-center leading-relaxed text-[#ebf0f5] drop-shadow-[3px_3px_6px_#d1d9e6,-3px_-3px_6px_#ffffff] transition-all">
                            <span className="text-neutral-800">Ready to</span> <br />
                            <span className="text-2xl md:text-4xl block mt-2 bg-gradient-to-r from-brand-red via-accent-purple to-accent-blue bg-clip-text text-transparent opacity-90 group-hover:opacity-100 group-hover:drop-shadow-sm transition-all">
                                Launch?
                            </span>
                        </span>

                        {/* Subtle inner orbital ring to keep the original motif but skeuo-friendly */}
                        <div className="absolute inset-4 border border-brand-red/10 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-8 border border-accent-blue/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    </Link>

                    {/* Badge - Skeuomorphic */}
                    <motion.div
                        className="absolute -top-16 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-[#ebf0f5] shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] text-[9px] font-black uppercase tracking-widest whitespace-nowrap z-20 hover:scale-105 transition-transform cursor-default flex items-center justify-center"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-accent-purple drop-shadow-[1px_1px_2px_#d1d9e6]">
                            Limited Engineering Slots
                        </span>
                    </motion.div>
                </motion.div>

                <p className="mt-16 text-neutral-500 font-medium text-lg max-w-sm text-center leading-relaxed drop-shadow-sm">
                    Accepting select visionary projects for the upcoming quarter.
                </p>
            </div>
        </section>
    );
};

