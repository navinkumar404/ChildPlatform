"use client";

import { useState } from "react";
import EmergencyModal from "./EmergencyModal";

interface HeaderProps {
  toggleMobile: () => void;
}

export default function DashboardHeader({ toggleMobile }: HeaderProps) {
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-primary/10 bg-white/90 px-4 py-4 backdrop-blur-md sm:px-8">
      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        {/* Mobile Brand Logo */}
        <div className="flex items-center gap-2 lg:hidden">
          
          <h1 className="text-xl font-medium tracking-tight text-slate-900">WombTo18</h1>
        </div>

        {/* Desktop Greeting (Pushed to the far left edge of content area now!) */}
        <div className="hidden lg:block">
          <h2 className="text-xl font-medium text-slate-800 lg:text-2xl">Hello, Aarav! 👋</h2>
          <p className="text-sm text-slate-500">Welcome back to your health portal.</p>
        </div>
      </div>
      
      {/* RIGHT SIDE (Actions & Mobile Hamburger) */}
      <div className="flex items-center gap-3 sm:gap-6">
        <button 
            onClick={() => setIsEmergencyOpen(true)}
            className="flex items-center gap-2 rounded-full bg-red-500 px-3 py-2 font-normal text-white shadow-lg transition-all hover:scale-105 active:scale-95 sm:px-6 sm:py-2.5" 
            style={{ animation: "pulse 2s infinite", boxShadow: "0 0 0 0 rgba(239, 68, 68, 0.7)" }}
          >
            {/* <span className="material-symbols-outlined text-sm sm:text-base">emergency</span> */}
            <span className="hidden text-sm sm:inline">EMERGENCY</span>
          </button>
        
        <button className="relative hidden h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 sm:flex">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-500"></span>
        </button>
        
        <div 
          className="h-9 w-9 shrink-0 rounded-full border border-slate-200 bg-cover bg-center sm:h-10 sm:w-10" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554622965-bfaeff35e57f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        />

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMobile}
          className="flex h-10 w-10 items-center justify-center rounded-full text-slate-800 transition-colors hover:bg-slate-100 lg:hidden"
        >
          <span className="material-symbols-outlined text-3xl">short_text</span>
        </button>
      </div>
    </header>
    <EmergencyModal 
        isOpen={isEmergencyOpen} 
        onClose={() => setIsEmergencyOpen(false)} 
    />
    </>
    
  );
}