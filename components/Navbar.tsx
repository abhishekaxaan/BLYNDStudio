"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LiquidGlass } from "./ui/LiquidGlass";

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
                <LiquidGlass
                    intensity={3}
                    className="rounded-[2.5rem] shadow-lg border border-black/5 bg-white/200 backdrop-blur-sm"
                    innerClassName="flex items-center justify-between px-6 md:px-12 py-5 rounded-[2.5rem] relative z-20"
                >
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
                        <div className="flex items-center gap-8 border-r border-black/5 pr-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-300 ${pathname === item.href ? "text-brand-red" : "text-neutral-400 hover:text-black"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <button className="btn-premium bg-white/200 backdrop-blur-sm text-black hover:bg-brand-red hover:text-white transform active:scale-95 shadow-xl border border-black/5">
                            Contact
                        </button>
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex items-center gap-3 md:hidden">
                        <button
                            className="p-2.5 text-neutral-500 hover:text-brand-red active:text-brand-red transition-colors rounded-2xl active:scale-95"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </LiquidGlass>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: -20 }}
                        className="fixed inset-x-6 top-32 bottom-6 z-40 md:hidden"
                    >
                        <LiquidGlass
                            intensity={2.0}
                            className="rounded-[3rem] bg-white/200 backdrop-blur-sm border border-black/5 shadow-2xl"
                            innerClassName="w-full h-full p-12 flex flex-col items-center justify-center gap-10"
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-4xl font-black tracking-tighter uppercase text-black hover:text-brand-red active:text-brand-red transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button className="w-full py-6 rounded-3xl bg-white/200 backdrop-blur-sm text-black font-black text-xl uppercase tracking-[0.2em] shadow-2xl active:scale-95 hover:bg-brand-red hover:text-white transition-all border border-black/5">
                                Contact Now
                            </button>
                        </LiquidGlass>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
