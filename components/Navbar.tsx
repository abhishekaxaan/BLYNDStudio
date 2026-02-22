"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LiquidGlass } from "./ui/LiquidGlass";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navItems = [
    { name: "Home", href: "/" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className="fixed inset-x-0 z-50 top-6"
        >
            <div className="mx-auto px-4 md:px-6 w-full max-w-[1800px]">
                <LiquidGlass
                    intensity={1.2}
                    className="rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10"
                    innerClassName="flex items-center justify-between px-6 md:px-12 py-5"
                >
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white font-black text-xs liquid-glass group-hover:scale-110 transition-transform">
                            B
                        </div>
                        <span className="font-black tracking-[-0.05em] text-xl uppercase whitespace-nowrap">
                            BLYND<span className="text-brand-red">.</span>
                        </span>
                    </Link>

                    {/* Desktop Nav - Pushed to the right */}
                    <div className="hidden md:flex items-center gap-8 ml-auto">
                        <div className="flex items-center gap-8 border-r border-white/10 pr-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 hover:text-white transition-all group"
                                >
                                    {item.name}
                                    <motion.span
                                        className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-brand-red rounded-full group-hover:w-full transition-all duration-300"
                                        layoutId="nav-underline"
                                    />
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-6">
                            <ThemeToggle />
                            <button className="btn-premium bg-white text-black hover:bg-brand-red hover:text-white transform active:scale-95 shadow-xl !px-8 !py-3">
                                Contact
                            </button>
                        </div>
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex items-center gap-3 md:hidden">
                        <ThemeToggle />
                        <button
                            className="p-2.5 text-neutral-400 hover:text-white transition-colors liquid-glass rounded-2xl"
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
                            className="rounded-[3rem]"
                            innerClassName="w-full h-full p-12 flex flex-col items-center justify-center gap-10"
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-4xl font-black tracking-tighter uppercase text-white hover:text-brand-red transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <button className="w-full py-6 rounded-3xl bg-brand-red text-white font-black text-xl uppercase tracking-[0.2em] shadow-2xl">
                                Contact Now
                            </button>
                        </LiquidGlass>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
