"use client";
import React, { useState, useRef, useLayoutEffect } from "react";

interface Alumni {
  name: string;
  email: string;
  currentJob: string;
  hometown: string;
  phone: string;
  photo?: string;
  series: number;
}

// Example alumni data
const alumniList: Alumni[] = [
  { name: "Alice Johnson", email: "alice15@university.edu", currentJob: "Process Engineer at ABC Corp", hometown: "Dhaka", phone: "+880123456789", photo: "https://i.pravatar.cc/150?img=1", series: 15 },
  { name: "Bob Smith", email: "bob15@university.edu", currentJob: "Research Scientist at XYZ Labs", hometown: "Chittagong", phone: "+880987654321", photo: "https://i.pravatar.cc/150?img=2", series: 15 },
  { name: "Catherine Lee", email: "catherine15@university.edu", currentJob: "Chemical Analyst at DEF Inc", hometown: "Khulna", phone: "+8801122334455", photo: "https://i.pravatar.cc/150?img=3", series: 15 },
  { name: "David Kim", email: "david15@university.edu", currentJob: "Project Engineer at GHI Ltd", hometown: "Rajshahi", phone: "+8802233445566", photo: "https://i.pravatar.cc/150?img=4", series: 15 },
  { name: "Emily Davis", email: "emily15@university.edu", currentJob: "Production Manager at JKL Corp", hometown: "Sylhet", phone: "+8803344556677", photo: "https://i.pravatar.cc/150?img=5", series: 15 },
  { name: "Frank Brown", email: "frank15@university.edu", currentJob: "Quality Control Engineer at MNO Ltd", hometown: "Barisal", phone: "+8804455667788", photo: "https://i.pravatar.cc/150?img=6", series: 15 },
  { name: "George White", email: "george15@university.edu", currentJob: "Research Associate at PQR Labs", hometown: "Mymensingh", phone: "+8805566778899", photo: "https://i.pravatar.cc/150?img=7", series: 15 },
  { name: "Hannah Green", email: "hannah15@university.edu", currentJob: "Process Engineer at STU Corp", hometown: "Tangail", phone: "+8806677889900", photo: "https://i.pravatar.cc/150?img=8", series: 15 },
  { name: "Ian Black", email: "ian15@university.edu", currentJob: "Assistant Engineer at VWX Ltd", hometown: "Jessore", phone: "+8807788990011", photo: "https://i.pravatar.cc/150?img=9", series: 15 },
  { name: "Julia Brown", email: "julia15@university.edu", currentJob: "Lab Technician at YZA Labs", hometown: "Comilla", phone: "+8808899001122", photo: "https://i.pravatar.cc/150?img=10", series: 15 },
  { name: "Kevin Lee", email: "kevin15@university.edu", currentJob: "Engineer at LMN Ltd", hometown: "Dhaka", phone: "+8809001122334", photo: "https://i.pravatar.cc/150?img=11", series: 15 },
  { name: "Laura Kim", email: "laura15@university.edu", currentJob: "Researcher at OPQ Labs", hometown: "Chittagong", phone: "+8809011223344", photo: "https://i.pravatar.cc/150?img=12", series: 15 },
  { name: "Michael Scott", email: "michael15@university.edu", currentJob: "Process Engineer at RST Corp", hometown: "Khulna", phone: "+8809122334455", photo: "https://i.pravatar.cc/150?img=13", series: 15 },
  { name: "Nina Patel", email: "nina15@university.edu", currentJob: "Quality Analyst at UVW Ltd", hometown: "Rajshahi", phone: "+8809233445566", photo: "https://i.pravatar.cc/150?img=14", series: 15 },
  { name: "Oliver King", email: "oliver15@university.edu", currentJob: "Lab Technician at XYZ Labs", hometown: "Sylhet", phone: "+8809344556677", photo: "https://i.pravatar.cc/150?img=15", series: 15 },
  { name: "Patricia Moore", email: "patricia15@university.edu", currentJob: "Process Engineer at ABC Corp", hometown: "Barisal", phone: "+8809455667788", photo: "https://i.pravatar.cc/150?img=16", series: 15 },
  { name: "Quentin Adams", email: "quentin15@university.edu", currentJob: "Chemical Analyst at DEF Inc", hometown: "Mymensingh", phone: "+8809566778899", photo: "https://i.pravatar.cc/150?img=17", series: 15 },
  { name: "Rachel Clark", email: "rachel15@university.edu", currentJob: "Project Engineer at GHI Ltd", hometown: "Tangail", phone: "+8809677889900", photo: "https://i.pravatar.cc/150?img=18", series: 15 },
  { name: "Samuel Turner", email: "samuel15@university.edu", currentJob: "Research Scientist at JKL Labs", hometown: "Jessore", phone: "+8809788990011", photo: "https://i.pravatar.cc/150?img=19", series: 15 },
  { name: "Tina Lopez", email: "tina15@university.edu", currentJob: "Process Engineer at MNO Corp", hometown: "Comilla", phone: "+8809899001122", photo: "https://i.pravatar.cc/150?img=20", series: 15 },

  { name: "Catherine Lee", email: "catherine16@university.edu", currentJob: "Chemical Analyst at DEF Inc", hometown: "Khulna", phone: "+8801122334455", photo: "https://i.pravatar.cc/150?img=3", series: 16 },
  { name: "David Kim", email: "david16@university.edu", currentJob: "Project Engineer at GHI Ltd", hometown: "Rajshahi", phone: "+8802233445566", photo: "https://i.pravatar.cc/150?img=4", series: 16 },
  { name: "Emily Davis", email: "emily17@university.edu", currentJob: "Production Manager at JKL Corp", hometown: "Sylhet", phone: "+8803344556677", photo: "https://i.pravatar.cc/150?img=5", series: 17 },
  { name: "Frank Brown", email: "frank17@university.edu", currentJob: "Quality Control Engineer at MNO Ltd", hometown: "Barisal", phone: "+8804455667788", photo: "https://i.pravatar.cc/150?img=6", series: 17 },
  { name: "George White", email: "george18@university.edu", currentJob: "Research Associate at PQR Labs", hometown: "Mymensingh", phone: "+8805566778899", photo: "https://i.pravatar.cc/150?img=7", series: 18 },
  { name: "Hannah Green", email: "hannah18@university.edu", currentJob: "Process Engineer at STU Corp", hometown: "Tangail", phone: "+8806677889900", photo: "https://i.pravatar.cc/150?img=8", series: 18 },
  { name: "Ian Black", email: "ian19@university.edu", currentJob: "Assistant Engineer at VWX Ltd", hometown: "Jessore", phone: "+8807788990011", photo: "https://i.pravatar.cc/150?img=9", series: 19 },
  { name: "Julia Brown", email: "julia19@university.edu", currentJob: "Lab Technician at YZA Labs", hometown: "Comilla", phone: "+8808899001122", photo: "https://i.pravatar.cc/150?img=10", series: 19 },
];

const Page = () => {
  const alumniBySeries = alumniList.reduce((acc: Record<number, Alumni[]>, alumnus) => {
    if (!acc[alumnus.series]) acc[alumnus.series] = [];
    acc[alumnus.series].push(alumnus);
    return acc;
  }, {});

  const sortedSeries = Object.keys(alumniBySeries).map(Number).sort((a, b) => a - b);

  const scrollRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [canScrollLeft, setCanScrollLeft] = useState<Record<number, boolean>>({});
  const [canScrollRight, setCanScrollRight] = useState<Record<number, boolean>>({});

  const updateScrollButtons = (series: number) => {
    const container = scrollRefs.current[series];
    if (!container) return;
    setCanScrollLeft((prev) => ({ ...prev, [series]: container.scrollLeft > 0 }));
    setCanScrollRight((prev) => ({
      ...prev,
      [series]: container.scrollLeft + container.clientWidth < container.scrollWidth,
    }));
  };

  const scroll = (series: number, direction: "left" | "right") => {
    const container = scrollRefs.current[series];
    if (!container) return;
    container.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
  };

  useLayoutEffect(() => {
    sortedSeries.forEach((series) => updateScrollButtons(series));
  }, []);

  return (
    <div className="min-h-screen px-6 py-12 text-white">
      <h1 className="text-4xl font-bold text-center mb-12">Alumni</h1>

      {sortedSeries.map((series) => {
        const alumni = alumniBySeries[series];
        const useCarousel = alumni.length >= 5;

        return (
          <div key={series} className="mb-12 relative">
            <h2 className="text-2xl font-semibold mb-6">{series} Series</h2>

            {useCarousel ? (
            <div className="relative">
                {/* Left Button */}
                <button
                onClick={() => scroll(series, "left")}
                disabled={!canScrollLeft[series]}
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 shadow-md z-10 transition ${
                    !canScrollLeft[series] ? "opacity-40 cursor-not-allowed" : ""
                }`}
                >
                &#8592;
                </button>

                {/* Right Button */}
                <button
                onClick={() => scroll(series, "right")}
                disabled={!canScrollRight[series]}
                className={`absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 shadow-md z-10 transition ${
                    !canScrollRight[series] ? "opacity-40 cursor-not-allowed" : ""
                }`}
                >
                &#8594;
                </button>

                {/* Scrollable Alumni Cards */}
                <div
                ref={(el) => { scrollRefs.current[series] = el; }}
                onScroll={() => updateScrollButtons(series)}
                className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
                >
                {alumni.map((alumnus) => (
                    <div
                    key={alumnus.email}
                    className="min-w-[220px] bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg flex-shrink-0 flex flex-col items-center snap-start"
                    >
                    {alumnus.photo && (
                        <img
                        src={alumnus.photo}
                        alt={alumnus.name}
                        className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-white/30"
                        />
                    )}
                    <h3 className="text-xl font-bold mb-2 text-center">{alumnus.name}</h3>
                    <p className="text-sm mb-1 text-center">{alumnus.email}</p>
                    <p className="text-sm mb-1 text-center">Job: {alumnus.currentJob}</p>
                    <p className="text-sm mb-1 text-center">Hometown: {alumnus.hometown}</p>
                    <p className="text-sm text-center">Phone: {alumnus.phone}</p>
                    </div>
                ))}
                </div>
            </div>
            ) : (
            // Grid for series with <5 alumni
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {alumni.map((alumnus) => (
                <div
                    key={alumnus.email}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col items-center"
                >
                    {alumnus.photo && (
                    <img
                        src={alumnus.photo}
                        alt={alumnus.name}
                        className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-white/30"
                    />
                    )}
                    <h3 className="text-xl font-bold mb-2 text-center">{alumnus.name}</h3>
                    <p className="text-sm mb-1 text-center">{alumnus.email}</p>
                    <p className="text-sm mb-1 text-center">Job: {alumnus.currentJob}</p>
                    <p className="text-sm mb-1 text-center">Hometown: {alumnus.hometown}</p>
                    <p className="text-sm text-center">Phone: {alumnus.phone}</p>
                </div>
                ))}
            </div>
            )}

          </div>
        );
      })}

      <style jsx>{`
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
