"use client";

import React, { useState } from "react";
import Navbar from "../../components/dashboard/Navbar";
import Footer from "../../components/dashboard/Footer";
import Sidebar from "../../components/dashboard/Sidebar";

export default function PageLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F2E0]">
      {/* Navbar fixed */}
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-row flex-1 pt-[88px] transition-all duration-300">
        {/* Sidebar (mulai di bawah navbar) */}
        <Sidebar isOpen={sidebarOpen} />

        {/* Konten halaman utama */}
     <main
        className={`
          transition-all duration-300 block w-full
          ${sidebarOpen ? "ml-64" : "ml-0"}
        `}
      >
        {children}
      </main>
      </div>

      <Footer />
    </div>
  );
}
