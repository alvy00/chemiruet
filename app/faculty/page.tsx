import React from "react";

interface FacultyMember {
  name: string;
  designation: string;
  email: string;
  onLeave: boolean;
  photo: string;
}

// Mock faculty data
const facultyData: { [key: string]: FacultyMember[] } = {
  "Department Head": [
    { name: "Dr. Alice Johnson", designation: "Department Head", email: "alice@university.edu", onLeave: false, photo: "https://i.pravatar.cc/150?img=1" },
  ],
  "Professor": [
    { name: "Dr. Brian Smith", designation: "Professor", email: "brian@university.edu", onLeave: true, photo: "https://i.pravatar.cc/150?img=2" },
    { name: "Dr. Catherine Lee", designation: "Professor", email: "catherine@university.edu", onLeave: false, photo: "https://i.pravatar.cc/150?img=3" },
  ],
  "Associate Professor": [
    { name: "Dr. David Kim", designation: "Associate Professor", email: "david@university.edu", onLeave: false, photo: "https://i.pravatar.cc/150?img=4" },
  ],
  "Assistant Professor": [
    { name: "Dr. Emily Davis", designation: "Assistant Professor", email: "emily@university.edu", onLeave: true, photo: "https://i.pravatar.cc/150?img=5" },
    { name: "Dr. Frank Brown", designation: "Assistant Professor", email: "frank@university.edu", onLeave: false, photo: "https://i.pravatar.cc/150?img=6" },
  ],
  "Lecturer": [
    { name: "Mr. George White", designation: "Lecturer", email: "george@university.edu", onLeave: false, photo: "https://i.pravatar.cc/150?img=7" },
    { name: "Ms. Hannah Green", designation: "Lecturer", email: "hannah@university.edu", onLeave: false, photo: "https://i.pravatar.cc/150?img=8" },
  ],
};

const Page = () => {
  return (
    <div className="min-h-screen px-6 py-12 text-white">
      <h1 className="text-4xl font-bold text-center mb-12">Faculty Members</h1>

      {Object.entries(facultyData).map(([role, members]) => (
        <div key={role} className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">{role}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {members.map((member) => (
              <div
                key={member.email}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-white/30"
                />
                <h3 className="text-xl font-bold mb-1 text-center">{member.name}</h3>
                <p className="text-sm mb-1 text-center">{member.designation}</p>
                <p className="text-sm mb-2 text-center">{member.email}</p>
                <p
                  className={`font-semibold ${
                    member.onLeave ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {member.onLeave ? "On Leave" : "Available"}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
