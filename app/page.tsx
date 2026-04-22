"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import YearCard from "../components/YearCard";

const years = [1, 2, 3, 4];

export default function HomePage() {
    const [expandedYear, setExpandedYear] = useState<number | null>(null);

    const toggleExpand = (year: number) => {
        setExpandedYear(expandedYear === year ? null : year);
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100 },
        },
    } as const;

    return (
        <div className="min-h-screen p-4 md:p-8 text-white overflow-x-hidden">
            <Hero />

            {/* --- RESOURCE SECTION CONTAINER --- */}
            <section className="max-w-7xl mx-auto mt-20">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 px-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                            <span className="text-[10px] font-mono tracking-[0.5em] text-white/40 uppercase">
                                Library Access
                            </span>
                        </div>
                        <h2 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
                            Resource{" "}
                            <span className="text-white/20">Vault.</span>
                        </h2>
                    </div>

                    <div className="font-mono text-[10px] text-white/20 tracking-tighter hidden md:block">
                        SYSTEM_LOC: ROOT/CHEME/RESOURCES
                    </div>
                </div>

                {/* The Grid with a subtle outer border/frame */}
                <div className="relative border border-white/5 bg-white/[0.01] rounded-[3rem] p-6 md:p-10 shadow-inner">
                    {/* Grid background decoration */}
                    <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-white/5 select-none uppercase">
                        Structured_Data_Grid v1.0
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {years.map((year) => (
                            <motion.div
                                key={year}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <YearCard
                                    year={year}
                                    expanded={expandedYear === year}
                                    toggleExpand={toggleExpand}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ------------------------------- */}

            {/* Footer Utility */}
            <footer className="max-w-7xl mx-auto mt-12 mb-8 px-8 text-center">
                <p className="text-[10px] font-mono text-white/10 uppercase tracking-[0.3em]">
                    End of Directory — All resources synced
                </p>
            </footer>
        </div>
    );
}
