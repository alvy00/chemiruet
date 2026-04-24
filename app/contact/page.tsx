"use client";
import React from "react";
import {
    Send,
    Mail,
    MapPin,
    Phone,
    Globe,
    MessageSquare,
    ArrowUpRight,
    Info,
} from "lucide-react";

export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto mt-5 px-6 py-20 bg-transparent text-slate-100 font-sans">
            {/* Header Section */}
            <div className="mb-20">
                <h2 className="text-blue-500 font-mono tracking-[0.4em] uppercase text-xs mb-4">
                    Contact Inquiry
                </h2>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                    Get in <span className="text-blue-500">Touch</span>
                </h1>
                <p className="text-slate-500 mt-4 max-w-xl text-lg">
                    Reach out for research inquiries, industrial partnerships,
                    or general academic support.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* LEFT: Contact Form */}
                <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden group">
                    {/* Section Header */}
                    <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                            Send a Message
                        </h3>
                        <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest flex items-center gap-2">
                            <Info size={12} /> Response time: 24h
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-sm placeholder:text-slate-700"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-sm placeholder:text-slate-700"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                Subject
                            </label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-sm text-slate-400">
                                <option>General Inquiry</option>
                                <option>Research Collaboration</option>
                                <option>Alumni Relations</option>
                                <option>Admissions Support</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                Message
                            </label>
                            <textarea
                                rows={5}
                                placeholder="How can we help you?"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-blue-500/50 transition-all text-sm placeholder:text-slate-700 resize-none"
                            ></textarea>
                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.2)] group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                            SUBMIT MESSAGE <Send size={16} />
                        </button>
                    </form>
                </div>

                {/* RIGHT: Contact Information */}
                <div className="lg:col-span-5 space-y-8">
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            {
                                icon: <Mail className="text-blue-500" />,
                                label: "Email",
                                value: "chemeng@university.edu",
                            },
                            {
                                icon: <Phone className="text-blue-500" />,
                                label: "Phone",
                                value: "+1 (555) 012-3456",
                            },
                            {
                                icon: <MapPin className="text-blue-500" />,
                                label: "Location",
                                value: "Engineering Block C, Floor 4",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group"
                            >
                                <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-blue-500/50 transition-colors">
                                    {item.icon}
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono text-slate-600 uppercase mb-1">
                                        {item.label}
                                    </div>
                                    <div className="text-slate-300 font-medium tracking-tight">
                                        {item.value}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Info Box */}
                    <div className="p-8 rounded-2xl border border-dashed border-white/10 bg-transparent relative group">
                        <ArrowUpRight className="absolute top-4 right-4 text-slate-800 group-hover:text-blue-500 transition-colors" />
                        <h4 className="text-xs font-mono text-slate-500 uppercase mb-4 tracking-[0.2em]">
                            // Office Hours
                        </h4>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">
                                    Monday — Friday
                                </span>
                                <span className="text-slate-300 font-mono">
                                    09:00 - 17:00
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">
                                    Saturday — Sunday
                                </span>
                                <span className="text-blue-500 font-mono">
                                    CLOSED
                                </span>
                            </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-white/5">
                            <p className="text-[11px] text-slate-500 leading-relaxed italic">
                                *Support response times may vary during public
                                holidays. For emergency industrial
                                consultations, please use our primary phone
                                line.
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-between items-center px-4">
                        <div className="flex gap-6">
                            <Globe
                                size={18}
                                className="text-slate-600 hover:text-blue-400 cursor-pointer transition-colors"
                            />
                            <MessageSquare
                                size={18}
                                className="text-slate-600 hover:text-blue-400 cursor-pointer transition-colors"
                            />
                        </div>
                        <div className="text-[10px] font-mono text-slate-700 uppercase tracking-widest">
                            Department Online
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
