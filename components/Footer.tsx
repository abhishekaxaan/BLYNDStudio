"use client";

import React from "react";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="w-full py-20 px-6 relative overflow-hidden bg-black/80 backdrop-blur-xl border-t border-white/5">
            {/* Background elements for depth */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-blue/10 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="font-bold tracking-tighter text-3xl">
                        BLYND<span className="text-brand-red">.</span>
                    </Link>
                    <p className="mt-6 text-neutral-500 max-w-sm leading-relaxed">
                        Reimagining the intersection of high-end design and impactful marketing strategies for the next generation of brands.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">Explore</h4>
                    <ul className="flex flex-col gap-4 text-neutral-500 text-sm">
                        <li><Link href="/" className="hover:text-brand-red transition-colors">Home</Link></li>
                        <li><Link href="/capabilities" className="hover:text-brand-red transition-colors">Capabilities</Link></li>
                        <li><Link href="/about" className="hover:text-brand-red transition-colors">About</Link></li>
                        <li><Link href="/portfolio" className="hover:text-brand-red transition-colors">Portfolio</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">Connect</h4>
                    <ul className="flex flex-col gap-4 text-neutral-500 text-sm">
                        <li><a href="https://twitter.com" target="_blank" className="hover:text-brand-red transition-colors">Twitter (X)</a></li>
                        <li><a href="https://instagram.com" target="_blank" className="hover:text-brand-red transition-colors">Instagram</a></li>
                        <li><a href="https://linkedin.com" target="_blank" className="hover:text-brand-red transition-colors">LinkedIn</a></li>
                        <li><a href="mailto:hello@blynd.studio" className="hover:text-brand-red transition-colors">hello@blynd.studio</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-bold">
                <p>© 2026 BLYND STUDIO. ALL RIGHTS RESERVED.</p>
                <p>SPELLING: B L Y N D / MEANING: VISIONARY</p>
            </div>
        </footer>
    );
};
