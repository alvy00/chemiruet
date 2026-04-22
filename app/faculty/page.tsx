"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, UserCheck, UserMinus, GraduationCap } from "lucide-react";
import { FacultyMember } from "../../lib/interfaces";
import { facultyData } from "../../lib/consts";

const FacultyCard = ({ member }: { member: FacultyMember }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
            y: -10,
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            transition: { duration: 0.3 },
        }}
        className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
        {/* Animated Gradient Flare */}
        <div className="absolute -inset-full bg-gradient-to-tr from-blue-500/0 via-white/5 to-blue-500/0 group-hover:left-[100%] duration-[1500ms] transition-all -rotate-45" />

        <div className="flex flex-col items-center text-center mb-6 relative z-10">
            <div className="relative mb-4">
                <div
                    className={`absolute inset-0 ${member.onLeave ? "bg-red-500/20" : "bg-blue-500/20"} blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                <img
                    src={member.photo}
                    alt={member.name}
                    className="relative w-24 h-24 rounded-2xl object-cover border border-white/20 shadow-xl"
                />
                <div
                    className={`absolute -bottom-2 -right-2 p-1.5 rounded-lg border border-white/10 backdrop-blur-md shadow-lg ${member.onLeave ? "bg-red-500/80" : "bg-green-500/80"}`}
                >
                    {member.onLeave ? (
                        <UserMinus size={14} className="text-white" />
                    ) : (
                        <UserCheck size={14} className="text-white" />
                    )}
                </div>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors leading-tight">
                {member.name}
            </h3>
            <p className="text-[10px] font-bold tracking-widest text-blue-400 uppercase mt-2 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                {member.designation}
            </p>
        </div>

        <div className="space-y-4 flex-grow relative z-10">
            <div className="flex items-start gap-3 group/item">
                <div className="p-2 bg-white/5 rounded-xl border border-white/5 group-hover/item:border-blue-500/30 transition-colors">
                    <GraduationCap size={16} className="text-blue-400" />
                </div>
                <div className="text-left">
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
                        Status
                    </p>
                    <p
                        className={`text-sm font-medium ${member.onLeave ? "text-red-400" : "text-green-400"}`}
                    >
                        {member.onLeave
                            ? "Currently on Leave"
                            : "Available on Campus"}
                    </p>
                </div>
            </div>
        </div>

        <div className="mt-8 relative z-10">
            <a
                href={`mailto:${member.email}`}
                className="w-full flex items-center justify-center gap-2 py-3 bg-white text-black rounded-2xl text-sm font-bold hover:bg-blue-400 hover:text-white transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
                <Mail size={16} />
                Contact Faculty
            </a>
        </div>
    </motion.div>
);

const Page = () => {
    return (
        <div className="min-h-screen mt-5 text-white px-4 py-16 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <header className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 italic uppercase">
                            FACULTY<span className="text-blue-500">.</span>
                        </h1>
                        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-6" />
                        <p className="text-white/40 text-lg uppercase tracking-[0.3em] font-light">
                            Academic Leadership
                        </p>
                    </motion.div>
                </header>

                {Object.entries(facultyData).map(([role, members]) => (
                    <section key={role} className="mb-28">
                        <div className="flex items-center gap-6 mb-10">
                            <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase">
                                {role}
                            </h2>
                            <div className="h-px flex-grow bg-gradient-to-r from-blue-500/50 to-transparent" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {members.map((member) => (
                                <FacultyCard
                                    key={member.email}
                                    member={member}
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Page;
