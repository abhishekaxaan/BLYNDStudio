"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
            className={cn(
                "fixed inset-x-0 z-50 transition-all duration-700",
                isScrolled ? "top-2" : "top-6"
            )}
        >
            <div
                className={cn(
                    "mx-auto px-4 md:px-6 transition-all duration-700",
                    "w-full max-w-[1800px]"
                )}
            >
                <div
                    className={cn(
                        "liquid-glass flex items-center justify-between px-6 md:px-16 py-5 rounded-[2.5rem]",
                        "border border-black/5 dark:border-white/5 shadow-2xl transition-all duration-700",
                        isScrolled ? "bg-background/80 py-3" : "bg-background/40 py-6"
                    )}
                >
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white font-black text-xs liquid-glass group-hover:scale-110 transition-transform">
                            B
                        </div>
                        <span className="font-black tracking-[-0.05em] text-xl uppercase">
                            BLYND<span className="text-brand-red">.</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        <div className="flex items-center gap-10 border-r border-black/5 dark:border-white/10 pr-10">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 hover:text-foreground transition-all group"
                                >
                                    {item.name}
                                    <motion.span
                                        className="absolute -bottom-2 left-0 w-0 h-[2px] bg-brand-red rounded-full group-hover:w-full transition-all duration-300"
                                        layoutId="nav-underline"
                                    />
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-6">
                            <ThemeToggle />
                            <button className="btn-premium bg-foreground text-background hover:bg-brand-red hover:text-white transform active:scale-95 shadow-xl !px-8 !py-3.5">
                                Contact
                            </button>
                        </div>
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex items-center gap-4 md:hidden">
                        <ThemeToggle />
                        <button
                            className="p-3 text-neutral-500 hover:text-foreground transition-colors liquid-glass rounded-2xl"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-x-6 top-28 bottom-6 liquid-glass rounded-[3.5rem] p-12 flex flex-col items-center justify-center gap-12 z-40 md:hidden"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-4xl font-black tracking-tighter uppercase hover:text-brand-red transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <button className="w-full py-6 rounded-3xl bg-brand-red text-white font-black text-xl uppercase tracking-[0.2em]">
                            Contact
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
