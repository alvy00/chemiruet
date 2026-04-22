"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Layers, ArrowRight, Zap, Microscope } from "lucide-react";

interface YearCardProps {
    year: number;
    expanded: boolean;
    toggleExpand: (year: number) => void;
}

export default function YearCard({
    year,
    expanded,
    toggleExpand,
}: YearCardProps) {
    const router = useRouter();

    // Academic metadata to make it feel "useful"
    const yearDetails: Record<number, { focus: string; icon: any }> = {
        1: { focus: "Foundational Sciences", icon: <Zap size={16} /> },
        2: { focus: "Core Thermodynamics", icon: <Layers size={16} /> },
        3: { focus: "Unit Operations", icon: <Microscope size={16} /> },
        4: { focus: "Plant Design & Thesis", icon: <ArrowRight size={16} /> },
    };

    const handleSemesterClick = (
        e: React.MouseEvent,
        semester: "ODD" | "EVEN",
    ) => {
        e.stopPropagation(); // Prevent the card from closing when clicking a button
        const semesterParam = semester === "ODD" ? 1 : 2;
        router.push(`/${year}-${semesterParam}`);
    };

    return (
        <motion.div
            layout
            onClick={() => toggleExpand(year)}
            className={`relative group overflow-hidden transition-all duration-500 border ${
                expanded
                    ? "bg-white/[0.03] border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                    : "bg-white/[0.01] border-white/5 hover:border-white/20"
            } rounded-[2.5rem] p-8 cursor-pointer`}
        >
            {/* Background Year Number (Large Watermark) */}
            <div className="absolute -right-4 -bottom-10 text-[12rem] font-black text-white/[0.02] italic select-none pointer-events-none group-hover:text-white/[0.04] transition-colors">
                {year}
            </div>

            <div className="relative z-10 flex flex-col h-full">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase mb-1">
                            Academic Phase
                        </span>
                        <h2 className="text-4xl font-black italic text-white tracking-tighter">
                            YEAR {year}.
                        </h2>
                    </div>
                    <div
                        className={`p-3 rounded-2xl transition-all duration-500 ${
                            expanded
                                ? "bg-white text-black"
                                : "bg-white/5 text-white/40"
                        }`}
                    >
                        {yearDetails[year]?.icon}
                    </div>
                </div>

                {/* Short info visible when collapsed */}
                {!expanded && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-white/40 text-sm font-light max-w-[200px]"
                    >
                        {yearDetails[year]?.focus}
                    </motion.p>
                )}

                {/* Expanded Content */}
                <AnimatePresence mode="wait">
                    {expanded && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-8 pt-8 border-t border-white/10"
                        >
                            <p className="text-xs font-bold tracking-widest text-white/30 uppercase mb-6">
                                Select Operating Semester
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["ODD", "EVEN"].map((sem, index) => (
                                    <motion.button
                                        key={sem}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                        onClick={(e) =>
                                            handleSemesterClick(
                                                e,
                                                sem as "ODD" | "EVEN",
                                            )
                                        }
                                        className="flex items-center justify-between group/btn p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white hover:text-black transition-all"
                                    >
                                        <span className="font-black italic text-xl tracking-tighter">
                                            {sem === "ODD" ? "1st" : "2nd"} SEM.
                                        </span>
                                        <ArrowRight
                                            size={18}
                                            className="opacity-0 group-hover/btn:opacity-100 -translate-x-4 group-hover/btn:translate-x-0 transition-all"
                                        />
                                    </motion.button>
                                ))}
                            </div>

                            {/* Utility Info */}
                            <div className="mt-8 flex gap-4 text-[10px] font-mono text-white/20">
                                <span>STATUS: ARCHIVED_RESOURCES</span>
                                <span>LEVEL: {year}.0</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
