import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-lg bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-10 border border-gray-200">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg mb-6">
          We’re setting up our contact system to serve you better.
        </p>
        <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full shadow-md">
          <span className="animate-pulse w-2 h-2 bg-white rounded-full"></span>
          <span className="font-medium">This page will be live soon</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
