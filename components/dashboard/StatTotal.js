"use client";
import React from "react";

export default function StatTotal() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mx-[120px] mb-6">
      {/* Total Letters */}
      <div className="bg-[#2C495D] rounded-md p-4 text-white shadow-md w-52">
        <p className="text-sm font-medium">Total Letters</p>
        <p className="text-2xl font-bold text-right mt-2">33.550</p>
      </div>

      {/* Letters This Month */}
      <div className="bg-[#A7B6A6] rounded-md p-4 text-[#2C495D] shadow-md w-52">
        <p className="text-sm font-medium">Letters This Month</p>
        <p className="text-2xl font-bold text-right mt-2">324</p>
      </div>

      {/* Formal Letters */}
      <div className="bg-[#A7B6A6] rounded-md p-4 text-[#2C495D] shadow-md w-52">
        <p className="text-sm font-medium">Formal Letters</p>
        <p className="text-2xl font-bold text-right mt-2">204</p>
      </div>

      {/* Non-formal Letters */}
      <div className="bg-[#A7B6A6] rounded-md p-4 text-[#2C495D] shadow-md w-52">
        <p className="text-sm font-medium">Non-formal Letters</p>
        <p className="text-2xl font-bold text-right mt-2">120</p>
      </div>
    </div>
  );
}
