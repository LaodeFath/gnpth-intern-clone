"use client";

import { FaUserNinja } from "react-icons/fa";
import { useRouter } from "next/navigation"; // ⬅ Import router

const letters = [
  { id: 1, title: "Title 1", purpose: "Surat Tugas", type: "Internal", date: "2025-07-25", avatar: "/images/Tartaglia.png" },
  { id: 2, title: "Title 2", purpose: "Undangan", type: "Eksternal", date: "2025-07-20", avatar: "/images/kafka.png" },
  { id: 3, title: "Title 3", purpose: "Pemberitahuan", type: "Internal", date: "2025-07-18", avatar: "/images/full.png" },
];

export default function RecentLetters() {
  const router = useRouter(); // ⬅ Bikin instance router

  return (
    <div className="grid grid-cols-12 mt-7">
      <div className="col-span-12 md:col-start-1 md:col-span-12 bg-[#CED4C1] rounded-xl overflow-hidden shadow-md flex flex-col h-full">
        <div className="bg-[#4C6A6D] text-white px-4 py-3 font-semibold flex items-center gap-2 text-sm md:text-base">
          <FaUserNinja size={18} />
          <span>Recent Letters</span>
        </div>

        <div className="px-4 py-3 flex flex-col gap-3 flex-1 justify-between">
          <div className="space-y-3">
            {letters.map((letter) => (
              <div key={letter.id} className="flex items-center justify-between border-b pb-2 text-sm text-[#0D7B84]">
                <div className="flex items-center gap-3">
                  <img
                    src={letter.avatar}
                    alt="user avatar"
                    className="w-6 h-6 rounded-full object-cover border border-gray-400"
                  />
                  <span className="text-xs md:text-sm truncate max-w-[250px]">
                    {letter.title} - {letter.purpose} - {letter.type} - {letter.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-right mt-4">
            <button
              onClick={() => router.push("/dashboard-test/tabel")} // ⬅ Routing ke halaman tujuan
              className="text-[#007C98] text-xs px-4 py-1 rounded-md hover:bg-[#d2dbc8] transition"
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
