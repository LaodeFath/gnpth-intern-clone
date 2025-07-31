import React from "react";

export default function QuickActions1() {
  return (
    <div className="col-span-12 mt-6">
      <h2 className="text-[#6D8C88] text-2xl font-semibold mb-2">Quick Actions</h2>
      <hr className="border-[#aaa] mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1*/}
        <button
          className="bg-[#97AEA1] text-[#496A71] p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-between text-left"
          onClick={() => alert("Add new letter clicked!")}
        >
          <div>
            <h3 className="text-lg font-bold mb-1">Add new letter</h3>
            <p className="text-sm text-[#496A71]">
              Automatically generate number for new letter data entry
            </p>
          </div>
          <div className="mt-4 self-end">
            <img src="/images/upload.png" alt="Add Icon" className="w-6 h-6" />
          </div>
        </button>

        {/* Card 2 */}
        <button
          className="bg-[#97AEA1] text-[#496A71] p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-between text-left"
          onClick={() => alert("Export data clicked!")}
        >
          <div>
            <h3 className="text-lg font-bold mb-1">Export recent data</h3>
            <p className="text-sm text-[#496A71]">
              Export newly added letters in a downloadable file format.
            </p>
          </div>
          <div className="mt-4 self-end">
            <img src="/images/downlaod.png" alt="Export Icon" className="w-7 h-7" />
          </div>
        </button>
      </div>
    </div>
  );
}
