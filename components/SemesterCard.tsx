import Link from "next/link";

export default function SemesterCard({ year, term }: { year: number; term: number }) {
  return (
    <Link href={`/${year}-${term}`} className="glass p-6 rounded-2xl hover:scale-105 transition-transform">
      <h2 className="text-lg font-semibold">Year {year} – Semester {term}</h2>
      <p className="opacity-70">Click to view courses</p>
    </Link>
  );
}
