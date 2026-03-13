"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const openModal = (mode: "login" | "register") => {
    setAuthMode(mode);
    setIsModalOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 cursor-pointer">
            
            <Link href="/" className="text-xl font-medium tracking-tight text-[#10b981]">
            Womb<span className="text-[#ec4899]">To</span>
            <span className="text-[var(--brand-pink)]">18</span>
            </Link>
          </div>
          <div>
            <nav className="hidden flex-1 justify-center gap-10 lg:flex">
              {[
                { name: "Milestones", href: "/programs", hoverClass: "hover:text-[var(--brand-blue)]" },
                { name: "Blogs", href: "/blogs", hoverClass: "hover:text-[var(--brand-pink)]" },
                { name: "Benefits", href: "/transparency", hoverClass: "hover:text-[var(--brand-green)]" },
                { name: "Contact Us", href: "/projects", hoverClass: "hover:text-[var(--brand-purple)]" },
                { name: "About", href: "/about", hoverClass: "hover:text-[var(--brand-orange)]" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href || "#"}
                  className={`text-sm font-normal text-slate-600 transition-colors ${item.hoverClass}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            {/* <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="material-symbols-outlined text-lg">language</span>
              <span>English/Hindi</span>
            </div> */}
            
            <div className="flex items-center gap-3">
              <Link href="/login"
                onClick={() => openModal("login")}
                className="hidden sm:block  px-4 py-2 text-sm font-medium text-primary transition hover:bg-primary/5"
              >
                Login
              </Link>
              <Link href="/register"
                onClick={() => openModal("register")}
                className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </header>

      
    </>
  );
}