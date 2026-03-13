"use client";

import { useState } from "react";

interface Step1Props {
  onNext: () => void;
}

export default function Step1Form({ onNext }: Step1Props) {
  const [selectedGender, setSelectedGender] = useState<"male" | "female" | "other" | null>("male");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(); 
  };

  return (
    <form className="space-y-8 p-6 md:p-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="flex items-center justify-between text-sm font-medium text-slate-700">
            Mother's Name *
            <span className="material-symbols-outlined cursor-help text-base text-slate-400">info</span>
          </label>
          <input className="h-12 w-full rounded-lg border border-slate-200 px-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="e.g. Reena Kumari" type="text" defaultValue="" />
          {/* <p className="flex items-center gap-1 text-xs font-medium text-red-500">
            <span className="material-symbols-outlined text-xs">error</span> Please enter a valid full name
          </p> */}
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="flex items-center justify-between text-sm font-medium text-slate-700">
            Child's Name *
            <span className="material-symbols-outlined cursor-help text-base text-slate-400">info</span>
          </label>
          <input className="h-12 w-full rounded-lg border border-slate-200 px-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="e.g. Aarav Kumar" type="text" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label className="flex items-center justify-between text-sm font-semibold text-slate-700">
          Child's Gender *
          <span className="material-symbols-outlined cursor-help text-base text-slate-400">info</span>
        </label>
        <div className="grid grid-cols-3 gap-4">
          {(["male", "female", "other"] as const).map((gender) => (
            <button 
              key={gender}
              type="button"
              onClick={() => setSelectedGender(gender)}
              className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all ${selectedGender === gender ? "border-primary bg-primary/5 text-primary" : "border-slate-100 text-slate-600 hover:border-primary/50"}`}
            >
              <span className="material-symbols-outlined text-3xl">{gender === "other" ? "transgender" : gender}</span>
              <span className="text-sm font-medium capitalize">{gender}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="flex items-center justify-between text-sm font-semibold text-slate-700">
            Date of Birth *
            <span className="material-symbols-outlined cursor-help text-base text-slate-400">info</span>
          </label>
          <input className="h-12 w-full rounded-lg border border-slate-200 px-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" type="date" />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">Auto-Calculated Age</label>
          <div className="flex h-12 items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4">
            <span className="font-normal text-slate-600">3 Years, 4 Months</span>
            <span className="rounded bg-primary/20 px-2 py-0.5 text-[10px] font-medium uppercase text-primary">0-5 Years Group</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-center justify-between text-sm font-semibold text-slate-700">
          State / Region *
          <span className="material-symbols-outlined cursor-help text-base text-slate-400">info</span>
        </label>
        <div className="group relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="material-symbols-outlined text-xl text-slate-400">search</span>
          </div>
          <select defaultValue="" className="h-12 w-full cursor-pointer appearance-none rounded-lg border border-slate-200 pl-10 pr-4 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20">
            <option disabled value="">Search & Select State</option>
            <option value="ka">Karnataka</option>
            <option value="mh">Maharashtra</option>
            <option value="tn">Tamil Nadu</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="material-symbols-outlined text-slate-400">expand_more</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-4 sm:flex-row">
        <button type="reset" className="flex w-full items-center justify-center gap-2 rounded-lg px-8 py-3 font-semibold text-slate-500 transition-colors hover:bg-slate-100 sm:w-auto">
          <span className="material-symbols-outlined text-xl">restart_alt</span> Clear Form
        </button>
        <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-12 py-3 font-medium text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 sm:w-auto">
          Continue <span className="material-symbols-outlined text-xl">arrow_forward</span>
        </button>
      </div>
    </form>
  );
}