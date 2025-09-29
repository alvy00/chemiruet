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
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <div className="min-h-screen p-8 text-white overflow-hidden">
      <Hero />

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
  );
}
