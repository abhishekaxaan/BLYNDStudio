import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    Float,
    Environment,
    MeshDistortMaterial,
    Stars,
    Sparkles as Sparkles3D
} from '@react-three/drei';
import {
    motion, useScroll, useTransform, useSpring, AnimatePresence,
    useMotionValue
} from 'framer-motion';
import {
    ArrowRight, Menu, X, Box, Layers, Zap, Video,
    Sun, Moon, Mic, Cpu, Sparkles, Play
} from 'lucide-react';

/**
 * BLYND STUDIO - V2.1 (Stable Core)
 * Features: Optimized WebGL Contexts, CSS 3D Fallbacks, Konami Code
 */

// --- Design System ---
const THEMES = {
    light: {
        bg: "#FAFAFA",
        surface: "#FFFFFF",
        textPrimary: "#111827",
        textSecondary: "#4B5563",
        border: "rgba(0,0,0,0.08)",
    },
    dark: {
        bg: "#050505",
        surface: "#111111",
        textPrimary: "#F9FAFB",
        textSecondary: "#9CA3AF",
        border: "rgba(255,255,255,0.1)",
    }
};

// --- R3F COMPONENTS (The Real 3D) ---

// 1. Hero Liquid Sphere
const LiquidChrome = () => {
    const meshRef = useRef(null);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(t / 2);
            meshRef.current.rotation.y = Math.sin(t / 4);
        }
    });

    return (
        <mesh
            ref={meshRef}
            position={[0, 0, 0]}
            scale={2.5}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <sphereGeometry args={[1, 64, 64]} />
            <MeshDistortMaterial
                color={hovered ? "#4F46E5" : "#ffffff"}
                envMapIntensity={1}
                clearcoat={1}
                clearcoatRoughness={0}
                metalness={0.9}
                roughness={0.1}
                distort={hovered ? 0.6 : 0.3}
                speed={hovered ? 4 : 2}
            />
        </mesh>
    );
};

// 2. Anti-Gravity Background Objects
const FloatingGeo = ({ position, color, geometry }) => {
    const mesh = useRef(null);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (mesh.current) {
            // Gentle rotation
            const speed = hovered ? 5 : 0.2;
            mesh.current.rotation.x += delta * speed;
            mesh.current.rotation.y += delta * speed;
        }
    });

    return (
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
            <mesh
                ref={mesh}
                position={position}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                {geometry === 'box' && <boxGeometry args={[1, 1, 1]} />}
                {geometry === 'torus' && <torusGeometry args={[0.8, 0.2, 16, 32]} />}
                {geometry === 'oct' && <octahedronGeometry args={[1]} />}
                <meshStandardMaterial
                    color={color}
                    roughness={0.2}
                    metalness={0.8}
                    emissive={hovered ? color : "#000"}
                    emissiveIntensity={hovered ? 2 : 0}
                    transparent opacity={0.8}
                />
            </mesh>
        </Float>
    );
};

const BackgroundScene = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#4F46E5" />
                <group>
                    <FloatingGeo position={[-6, 3, -5]} color="#4F46E5" geometry="torus" />
                    <FloatingGeo position={[7, -4, -8]} color="#EC4899" geometry="oct" />
                    <FloatingGeo position={[-5, -6, -10]} color="#06B6D4" geometry="box" />
                    <FloatingGeo position={[8, 5, -12]} color="#F59E0B" geometry="torus" />
                </group>
            </Canvas>
        </div>
    );
};

// 3. Galaxy Footer
const Galaxy = () => {
    return (
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sparkles3D count={200} scale={5} size={2} speed={0.4} opacity={0.5} color="#4F46E5" />
        </Canvas>
    );
};

// --- LOGIC HOOKS ---

const KONAMI_SEQUENCE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

const useKonami = () => {
    const [triggered, setTriggered] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handler = (e) => {
            if (e.key === KONAMI_SEQUENCE[index]) {
                const next = index + 1;
                if (next === KONAMI_SEQUENCE.length) {
                    setTriggered(true);
                    setIndex(0);
                } else {
                    setIndex(next);
                }
            } else {
                setIndex(0);
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [index]);

    return triggered;
};

// --- REACT COMPONENTS ---

const Navbar = ({ setPage, currentPage, isScrolled, theme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const colors = THEMES[theme];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
            style={{
                backgroundColor: isScrolled ? (theme === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(5,5,5,0.8)') : 'transparent',
                backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                borderBottom: isScrolled ? `1px solid ${colors.border}` : 'none'
            }}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div
                    onClick={() => setPage('home')}
                    className="cursor-pointer interactive flex items-center gap-2 group"
                    style={{ color: colors.textPrimary }}
                >
                    <div className="w-10 h-10 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-black text-xl rounded-lg group-hover:rotate-12 transition-transform">B</div>
                    <span className="font-black tracking-tighter text-xl">BLYND.</span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {['Home', 'Work', 'Process', 'Studio'].map((item) => (
                        <button
                            key={item}
                            onClick={() => setPage(item.toLowerCase() === 'work' ? 'portfolio' : item.toLowerCase() === 'studio' ? 'about' : item.toLowerCase())}
                            className={`text-sm font-bold tracking-wide transition-colors relative group interactive`}
                            style={{ color: currentPage === (item.toLowerCase() === 'work' ? 'portfolio' : item.toLowerCase()) ? colors.textPrimary : colors.textSecondary }}
                        >
                            {item.toUpperCase()}
                            {currentPage === (item.toLowerCase() === 'work' ? 'portfolio' : item.toLowerCase()) && <motion.div layoutId="underline" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-indigo-500" />}
                        </button>
                    ))}
                    <button onClick={() => setPage('contact')} className="px-6 py-2.5 rounded-full text-white text-sm font-bold tracking-wide bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/50">
                        START PROJECT
                    </button>
                </div>

                <button className="md:hidden interactive" style={{ color: colors.textPrimary }} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }} animate={{ height: '100vh' }} exit={{ height: 0 }}
                        className="absolute top-0 left-0 right-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {['Home', 'Work', 'Process', 'Studio', 'Contact'].map((link) => (
                            <button key={link} onClick={() => { setPage(link.toLowerCase()); setIsOpen(false); }} className="text-4xl font-black text-white">
                                {link}
                            </button>
                        ))}
                        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-6 text-white"><X size={32} /></button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

// 1. HERO with Liquid Sphere
const HeroSection = ({ setPage, theme, colors }) => {
    return (
        <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden pt-20">

            {/* 3D Liquid Sphere Container */}
            <div className="absolute inset-0 z-0">
                <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={2} color="#4F46E5" />
                    <Environment preset="city" />
                    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                        <LiquidChrome />
                    </Float>
                </Canvas>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center pointer-events-none">
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                    <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.85] mb-8 mix-blend-exclusion text-white">
                        BEYOND<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">VISION.</span>
                    </h1>
                </motion.div>

                <div className="pointer-events-auto mt-12">
                    <button onClick={() => setPage('portfolio')} className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                        EXPLORE WORK
                    </button>
                </div>
            </div>
        </section>
    );
};

// 2. COMPARISON: The X-Ray Lens
const XRaySection = ({ theme, colors }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <section className="py-32 px-6">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">THE X-RAY LENS</h2>
                    <p style={{ color: colors.textSecondary }}>Hover to reveal the BLYND difference.</p>
                </div>

                <div
                    ref={containerRef}
                    onMouseMove={handleMove}
                    className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl cursor-none group"
                >
                    {/* 1. Boring Layer (Base) */}
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                        <div className="text-center opacity-40 grayscale">
                            <h3 className="text-6xl font-serif text-gray-800 mb-4">Standard Agency</h3>
                            <div className="w-32 h-32 bg-gray-300 mx-auto rounded-full" />
                        </div>
                    </div>

                    {/* 2. Cool Layer (Revealed) */}
                    <div
                        className="absolute inset-0 bg-black flex items-center justify-center"
                        style={{
                            clipPath: `circle(200px at ${mousePos.x}px ${mousePos.y}px)`,
                            transition: 'clip-path 0.1s ease-out'
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-black" />

                        {/* 3D Elements inside the reveal */}
                        <div className="absolute inset-0 w-full h-full">
                            <Canvas>
                                <ambientLight intensity={1} />
                                <Float speed={5} rotationIntensity={2}><mesh position={[-2, 1, -2]}><torusGeometry args={[0.5, 0.2, 16, 32]} /><meshNormalMaterial /></mesh></Float>
                                <Float speed={4} rotationIntensity={3}><mesh position={[2, -1, -2]}><octahedronGeometry /><meshNormalMaterial /></mesh></Float>
                            </Canvas>
                        </div>

                        <div className="relative z-10 text-center">
                            <h3 className="text-7xl font-black text-white tracking-tighter mix-blend-overlay">BLYND</h3>
                            <p className="text-indigo-400 font-bold tracking-[0.5em] mt-4">EXPERIENCE</p>
                        </div>
                    </div>

                    {/* Lens Ring UI */}
                    <div
                        className="absolute w-[400px] h-[400px] rounded-full border-2 border-indigo-500/50 pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-[0_0_50px_rgba(79,70,229,0.3)] hidden md:block"
                        style={{ left: mousePos.x, top: mousePos.y }}
                    />
                </div>
            </div>
        </section>
    );
};

// 3. SERVICES: Holographic Hover (Optimized - No Canvas to save Context)
const ServicesSection = ({ theme, colors }) => (
    <section className="py-32" style={{ backgroundColor: theme === 'light' ? '#fff' : '#050505' }}>
        <div className="container mx-auto px-6">
            <h2 className="text-5xl font-black mb-16">CAPABILITIES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: "3D Motion", icon: <Box size={48} /> },
                    { title: "Creative Dev", icon: <Layers size={48} /> },
                    { title: "Identity", icon: <Zap size={48} /> },
                    { title: "Strategy", icon: <Cpu size={48} /> }
                ].map((s, i) => (
                    <div
                        key={i}
                        className="h-80 border rounded-2xl relative overflow-hidden group hover:border-indigo-500 transition-colors perspective-1000"
                        style={{ borderColor: colors.border, backgroundColor: colors.surface }}
                    >
                        {/* Holographic CSS Effect */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110">
                            <div className="relative transform-style-3d animate-float">
                                <div className="text-indigo-500 filter drop-shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                                    {s.icon}
                                </div>
                                {/* Fake 3D Rings */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-indigo-400/30 rounded-full rotate-x-60 group-hover:rotate-x-45 transition-transform duration-1000" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-indigo-400/20 rounded-full rotate-y-60 group-hover:rotate-y-45 transition-transform duration-1000 delay-100" />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
                            <h3 className="text-2xl font-bold text-white">{s.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// 4. FOOTER: Interactive Galaxy
const Footer = ({ setPage, theme, colors }) => (
    <footer className="relative bg-black text-white h-[50vh] flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Galaxy />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20 text-center">
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
                READY TO<br /><span className="text-indigo-500">LAUNCH?</span>
            </h2>
            <button onClick={() => setPage('contact')} className="px-12 py-4 border border-white/20 hover:bg-white hover:text-black transition-colors rounded-full font-bold">
                INITIATE PROJECT
            </button>
        </div>

        <div className="relative z-10 container mx-auto px-6 pb-8 flex justify-between text-xs text-gray-500 font-mono uppercase">
            <div>© 2026 Blynd Studio</div>
            <div className="flex gap-4">
                <span>Instagram</span>
                <span>Twitter</span>
                <span>LinkedIn</span>
            </div>
        </div>
    </footer>
);

// --- MAIN APP ---

const HomePage = ({ setPage, theme }) => {
    const colors = THEMES[theme];
    return (
        <div style={{ color: colors.textPrimary }}>
            <HeroSection setPage={setPage} theme={theme} colors={colors} />
            <XRaySection theme={theme} colors={colors} />
            <ServicesSection theme={theme} colors={colors} />
            <Footer setPage={setPage} theme={theme} colors={colors} />
        </div>
    );
};

const PlaceholderPage = ({ title }) => (
    <div className="min-h-screen pt-32 px-6 flex items-center justify-center">
        <h1 className="text-6xl font-black opacity-10">{title}</h1>
    </div>
);

export default function App() {
    const [theme, setTheme] = useState('light');
    const [currentPage, setCurrentPage] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    // Konami Code Trigger
    const konami = useKonami();

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`min-h-screen font-sans transition-colors duration-500 relative overflow-x-hidden ${konami ? 'animate-spin-slow' : ''}`}
            style={{ backgroundColor: THEMES[theme].bg }}
        >
            {/* Konami Mode UI */}
            {konami && (
                <div className="fixed top-10 left-1/2 -translate-x-1/2 z-[100] bg-red-600 text-white px-6 py-2 font-black rounded-full shadow-xl animate-pulse">
                    ⚠️ ZERO GRAVITY MODE ACTIVATED
                </div>
            )}

            <BackgroundScene theme={theme} />

            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="fixed bottom-8 right-8 z-[90] p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform"
                style={{
                    backgroundColor: theme === 'light' ? '#111' : '#FFF',
                    color: theme === 'light' ? '#FFF' : '#111'
                }}
            >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <Navbar setPage={setCurrentPage} currentPage={currentPage} isScrolled={isScrolled} theme={theme} />

            <main className="relative z-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {currentPage === 'home' && <HomePage setPage={setCurrentPage} theme={theme} />}
                        {currentPage !== 'home' && <PlaceholderPage title={currentPage.toUpperCase()} />}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* CSS Utility for 3D Transform */}
            <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .rotate-x-60 { transform: rotateX(60deg); }
        .rotate-y-60 { transform: rotateY(60deg); }
        .rotate-x-45 { transform: rotateX(45deg); }
        .rotate-y-45 { transform: rotateY(45deg); }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
        </div>
    );
}