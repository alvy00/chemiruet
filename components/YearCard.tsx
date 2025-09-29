// components/YearCard.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface YearCardProps {
  year: number;
  expanded: boolean;
  toggleExpand: (year: number) => void;
}

export default function YearCard({ year, expanded, toggleExpand }: YearCardProps) {
  const router = useRouter();

  const semesterVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.4 },
    }),
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  const handleSemesterClick = (semester: "ODD" | "EVEN") => {
    const semesterParam = semester === "ODD" ? 1 : 2;
    router.push(`/${year}-${semesterParam}`);
  };

  return (
    <motion.div
      onClick={() => toggleExpand(year)}
      className="relative glass p-8 rounded-3xl cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl"
    >
      {/* Decorative top label */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-blue-500/30 rounded-full text-sm font-semibold backdrop-blur-md">
        Year {year}
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center mt-5">
        <h2 className="text-2xl font-bold mb-2">
          {expanded ? "Select a Semester" : "Click to Expand"}
        </h2>
        <p className="text-sm opacity-70 text-center">
          {expanded
            ? "Choose a semester to view resources"
            : "Odd & Even semester resources available"}
        </p>
      </div>

      {/* Odd/Even Semesters */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            className=" mt-6"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.div className="grid grid-cols-2 gap-10">
              {["ODD", "EVEN"].map((sem, i) => (
                <motion.div
                  key={sem}
                  className="glass p-2 rounded-xl text-center cursor-pointer hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={semesterVariants}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSemesterClick(sem as "ODD" | "EVEN");
                  }}
                >
                  <h3 className="font-small">{sem}</h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
