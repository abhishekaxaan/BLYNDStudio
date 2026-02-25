"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed inset-x-0 z-50 top-6">
            <div className="mx-auto px-4 md:px-6 w-full max-w-[1800px]">
                <div
                    className="rounded-[3rem] bg-[#ebf0f5] shadow-[15px_15px_30px_rgba(0,0,0,0.05)] border border-white/50 transition-all duration-300"
                >
                    <div className="flex items-center justify-between px-6 md:px-12 py-5 relative z-20">
                        <Link href="/" className="flex items-center group shrink-0">
                            <div className="relative w-24 h-12 group-hover:scale-105 transition-transform duration-500">
                                <img
                                    src="/blynd_logo.png"
                                    alt="Blynd Studio Logo"
                                    className="w-full h-full object-contain filter invert dark:invert-0"
                                />
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8 ml-auto">
                            <div className="flex items-center gap-8 border-r border-neutral-300 pr-8">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`relative text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-300 ${pathname === item.href ? "text-brand-red" : "text-neutral-400 hover:text-neutral-900"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            <button className="relative overflow-hidden px-6 py-3 rounded-full bg-[#ebf0f5] shadow-[6px_6px_12px_rgba(0,0,0,0.1)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] text-brand-red font-black uppercase text-[10px] tracking-widest transition-all duration-300 border border-white/40 group">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-accent-pink/10 pointer-events-none" />
                                <span className="relative z-10">Contact</span>
                            </button>
                        </div>

                        {/* Mobile Actions */}
                        <div className="flex items-center gap-3 md:hidden">
                            <button
                                className="p-3 text-neutral-500 hover:text-brand-red transition-all duration-300 rounded-full bg-[#ebf0f5] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] active:shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#ffffff] border border-white/40 flex items-center justify-center"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Toggle Menu"
                            >
                                {mobileMenuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: -20 }}
                        className="fixed inset-x-4 top-32 bottom-6 z-40 md:hidden"
                    >
                        <div
                            className="w-full h-full rounded-[3rem] bg-[#ebf0f5] shadow-[24px_24px_64px_rgba(0,0,0,0.05)] border border-white/50 flex flex-col items-center justify-center gap-10 p-12"
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-4xl font-black tracking-tighter uppercase text-neutral-800 hover:text-brand-red transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button className="relative overflow-hidden w-full py-6 mt-6 rounded-[2rem] bg-[#ebf0f5] shadow-[10px_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1)] text-brand-red font-black text-xl uppercase tracking-[0.2em] transition-all duration-300 border border-white/40 group">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-accent-pink/10 pointer-events-none" />
                                <span className="relative z-10">Contact Now</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
