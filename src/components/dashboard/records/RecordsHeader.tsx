"use client";

import { useState } from "react";
import UploadRecordModal from "./UploadRecordModal";

export default function RecordsHeader() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mb-6 flex flex-col gap-6">
      {/* Top Row: Title & Action */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-3xl font-medium tracking-tight text-slate-900">Health Records</h2>
        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 font-normal text-white shadow-sm transition-all hover:bg-primary/90">
          <span className="material-symbols-outlined text-[20px]">cloud_upload</span>
          Upload Record
        </button>
      </div>

      {/* Bottom Row: Search & Filters */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative min-w-[300px] flex-1">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input 
            className="w-full rounded-lg border-none bg-white p-3 pl-10 pr-4 text-sm text-slate-900 shadow-sm outline-none ring-1 ring-slate-200 transition-shadow placeholder:text-slate-500 focus:ring-2 focus:ring-primary/50" 
            placeholder="Search records by name..." 
            type="text" 
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition-colors hover:bg-slate-50">
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            Date Range
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition-colors hover:bg-slate-50">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            File Type
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
          </button>
        </div>
      </div>
      {/* Mount the Modal Component */}
      <UploadRecordModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}