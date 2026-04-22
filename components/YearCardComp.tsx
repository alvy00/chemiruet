"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
    Layers,
    ArrowRight,
    Zap,
    Microscope,
    ChevronRight,
} from "lucide-react";

interface YearCardProps {
    year: number;
    expanded: boolean;
    toggleExpand: (year: number) => void;
}

export default function YearCardComp({
    year,
    expanded,
    toggleExpand,
}: YearCardProps) {
    const router = useRouter();

    const yearDetails: Record<number, { focus: string; icon: any }> = {
        1: { focus: "Foundational Sciences & Math", icon: <Zap size={18} /> },
        2: {
            focus: "Thermodynamics & Heat Transfer",
            icon: <Layers size={18} />,
        },
        3: {
            focus: "Unit Operations & Kinetics",
            icon: <Microscope size={18} />,
        },
        4: {
            focus: "Plant Design & Thesis Project",
            icon: <ArrowRight size={18} />,
        },
    };

    const handleSemesterClick = (e: React.MouseEvent, semester: number) => {
        e.stopPropagation(); // Prevents card from closing when clicking buttons
        router.push(`/outline/${year}-${semester}`);
    };

    return (
        <motion.div
            layout
            onClick={() => toggleExpand(year)}
            className={`relative overflow-hidden transition-all duration-500 border rounded-[2rem] p-6 sm:p-8 cursor-pointer flex flex-col justify-between ${
                expanded
                    ? "bg-white/[0.04] border-white/30 shadow-[0_30px_60px_rgba(0,0,0,0.5)] lg:col-span-2"
                    : "bg-white/[0.01] border-white/5 hover:border-white/20"
            }`}
        >
            {/* Background Watermark */}
            <div className="absolute -right-2 -bottom-6 text-[10rem] font-black text-white/[0.02] italic select-none pointer-events-none group-hover:text-white/[0.04] transition-colors">
                {year}
            </div>

            <div className="relative z-10">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">
                            Module {year}.0
                        </span>
                        <h2 className="text-3xl font-black italic text-white tracking-tighter mt-1">
                            YEAR {year}
                        </h2>
                    </div>
                    <div
                        className={`p-3 rounded-xl transition-all duration-500 ${
                            expanded
                                ? "bg-white text-black shadow-lg"
                                : "bg-white/5 text-white/40"
                        }`}
                    >
                        {yearDetails[year]?.icon}
                    </div>
                </div>

                {!expanded && (
                    <p className="text-white/40 text-xs font-light mt-4 leading-relaxed max-w-[180px]">
                        {yearDetails[year]?.focus}
                    </p>
                )}

                <AnimatePresence mode="wait">
                    {expanded && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-8 pt-8 border-t border-white/10"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[1, 2].map((sem) => (
                                    <motion.button
                                        key={sem}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: sem * 0.1 }}
                                        onClick={(e) =>
                                            handleSemesterClick(e, sem)
                                        }
                                        className="group/btn flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white transition-all"
                                    >
                                        <div className="flex flex-col items-start">
                                            <span className="text-[9px] font-bold text-white/30 group-hover/btn:text-black/40 uppercase tracking-widest">
                                                Select
                                            </span>
                                            <span className="font-black italic text-lg tracking-tighter text-white group-hover/btn:text-black">
                                                SEM {sem === 1 ? "I" : "II"}
                                            </span>
                                        </div>
                                        <ChevronRight className="text-white/20 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all" />
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Footer hint */}
            {!expanded && (
                <div className="mt-8 flex items-center gap-2 text-[9px] font-bold text-white/20 uppercase tracking-widest">
                    <span>Expand for Semesters</span>
                    <div className="h-[1px] flex-1 bg-white/5" />
                </div>
            )}
        </motion.div>
    );
}
