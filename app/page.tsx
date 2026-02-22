"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CapabilitiesTeaser } from "@/components/sections/CapabilitiesTeaser";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { TechMatrix } from "@/components/sections/TechMatrix";

import { LaunchButton } from "@/components/sections/LaunchButton";
import { VisionTicker } from "@/components/sections/VisionTicker";
import { VisionTickerAlt1 } from "@/components/sections/VisionTickerAlt1";
import { VisionTickerAlt2 } from "@/components/sections/VisionTickerAlt2";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <HeroSection />
                <VisionTicker />
                <CapabilitiesTeaser />
                <TechMatrix />
                {/* Marquee Alt 1: Stacked split rows with accent colors */}
                <VisionTickerAlt1 />

                <PhilosophySection />
                <ResultsSection />
                <ShowcaseSection />
                {/* Marquee Alt 2: Giant gradient & outlined words */}
                <VisionTickerAlt2 />
                <ProcessSection />
                <FAQSection />
                <LaunchButton />
            </main>
            <Footer />
        </>
    );
}
