import React from "react";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Chemical Engineering – 4 Year Course Outline
      </h1>

      {/* Year 1 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Year 1</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <h3 className="text-xl font-medium mb-2">Odd Semester</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Engineering Mathematics I</li>
              <li>General Chemistry</li>
              <li>Physics for Engineers</li>
              <li>Introduction to Programming</li>
              <li>Communication Skills</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <h3 className="text-xl font-medium mb-2">Even Semester</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Engineering Mathematics II</li>
              <li>Organic Chemistry</li>
              <li>Engineering Mechanics</li>
              <li>Material Science</li>
              <li>Environmental Studies</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Year 2 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Year 2</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <h3 className="text-xl font-medium mb-2">Odd Semester</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Fluid Mechanics I</li>
              <li>Thermodynamics</li>
              <li>Numerical Methods</li>
              <li>Physical Chemistry</li>
              <li>Electrical Technology</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <h3 className="text-xl font-medium mb-2">Even Semester</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Fluid Mechanics II</li>
              <li>Heat Transfer</li>
              <li>Chemical Process Calculations</li>
              <li>Probability & Statistics</li>
              <li>Instrumentation & Control</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Year 3 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Year 3</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <h3 className="text-xl font-medium mb-2">Odd Semester</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Mass Transfer I</li>
              <li>Chemical Reaction Engineering I</li>
              <li>Process Dynamics & Control</li>
              <li>Engineering Economics</li>
              <li>Open Elective I</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <h3 className="text-xl font-medium mb-2">Even Semester</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Mass Transfer II</li>
              <li>Chemical Reaction Engineering II</li>
              <li>Transport Phenomena</li>
              <li>Process Equipment Design</li>
              <li>Open Elective II</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Year 4 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Year 4</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <h3 className="text-xl font-medium mb-2">Odd Semester</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Process Plant Design & Simulation</li>
              <li>Advanced Separation Processes</li>
              <li>Elective I</li>
              <li>Elective II</li>
              <li>Project Phase I</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <h3 className="text-xl font-medium mb-2">Even Semester</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Safety & Environmental Engineering</li>
              <li>Process Integration</li>
              <li>Elective III</li>
              <li>Project Phase II</li>
              <li>Industrial Training / Viva</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
