"use client";

import { useState } from "react";
import VaccineDetailsModal from "./VaccineDetailsModal";

export default function VaccinationTimeline() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex-1">
      
      {/* Tabs & Filters */}
      <div className="mb-8 flex flex-col gap-6">
        <div className="flex overflow-x-auto border-b border-slate-200 no-scrollbar">
          <button className="whitespace-nowrap border-b-2 border-primary px-6 py-3 text-sm font-medium text-primary">
            IAP Schedule
          </button>
          <button className="whitespace-nowrap px-6 py-3 text-sm font-medium text-slate-500 hover:text-slate-800">
            Government
          </button>
          <button className="whitespace-nowrap px-6 py-3 text-sm font-medium text-slate-500 hover:text-slate-800">
            ACVIP
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button className="rounded-full bg-primary px-4 py-1.5 text-xs font-normal text-white">All</button>
          <button className="rounded-full bg-slate-100 px-4 py-1.5 text-xs font-normal   text-slate-600 hover:bg-slate-200">Due</button>
          <button className="rounded-full bg-slate-100 px-4 py-1.5 text-xs font-normal text-slate-600 hover:bg-slate-200">Completed</button>
          <button className="rounded-full bg-slate-100 px-4 py-1.5 text-xs font-normal text-slate-600 hover:bg-slate-200">Overdue</button>
        </div>
      </div>

      {/* Timeline List */}
      <div className="relative space-y-12 before:absolute before:bottom-2 before:left-4 before:top-2 before:w-0.5 before:bg-slate-200 md:before:left-6">
        
        {/* Group: At Birth */}
        <div className="relative pl-12 md:pl-16">
          <div className="absolute left-0 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-background-light bg-primary/20 md:h-12 md:w-12">
            <span className="material-symbols-outlined text-lg text-primary">child_care</span>
          </div>
          <h3 className="mb-4 text-lg font-medium text-slate-900">At Birth</h3>
          <div className="grid gap-4">
            
            {/* Completed Card 1 */}
            <div className="flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">vaccines</span>
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <h4 className="font-medium text-slate-900">BCG</h4>
                    <span className="rounded bg-green-100 px-2 py-0.5 text-[10px] font-medium uppercase text-green-700">Completed</span>
                  </div>
                  <p className="text-xs text-slate-500">Tuberculosis Prevention</p>
                  <p className="mt-1 text-xs font-medium text-slate-700">Given on: 12 Oct 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-lg bg-slate-100 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-200">View Details</button>
                <button className="rounded-lg border border-primary px-4 py-2 text-xs font-medium text-primary hover:bg-primary/5">Certificate</button>
              </div>
            </div>

            {/* Completed Card 2 */}
            <div className="flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">vaccines</span>
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <h4 className="font-medium text-slate-900">Hepatitis B - 1</h4>
                    <span className="rounded bg-green-100 px-2 py-0.5 text-[10px] font-medium uppercase text-green-700">Completed</span>
                  </div>
                  <p className="text-xs text-slate-500">Liver Infection Prevention</p>
                  <p className="mt-1 text-xs font-medium text-slate-700">Given on: 12 Oct 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-lg bg-slate-100 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-200">View Details</button>
                <button className="rounded-lg border border-primary px-4 py-2 text-xs font-medium text-primary hover:bg-primary/5">Certificate</button>
              </div>
            </div>
          </div>
        </div>

        {/* Group: 6 Weeks */}
        <div className="relative pl-12 md:pl-16">
          <div className="absolute left-0 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-background-light bg-slate-200 md:h-12 md:w-12">
            <span className="material-symbols-outlined text-lg text-slate-500">face</span>
          </div>
          <h3 className="mb-4 text-lg font-medium text-slate-900">6 Weeks</h3>
          <div className="grid gap-4">
            
            {/* Due Today Card */}
            <div className="flex flex-col justify-between gap-4 rounded-xl border border-slate-200 border-l-4 border-l-amber-500 bg-white p-4 shadow-sm md:flex-row md:items-center">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-500">
                  <span className="material-symbols-outlined">error</span>
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <h4 className="font-medium text-slate-900">Pentavalent - 1</h4>
                    <span className="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-medium uppercase text-amber-700">Due Today</span>
                  </div>
                  <p className="text-xs text-slate-500">DTP, Hep B, Hib</p>
                  <p className="mt-1 text-xs font-medium text-amber-600">Due: 24 Nov 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-white transition-all hover:brightness-110">Mark as Done</button>
                <button className="rounded-lg bg-slate-100 p-2 text-slate-500 hover:bg-slate-200" title="Remind Me">
                  <span className="material-symbols-outlined text-sm">notifications</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Group: 10 Weeks */}
        <div className="relative pl-12 md:pl-16">
          <div className="absolute left-0 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-background-light bg-slate-100 md:h-12 md:w-12">
            <span className="material-symbols-outlined text-lg text-slate-400">calendar_today</span>
          </div>
          <h3 className="mb-4 text-lg font-medium text-slate-900">10 Weeks</h3>
          
          <div className="grid gap-4">
            
            {/* DTaP-2 Card (Triggers Modal) */}
            <div className="flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-primary/30 hover:shadow-md md:flex-row md:items-center">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
                  <span className="material-symbols-outlined">vaccines</span>
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <h4 className="font-medium text-slate-900">DTaP-2</h4>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium uppercase text-slate-500">Scheduled</span>
                  </div>
                  <p className="text-xs text-slate-500">Diphtheria, Tetanus, Pertussis</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">Due: 20 Mar 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="rounded-lg bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  View Details
                </button>
              </div>
            </div>

            {/* Rotavirus Upcoming Card */}
            <div className="flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm opacity-60 md:flex-row md:items-center">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                  <span className="material-symbols-outlined">vaccines</span>
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <h4 className="font-medium text-slate-900">Rotavirus - 2</h4>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium uppercase text-slate-500">Upcoming</span>
                  </div>
                  <p className="text-xs text-slate-500">Prevention against Diarrhea</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">Expected: 22 Dec 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="cursor-not-allowed rounded-lg bg-slate-100 px-4 py-2 text-xs font-medium text-slate-400">Scheduled</button>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Mount the Modal Component */}
      <VaccineDetailsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
    </div>
  );
}