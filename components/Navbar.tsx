"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hexagon } from "lucide-react"; // Switched Box to Hexagon for a sharper technical look
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Course", href: "/outline" },
        { name: "Faculty", href: "/faculty" },
        { name: "Alumni", href: "/alumni" },
        { name: "Research", href: "/research" },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navListVariant = {
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
        hide: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    } as const;

    const navItemVariant = {
        show: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 },
        },
        hide: { opacity: 0, x: 20 },
    } as const;

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed w-full top-0 left-0 z-[100] transition-all duration-500 ${
                    isScrolled ? "py-3" : "py-6"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div
                        className={`relative flex justify-between items-center px-6 py-2 rounded-2xl border transition-all duration-500 ${
                            isScrolled
                                ? "bg-black/60 backdrop-blur-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                : "bg-transparent border-transparent"
                        }`}
                    >
                        {/* Logo - High Contrast Monochrome */}
                        <Link
                            href="/"
                            className="group flex items-center gap-2"
                        >
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:rotate-[30deg] transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                <Hexagon className="text-black w-6 h-6 fill-black" />
                            </div>
                            <span className="text-white font-black text-xl italic tracking-tighter">
                                CHEMI<span className="text-white/40">RUET</span>
                            </span>
                        </Link>

                        {/* Desktop Nav - Monochrome Pill */}
                        <nav className="hidden md:flex items-center bg-white/5 border border-white/5 p-1 rounded-full backdrop-blur-md">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`relative px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                                            isActive
                                                ? "text-black"
                                                : "text-white/40 hover:text-white"
                                        }`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-pill"
                                                className="absolute inset-0 bg-white rounded-full -z-10 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                                transition={{
                                                    type: "spring",
                                                    bounce: 0.15,
                                                    duration: 0.6,
                                                }}
                                            />
                                        )}
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Action Button - Inverted High Contrast */}
                        <div className="hidden md:block">
                            <Link
                                href="/contact"
                                className="px-5 py-2 bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-white hover:text-black transition-all duration-300 active:scale-95 shadow-lg"
                            >
                                Get in Touch
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden w-10 h-10 flex items-center justify-center text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white hover:text-black transition-colors"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[110]"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 30,
                                stiffness: 300,
                            }}
                            className="fixed top-0 right-0 w-[320px] h-full bg-[#050505] border-l border-white/10 z-[120] p-10 shadow-2xl"
                        >
                            <div className="flex justify-between items-center mb-16">
                                <span className="text-white/20 font-mono text-[10px] tracking-[0.5em]">
                                    CORE_V2
                                </span>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-white/50 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <motion.nav
                                variants={navListVariant}
                                initial="hide"
                                animate="show"
                                exit="hide"
                                className="flex flex-col gap-8"
                            >
                                {navItems.map((item) => (
                                    <motion.div
                                        key={item.name}
                                        variants={navItemVariant}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                            className="text-4xl font-black italic text-white/20 hover:text-white transition-all tracking-tighter"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    variants={navItemVariant}
                                    className="mt-12 pt-8 border-t border-white/5"
                                >
                                    <Link
                                        href="/contact"
                                        className="w-full flex py-4 bg-white text-black items-center justify-center font-black uppercase tracking-tighter text-sm rounded-xl hover:invert transition-all"
                                    >
                                        Initiate Contact
                                    </Link>
                                </motion.div>
                            </motion.nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
