// components/YearCard.tsx
"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface YearCardProps {
  year: number;
}

export default function YearCard({ year }: YearCardProps) {
  const router = useRouter();

  const handleSemesterClick = (semester: "ODD" | "EVEN") => {
    const semesterParam = semester === "ODD" ? 1 : 2;
    router.push(`/${year}-${semesterParam}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative glass p-8 rounded-3xl cursor-pointer hover:shadow-2xl transition-transform"
    >
      {/* Decorative top label */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-blue-500/30 rounded-full text-sm font-semibold backdrop-blur-md">
        Year {year}
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center mt-5">
        <h2 className="text-2xl font-bold mb-2">Select a Semester</h2>
        <p className="text-sm opacity-70 text-center">
          Choose a semester to view resources
        </p>
      </div>

      {/* Odd/Even Semesters (always visible) */}
      <div className="mt-6 grid grid-cols-2 gap-10">
        {["ODD", "EVEN"].map((sem) => (
          <motion.div
            key={sem}
            whileHover={{ scale: 1.1 }}
            className="glass p-2 rounded-xl text-center cursor-pointer hover:bg-white/30 transition-colors"
            onClick={() => handleSemesterClick(sem as "ODD" | "EVEN")}
          >
            <h3 className="font-small">{sem}</h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
