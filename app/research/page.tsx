"use client";
import React from "react";
import {
    FlaskConical,
    ExternalLink,
    Users,
    Calendar,
    Layers,
    FileText,
    Search,
    Tag,
} from "lucide-react";

// Mock Data for Research Publications
const researchPapers = [
    {
        id: "CH-2025-001",
        title: "Synthesizing Nanoporous Carbon Membranes for High-Efficiency Desalination",
        abstract:
            "This study explores the application of MOF-derived carbon structures in reverse osmosis, achieving a 40% increase in flux compared to commercial membranes.",
        authors: [
            "Dr. Sarah Chen ('18)",
            "Michael Okoro ('22)",
            "Prof. R. Vance",
        ],
        publishedIn: "Journal of Membrane Science",
        date: "March 2025",
        tags: ["Membrane Tech", "Water Treatment"],
        link: "https://doi.org/example-1",
        status: "Published",
    },
    {
        id: "CH-2024-042",
        title: "Optimizing Bio-Ethanol Yield via Thermophilic Enzyme Immobilization",
        abstract:
            "Research into increasing the thermal stability of cellulase through silica encapsulation for industrial-scale fermentation optimization.",
        authors: ["Alvin T. Wright ('20)", "Jessica Huang ('21)"],
        publishedIn: "Bioprocess Engineering",
        date: "November 2024",
        tags: ["Bio-Chemical", "Enzyme Kinetics"],
        link: "https://doi.org/example-2",
        status: "Peer Reviewed",
    },
    {
        id: "CH-2024-015",
        title: "Computational Fluid Dynamics of Non-Newtonian Flows in Helical Heat Exchangers",
        abstract:
            "Simulating heat transfer coefficients for high-viscosity polymer melts using OpenFOAM and custom turbulence models.",
        authors: ["David Miller ('19)", "Li Wei ('23)"],
        publishedIn: "Chemical Engineering Journal",
        date: "May 2024",
        tags: ["CFD", "Heat Transfer"],
        link: "https://doi.org/example-3",
        status: "Published",
    },
];

export default function Research() {
    return (
        <div className="max-w-7xl mx-auto mt-5 px-6 py-20 bg-transparent text-slate-100 font-sans">
            {/* Header - Matching Course Outline Style */}
            <div className="mb-20">
                <h2 className="text-blue-500 font-mono tracking-[0.4em] uppercase text-xs mb-4">
                    Laboratory Archives
                </h2>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                            Research <span className="text-blue-500">&</span>{" "}
                            Papers
                        </h1>
                        <p className="text-slate-500 mt-4 max-w-xl text-lg">
                            Peer-reviewed contributions and industrial case
                            studies authored by our alumni and faculty.
                        </p>
                    </div>

                    {/* Stats Bar (Filler for Blueprint look) */}
                    <div className="flex gap-8 border-l border-white/10 pl-8">
                        <div>
                            <div className="text-xs font-mono text-slate-600 uppercase">
                                Total_Citations
                            </div>
                            <div className="text-2xl font-bold text-blue-400">
                                1.2k+
                            </div>
                        </div>
                        <div>
                            <div className="text-xs font-mono text-slate-600 uppercase">
                                Active_Projects
                            </div>
                            <div className="text-2xl font-bold text-blue-400">
                                14
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search & Filter Bar (Visual Mockup) */}
            <div className="mb-12 flex flex-wrap gap-4 items-center p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-lg border border-white/10 flex-1 min-w-[250px]">
                    <Search size={18} className="text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search by keyword, author, or year..."
                        className="bg-transparent border-none outline-none text-sm w-full placeholder:text-slate-600"
                    />
                </div>
                <div className="flex gap-2">
                    {["All", "Membranes", "Kinetics", "CFD"].map((f) => (
                        <button
                            key={f}
                            className="px-4 py-2 text-xs font-mono rounded-lg border border-white/10 hover:bg-blue-600 transition-colors"
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Research Grid */}
            <div className="grid grid-cols-1 gap-8">
                {researchPapers.map((paper) => (
                    <div
                        key={paper.id}
                        className="group relative flex flex-col lg:flex-row gap-8 p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.04] hover:border-blue-500/40 transition-all duration-500"
                    >
                        {/* ID Tag (Left/Vertical on Large Screen) */}
                        <div className="hidden lg:flex flex-col justify-between border-r border-white/10 pr-8">
                            <span className="font-mono text-xs text-blue-500 rotate-180 [writing-mode:vertical-lr]">
                                REF_{paper.id}
                            </span>
                            <FlaskConical className="text-slate-700 group-hover:text-blue-500 transition-colors" />
                        </div>

                        {/* Main Content */}
                        <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="text-[10px] font-mono px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                    {paper.status}
                                </span>
                                <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                                    <Calendar size={14} /> {paper.date}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                                {paper.title}
                            </h3>

                            <p className="text-slate-400 text-sm mb-6 leading-relaxed max-w-4xl">
                                {paper.abstract}
                            </p>

                            <div className="flex flex-wrap gap-6 items-center text-sm">
                                <div className="flex items-center gap-2 text-slate-300">
                                    <Users
                                        size={16}
                                        className="text-blue-500"
                                    />
                                    <span className="font-medium">
                                        {paper.authors.join(", ")}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-500 italic">
                                    <Layers size={16} />
                                    {paper.publishedIn}
                                </div>
                            </div>
                        </div>

                        {/* Actions / Filler Stats */}
                        <div className="flex flex-row lg:flex-col justify-between items-end lg:pl-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0">
                            <div className="flex flex-col items-end">
                                <div className="text-[10px] font-mono text-slate-600 uppercase mb-1">
                                    Impact_Factor
                                </div>
                                <div className="text-xl font-bold text-slate-300">
                                    4.82
                                </div>
                            </div>

                            <a
                                href={paper.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-bold text-xs transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                            >
                                ACCESS PAPER <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Filler for Blueprint depth */}
            <div className="mt-20 border-t border-dashed border-white/10 pt-10 flex justify-between items-center opacity-40">
                <div className="font-mono text-[10px] text-slate-500 tracking-widest">
                    SYSTEM_STATUS: ALL_ARCHIVES_LOADED
                </div>
                <div className="flex gap-4">
                    <FileText size={20} />
                    <Tag size={20} />
                </div>
            </div>
        </div>
    );
}
