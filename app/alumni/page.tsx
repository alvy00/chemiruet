"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Briefcase,
    MapPin,
    Phone,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { Alumni } from "../../lib/interfaces";
import { alumniList } from "../../lib/consts";

const AlumniCard = ({ alumnus }: { alumnus: Alumni }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
            y: -10,
            backgroundColor: "rgba(255, 255, 255, 0.08)", // Slightly more visible on hover
            transition: { duration: 0.3 },
        }}
        className="group relative min-w-[300px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
        {/* Animated Gradient Flare on Hover */}
        <div className="absolute -inset-full bg-gradient-to-tr from-blue-500/0 via-white/5 to-blue-500/0 group-hover:left-[100%] duration-[1500ms] transition-all -rotate-45" />

        <div className="flex flex-col items-center text-center mb-6 relative z-10">
            <div className="relative mb-4">
                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                    src={alumnus.photo || "/api/placeholder/150/150"}
                    alt={alumnus.name}
                    className="relative w-24 h-24 rounded-2xl object-cover border border-white/20 shadow-xl"
                />
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                {alumnus.name}
            </h3>
            <p className="text-xs font-bold tracking-widest text-blue-400 uppercase mt-2 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                Series {alumnus.series}
            </p>
        </div>

        <div className="space-y-4 flex-grow relative z-10">
            <div className="flex items-start gap-3 group/item">
                <div className="p-2 bg-white/5 rounded-xl border border-white/5 group-hover/item:border-blue-500/30 transition-colors">
                    <Briefcase size={16} className="text-blue-400" />
                </div>
                <div className="text-left">
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
                        Role
                    </p>
                    <p className="text-sm text-white/80 font-medium leading-tight">
                        {alumnus.currentJob}
                    </p>
                </div>
            </div>

            <div className="flex items-start gap-3 group/item">
                <div className="p-2 bg-white/5 rounded-xl border border-white/5 group-hover/item:border-blue-500/30 transition-colors">
                    <MapPin size={16} className="text-blue-400" />
                </div>
                <div className="text-left">
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
                        Hometown
                    </p>
                    <p className="text-sm text-white/80 font-medium">
                        {alumnus.hometown}
                    </p>
                </div>
            </div>
        </div>

        <div className="mt-8 flex gap-3 relative z-10">
            <a
                href={`mailto:${alumnus.email}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black rounded-2xl text-sm font-bold hover:bg-blue-400 hover:text-white transition-all active:scale-95"
            >
                <Mail size={16} />
                Message
            </a>
            <a
                href={`tel:${alumnus.phone}`}
                className="px-4 flex items-center justify-center bg-white/10 text-white rounded-2xl border border-white/10 hover:bg-white/20 transition-all active:scale-95"
            >
                <Phone size={16} />
            </a>
        </div>
    </motion.div>
);

const Page = () => {
    const alumniBySeries = alumniList.reduce(
        (acc: Record<number, Alumni[]>, alumnus) => {
            if (!acc[alumnus.series]) acc[alumnus.series] = [];
            acc[alumnus.series].push(alumnus);
            return acc;
        },
        {},
    );

    const sortedSeries = Object.keys(alumniBySeries)
        .map(Number)
        .sort((a, b) => b - a);
    const scrollRefs = useRef<Record<number, HTMLDivElement | null>>({});

    const scroll = (series: number, direction: "left" | "right") => {
        const container = scrollRefs.current[series];
        if (container) {
            container.scrollBy({
                left: direction === "left" ? -400 : 400,
                behavior: "smooth",
            });
        }
    };

    return (
        /* Removed bg-[#050505] and radial-gradients to keep it transparent */
        <div className="min-h-screen mt-5 text-white px-4 py-16 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <header className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 italic">
                            ALUMNI<span className="text-blue-500">.</span>
                        </h1>
                        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-6" />
                        <p className="text-white/40 text-lg uppercase tracking-[0.3em] font-light">
                            Network Directory
                        </p>
                    </motion.div>
                </header>

                {sortedSeries.map((series) => (
                    <section key={series} className="mb-28">
                        <div className="flex items-center justify-between mb-10 group/header">
                            <div className="flex items-center gap-6">
                                <h2 className="text-4xl font-black text-white italic tracking-tighter">
                                    {series} Series
                                </h2>
                                <div className="h-px w-32 bg-gradient-to-r from-blue-500 to-transparent" />
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => scroll(series, "left")}
                                    className="p-3 cursor-pointer rounded-full bg-white/5 border border-white/10 hover:bg-blue-500 hover:border-blue-500 transition-all duration-300"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={() => scroll(series, "right")}
                                    className="p-3 cursor-pointer rounded-full bg-white/5 border border-white/10 hover:bg-blue-500 hover:border-blue-500 transition-all duration-300"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                        <div
                            ref={(el): any => (scrollRefs.current[series] = el)}
                            className="flex gap-8 overflow-x-auto pb-12 no-scrollbar scroll-smooth snap-x"
                        >
                            {alumniBySeries[series].map((alumnus) => (
                                <div key={alumnus.email} className="snap-start">
                                    <AlumniCard alumnus={alumnus} />
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default Page;
