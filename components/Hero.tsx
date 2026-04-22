"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Microscope, Database } from "lucide-react";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    } as const;

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    } as const;

    return (
        <section className="relative min-h-[90vh] w-full flex items-center justify-center px-6 overflow-hidden">
            {/* Decorative Technical Coordinates (Blueprint Feel) */}
            <div className="absolute top-20 left-10 text-white/5 font-mono text-xs hidden md:block select-none">
                LAT: 24.3636° N <br /> LONG: 88.6241° E
            </div>
            <div className="absolute bottom-20 right-10 text-white/5 font-mono text-xs hidden md:block select-none text-right">
                SYS_STATUS: OPTIMAL <br /> REF_MODEL: ChE_V3.0
            </div>

            <motion.div
                className="relative z-10 max-w-5xl w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col items-center text-center">
                    {/* Animated Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md"
                    >
                        <span className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase">
                            Engineering Excellence
                        </span>
                    </motion.div>

                    {/* Main Title - Italic & Heavy */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 italic tracking-tighter"
                    >
                        CHEMICAL <br />
                        <span className="text-blue-500">ENGINEERING.</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed font-light"
                    >
                        Navigating the intersection of molecular science and
                        industrial scale. Access blueprints for{" "}
                        <span className="text-white">course resources</span>,
                        faculty insights, and research breakthroughs.
                    </motion.p>

                    {/* Glass CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                    >
                        <Link
                            href="/outline"
                            className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                        >
                            <div className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <Database size={18} className="relative z-10" />
                            <span className="relative z-10 group-hover:text-white transition-colors">
                                Course Outline
                            </span>
                            <ChevronRight
                                size={18}
                                className="relative z-10 group-hover:translate-x-1 transition-transform"
                            />
                        </Link>

                        <Link
                            href="/faculty"
                            className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-2xl transition-all hover:bg-white/10 hover:border-white/20 flex items-center justify-center gap-2 active:scale-95"
                        >
                            <Microscope size={18} className="text-blue-400" />
                            Meet Faculty
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* Background Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0" />
        </section>
    );
}
