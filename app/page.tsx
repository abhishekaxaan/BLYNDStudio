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
import { LaunchButton } from "@/components/sections/LaunchButton";
import { VisionTicker } from "@/components/sections/VisionTicker";
import { TechMatrix } from "@/components/sections/TechMatrix";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <HeroSection />
                <VisionTicker />
                <CapabilitiesTeaser />
                <TechMatrix />
                <PhilosophySection />
                <ResultsSection />
                <ShowcaseSection />
                <ProcessSection />
                <FAQSection />
                <LaunchButton />
            </main>
            <Footer />
        </>
    );
}
