"use client";
import React, { useState, useEffect } from "react";
import {
    Beaker,
    Settings,
    Zap,
    Factory,
    ChevronRight,
    Binary,
    Microscope,
    Cpu,
    ShieldCheck,
} from "lucide-react";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 1200,
    });

    useEffect(() => {
        if (typeof window === "undefined") return;
        const handleResize = () => setWindowSize({ width: window.innerWidth });
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

const curriculum = [
    {
        year: "Year 1",
        subtitle: "Engineering Foundations",
        icon: <Beaker className="w-5 h-5 text-blue-400" />,
        stats: { credits: 42, focus: "Basic Sciences", labs: 4 },
        description:
            "Focus on the transition from high school science to rigorous engineering principles, emphasizing calculus and molecular physics.",
        semesters: {
            odd: [
                "Engineering Mathematics I",
                "General Chemistry",
                "Physics for Engineers",
                "Intro to Programming",
                "Comm. Skills",
            ],
            even: [
                "Engineering Mathematics II",
                "Organic Chemistry",
                "Engineering Mechanics",
                "Material Science",
                "Environmental Studies",
            ],
        },
    },
    {
        year: "Year 2",
        subtitle: "Core Principles",
        icon: <Zap className="w-5 h-5 text-yellow-400" />,
        stats: { credits: 45, focus: "Fluid Dynamics", labs: 6 },
        description:
            "Introduction to the thermodynamic laws and fluid behavior that govern every chemical plant on the planet.",
        semesters: {
            odd: [
                "Fluid Mechanics I",
                "Thermodynamics",
                "Numerical Methods",
                "Physical Chemistry",
                "Electrical Tech",
            ],
            even: [
                "Fluid Mechanics II",
                "Heat Transfer",
                "Chemical Process Calc.",
                "Prob & Stats",
                "Instrum. & Control",
            ],
        },
    },
    {
        year: "Year 3",
        subtitle: "Unit Operations",
        icon: <Settings className="w-5 h-5 text-purple-400" />,
        stats: { credits: 40, focus: "Mass Transfer", labs: 8 },
        description:
            "Analysis of separation processes and reactor design. Students begin handling complex process simulations and kinetics.",
        semesters: {
            odd: [
                "Mass Transfer I",
                "Reaction Engineering I",
                "Process Dynamics",
                "Eng. Economics",
                "Open Elective I",
            ],
            even: [
                "Mass Transfer II",
                "Reaction Engineering II",
                "Transport Phenomena",
                "Equipment Design",
                "Open Elective II",
            ],
        },
    },
    {
        year: "Year 4",
        subtitle: "Plant Design & Systems",
        icon: <Factory className="w-5 h-5 text-green-400" />,
        stats: { credits: 38, focus: "Industrial Capstone", labs: 2 },
        description:
            "Final transition to professional practice, culminating in a full-scale plant design project and safety integration.",
        semesters: {
            odd: [
                "Plant Design & Sim",
                "Advanced Separation",
                "Spec. Elective I",
                "Spec. Elective II",
                "Capstone Phase I",
            ],
            even: [
                "Safety & Env. Eng",
                "Process Integration",
                "Spec. Elective III",
                "Capstone Phase II",
                "Industrial Viva",
            ],
        },
    },
];

export default function CourseOutline() {
    const { width } = useWindowSize();
    const isMobile = width < 1024; // Switched to 1024 for cleaner large-screen bento feel

    return (
        <div className="max-w-7xl mx-auto mt-5 px-6 py-20 bg-transparent text-slate-100 font-sans">
            <div className="mb-24 text-center">
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
                    ChE{" "}
                    <span className="text-blue-500 underline underline-offset-8">
                        Curriculum
                    </span>
                </h1>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
                    A multi-layered roadmap designed for deep specialization in
                    process engineering.
                </p>
            </div>

            <div className="relative">
                {/* Timeline Axis */}
                <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 lg:-translate-x-1/2"></div>

                {curriculum.map((item, idx) => {
                    const isEven = idx % 2 === 0;

                    return (
                        <div key={idx} className="relative mb-32 last:mb-0">
                            {/* Central Node */}
                            <div className="absolute left-6 lg:left-1/2 top-0 -translate-x-1/2 w-4 h-4 bg-slate-950 border border-blue-500 rounded-full z-10 shadow-[0_0_15px_#3b82f6]"></div>

                            <div
                                className={`flex flex-col lg:flex-row gap-12 items-start justify-between`}
                            >
                                {/* CONTENT SIDE */}
                                <div
                                    className={`w-full lg:w-[45%] ${isEven ? "lg:order-1" : "lg:order-2 ml-auto"}`}
                                >
                                    <div
                                        className={`flex items-center gap-3 mb-4 ${isEven ? "lg:flex-row" : "lg:flex-row"}`}
                                    >
                                        <span className="bg-blue-600 px-3 py-1 rounded text-xs font-bold font-mono uppercase tracking-widest">
                                            {item.year}
                                        </span>
                                        <h3 className="text-2xl font-bold tracking-tight">
                                            {item.subtitle}
                                        </h3>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            {
                                                title: "Term 01",
                                                data: item.semesters.odd,
                                            },
                                            {
                                                title: "Term 02",
                                                data: item.semesters.even,
                                            },
                                        ].map((sem, sIdx) => (
                                            <div
                                                key={sIdx}
                                                className="p-5 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm group hover:border-blue-500/40 transition-all"
                                            >
                                                <h4 className="text-[10px] font-mono text-blue-500 uppercase mb-3 tracking-widest">
                                                    {sem.title}
                                                </h4>
                                                <ul className="space-y-2">
                                                    {sem.data.map(
                                                        (course, cIdx) => (
                                                            <li
                                                                key={cIdx}
                                                                className="text-sm text-slate-400 flex items-center gap-2 group-hover:text-white transition-colors"
                                                            >
                                                                <div className="w-1 h-1 bg-blue-500 rounded-full" />
                                                                {course}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* FILLER / INFO SIDE */}
                                <div
                                    className={`hidden lg:flex w-[45%] flex-col gap-6 ${isEven ? "order-2" : "order-1 text-right items-end"}`}
                                >
                                    <div className="p-6 rounded-2xl border border-dashed border-white/10 bg-transparent">
                                        <h4 className="text-xs font-mono text-slate-500 uppercase mb-4 tracking-[0.2em]">
                                            // Course_Objective
                                        </h4>
                                        <p className="text-slate-400 text-sm leading-relaxed italic">
                                            "{item.description}"
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 w-full">
                                        {Object.entries(item.stats).map(
                                            ([key, val], i) => (
                                                <div
                                                    key={i}
                                                    className="text-center p-3 rounded-lg border border-white/5 bg-white/[0.01]"
                                                >
                                                    <div className="text-[10px] text-slate-600 uppercase font-mono mb-1">
                                                        {key}
                                                    </div>
                                                    <div className="text-lg font-bold text-blue-400">
                                                        {val}
                                                    </div>
                                                </div>
                                            ),
                                        )}
                                    </div>

                                    {/* Tech Icon Overlay for filler */}
                                    <div className="mt-4 flex gap-4 opacity-20 hover:opacity-50 transition-opacity">
                                        <Binary size={32} />
                                        <Microscope size={32} />
                                        <Cpu size={32} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
