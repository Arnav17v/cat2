"use client";
import { useState } from "react";

export default function Product() {
  const [inspectionId, setInspectionId] = useState("");

  const openInNewTab = () => {
    if (inspectionId) {
      const url = `https://pastebin.com/raw/${inspectionId}`;
      window.open(url, "_blank");
    } else {
      alert("Please enter an inspection ID.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          <a href="./">home</a>
        </button>
        <h1 className="text-2xl text-black font-bold text-center mb-4">
          Open Inspection Data
        </h1>

        <input
          type="text"
          className="w-full text-black px-3 py-2 mb-4 border border-gray-300 rounded"
          placeholder="Enter Inspection ID"
          value={inspectionId}
          onChange={(e) => setInspectionId(e.target.value)}
        />

        <button
          onClick={openInNewTab}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Open in New Tab
        </button>
      </div>
    </div>
  );
}
