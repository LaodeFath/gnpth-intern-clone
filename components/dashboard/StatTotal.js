"use client";
import React from "react";

export default function StatTotal() {
  return (
    <div className="mx-[120px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-6">
      {/* Total Letters */}
      <div className="bg-[#2C495D] rounded-md p-4 text-white shadow-md">
        <p className="text-sm font-medium">Total Letters</p>
        <p className="text-2xl font-bold mt-2">33.550</p>
      </div>

      {/* Letters This Month */}
      <div className="bg-[#A7B6A6] rounded-md p-4 text-[#2C495D] shadow-md">
        <p className="text-sm font-medium">Letters This Month</p>
        <p className="text-2xl font-bold mt-2">324</p>
      </div>

      {/* Formal Letters */}
      <div className="bg-[#A7B6A6] rounded-md p-4 text-[#2C495D] shadow-md">
        <p className="text-sm font-medium">Formal Letters</p>
        <p className="text-2xl font-bold mt-2">204</p>
      </div>

      {/* Non-formal Letters */}
      <div className="bg-[#A7B6A6] rounded-md p-4 text-[#2C495D] shadow-md">
        <p className="text-sm font-medium">Non-formal Letters</p>
        <p className="text-2xl font-bold mt-2">120</p>
      </div>

    </div>
  );
}
