"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";


const faqs = [
    {
        question: "What defines the BLYND approach?",
        answer: "Our approach is rooted in the convergence of high-fidelity aesthetics and strategic market penetration. We don't just design; we engineer visions that sound like the future."
    },
    {
        question: "How long does a typical transformation take?",
        answer: "Visionary design requires precision. Typical studio engagements range from 4 to 12 weeks, depending on the complexity of the brand ecosystem."
    },
    {
        question: "Why the spelling B L Y N D?",
        answer: "It is a homophone for visionary clarity. We look past the obvious noise of the present to craft interfaces that are sharp as glass and fluid as water."
    },
    {
        question: "Do you offer post-launch strategic support?",
        answer: "Yes. We believe a brand is a living entity. We provide ongoing refinement, performance monitoring, and strategic pivots to ensure continuous growth."
    }
];

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-6">
            <div
                className="rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#ebf0f5] shadow-[10px_10px_20px_#d1d9e6,-10px_-10px_20px_#ffffff] transition-all duration-300"
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full text-left p-6 md:p-8 flex items-center justify-between group transition-all"
                >
                    <span className="text-base md:text-xl font-bold tracking-tight pr-4 md:pr-8 text-neutral-800">{question}</span>
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 bg-[#ebf0f5] ${isOpen ? "shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff] text-brand-red" : "shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff] text-neutral-500"}`}>
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                </button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 md:p-10 text-neutral-500 font-light leading-relaxed text-base md:text-lg italic">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQSection = () => {
    return (
        <section className="py-24 md:py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-24">
                    <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] block mb-6">Knowledge Base</span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Liquid logic.</h2>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, idx) => (
                        <FAQItem key={idx} {...faq} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

