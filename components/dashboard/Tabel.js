import React from "react";
import { Plus, Pin, Trash2 } from "lucide-react";

export default function Tabel() {
  return (
    <div className="flex justify-center">
      <div className="w-[90%] max-w-[1200px] bg-[#8CA79D] rounded-2xl overflow-hidden shadow-md">
        {/* Baris Ikon Atas */}
        <div className="bg-[#4D6D74] flex items-center justify-between px-4 py-3">
          <button className="text-white hover:text-[#e5e5e5]">
            <Plus size={18} />
          </button>
          <div className="flex gap-3">
            <button className="text-white hover:text-[#e5e5e5]">
              <Pin size={18} />
            </button>
            <button className="text-white hover:text-[#e5e5e5]">
              <Trash2 size={18} />
            </button>
          </div>
        </div>

        {/* Header Kolom */}
        <div className="bg-[#4D6D74] grid grid-cols-[repeat(7,_1fr)] items-center px-4 py-3 text-white text-sm font-semibold">
          <div className="text-center">Title</div>
          <div className="text-center">Type</div>
          <div className="text-center">Category</div>
          <div className="text-center">Sender</div>
          <div className="text-center">Ref. Number</div>
          <div className="text-center">Date</div>
          <div className="text-center">File</div>
        </div>

        {/* Rows */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`grid grid-cols-[40px_repeat(7,_1fr)] items-center px-4 py-2 text-sm border-t border-[#6f9089] ${
              i % 2 === 0 ? "bg-[#A3BFB7]" : "bg-[#9EB4AC]"
            }`}
          >
            <input type="checkbox" className="accent-[#4D6D74] checked:bg-[#4D6D74] hover:scale-105 transition" />
            <div className="text-center text-white">Title</div>
            <div className="text-center text-white">Type</div>
            <div className="text-center text-white">Formal</div>
            <div className="text-center text-white">Sender</div>
            <div className="text-center text-white">xxx/xxx/xxx/202x</div>
            <div className="text-center text-white">xxx/xxx/xxx/202x</div>
            <div className="text-center text-blue-200 underline cursor-pointer">
              View
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
