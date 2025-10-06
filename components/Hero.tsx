"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-6 py-16
       overflow-hidden"
    >
      {/* Subtle background noise texture overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      {/* Glassmorphism Hero Container */}
      <motion.div
        className="relative z-10 bg-white/2 backdrop-blur-xl rounded-3xl p-10 max-w-4xl text-center 
        flex flex-col items-center justify-center shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Department of Chemical Engineering
        </h1>
        <p className="text-lg md:text-2xl text-white/80 mb-6 max-w-3xl">
          Discover course resources, faculty insights, and exciting research projects across all semesters.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="/outline"
            className="px-6 py-3 bg-white/30 text-white font-semibold rounded-full shadow-lg 
            hover:bg-white/40 hover:scale-105 transition"
          >
            View Course Outline
          </Link>
          <Link
            href="/faculty"
            className="px-6 py-3 border border-white/30 text-white font-semibold rounded-full shadow-lg 
            hover:bg-white/20 transition"
          >
            Meet Our Faculty
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
