import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-outfit",
});

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
        <html lang="en">
            <body className="min-h-screen bg-white text-black font-sans">
                <div className="grain-overlay" />
                {children}
            </body>
        </html>
    );
}
