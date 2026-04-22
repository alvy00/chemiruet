import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "InfoApp | Dept. of ChE",
    description:
        "4-year course outline and necessary info for the Department of ChE",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="bg-black bg-grid">
                <div className="fixed inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

                <Navbar />
                <main className="relative z-10">{children}</main>
            </body>
        </html>
    );
}
