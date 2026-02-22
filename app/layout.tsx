import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "./providers";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-outfit",
});

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const metadata: Metadata = {
    title: "BLYND Studio | Design & Marketing Excellence",
    description: "BLYND Studio is a premium design and marketing agency specializing in high-end visual storytelling and brand strategy.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn("min-h-screen bg-background text-foreground transition-all duration-700 font-sans")}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
                    <div className="grain-overlay" />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
