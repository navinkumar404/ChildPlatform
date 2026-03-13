"use client";

import { useState } from "react";

interface Step4Props {
  onNext: () => void;
  onPrev: () => void;
}

export default function Step4Form({ onNext, onPrev }: Step4Props) {
  const [healthConsent, setHealthConsent] = useState(true);
  const [termsConsent, setTermsConsent] = useState(false);
  const [voiceReminders, setVoiceReminders] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!termsConsent || !healthConsent) {
      // Basic safeguard. The native 'required' attributes on the inputs also handle this.
      return;
    }
    onNext(); 
  };

  return (
    <form className="flex flex-col gap-8 p-6 md:p-8" onSubmit={handleSubmit}>
      
      {/* Summary Card */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <div className="mb-4 flex items-start justify-between">
          <h3 className="font-bold text-slate-800">Registration Summary</h3>
          <span className="rounded bg-slate-200 px-2 py-1 font-mono text-[10px] text-slate-600">ID: CHD-KA-20260310-000045</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-slate-500">Child's Name</p>
            <p className="font-medium text-slate-900">Aarav Sharma</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500">Registration Fee</p>
            <p className="text-lg font-bold text-slate-900">₹999.00</p>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="flex gap-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <span className="material-symbols-outlined shrink-0 text-primary">info</span>
        <div className="text-sm leading-relaxed text-slate-700">
          <p className="mb-1 font-semibold text-slate-900">Why we need your consent</p>
          <ul className="list-inside list-disc space-y-1">
            <li>Receive 9 automated reminder messages at critical milestones.</li>
            <li>Securely share health data with authorized practitioners.</li>
            <li>Enable digital health data portability to schools and hospitals.</li>
          </ul>
        </div>
      </div>

      {/* Consent Checkboxes */}
      <div className="space-y-5">
        
        {/* Health Consent */}
        <label className="group flex cursor-pointer items-start gap-4">
          <div className="relative mt-1 flex items-center">
            <input 
              type="checkbox" 
              required 
              checked={healthConsent}
              onChange={(e) => setHealthConsent(e.target.checked)}
              className="peer sr-only" 
            />
            <div className={`flex h-5 w-5 items-center justify-center rounded border transition-all ${healthConsent ? 'border-primary bg-primary text-white' : 'border-slate-300 bg-transparent group-hover:border-primary/50'}`}>
              {healthConsent && <span className="material-symbols-outlined text-[14px] font-bold">check</span>}
            </div>
          </div>
          <div className="text-sm text-slate-700">
            <span className="font-medium text-slate-900">Health Communication Consent (Required)</span>
            <p className="mt-0.5 text-slate-500">I agree to receive vaccination reminders, health tips, and developmental updates via SMS, WhatsApp, and Email.</p>
          </div>
        </label>

        {/* Terms Consent */}
        <label className="group flex cursor-pointer items-start gap-4">
          <div className="relative mt-1 flex items-center">
            <input 
              type="checkbox" 
              required 
              checked={termsConsent}
              onChange={(e) => setTermsConsent(e.target.checked)}
              className="peer sr-only" 
            />
            <div className={`flex h-5 w-5 items-center justify-center rounded border transition-all ${termsConsent ? 'border-primary bg-primary text-white' : 'border-slate-300 bg-transparent group-hover:border-primary/50'}`}>
              {termsConsent && <span className="material-symbols-outlined text-[14px] font-bold">check</span>}
            </div>
          </div>
          <div className="text-sm text-slate-700">
            <span className="font-medium text-slate-900">Terms & Privacy Policy (Required)</span>
            <p className="mt-0.5 text-slate-500">I have read and accept the <a href="#" className="font-medium text-primary hover:underline">Terms of Service</a> and <a href="#" className="font-medium text-primary hover:underline">Privacy Policy</a>.</p>
          </div>
        </label>

        {/* Voice Reminders */}
        <label className="group flex cursor-pointer items-start gap-4">
          <div className="relative mt-1 flex items-center">
            <input 
              type="checkbox" 
              checked={voiceReminders}
              onChange={(e) => setVoiceReminders(e.target.checked)}
              className="peer sr-only" 
            />
            <div className={`flex h-5 w-5 items-center justify-center rounded border transition-all ${voiceReminders ? 'border-primary bg-primary text-white' : 'border-slate-300 bg-transparent group-hover:border-primary/50'}`}>
              {voiceReminders && <span className="material-symbols-outlined text-[14px] font-bold">check</span>}
            </div>
          </div>
          <div className="text-sm text-slate-700">
            <span className="font-medium text-slate-900">Voice Reminders (Optional)</span>
            <p className="mt-0.5 text-slate-500">I would like to receive automated IVR voice call reminders for critical vaccination dates.</p>
          </div>
        </label>

      </div>

      {/* Actions */}
      <div className="space-y-4 pt-4 ">
        <div className="flex items-center justify-center" >
          <button 
          type="submit" 
          className="flex w-[45%] items-center justify-center gap-2 rounded-full bg-primary py-3 text-lg font-medium text-white shadow-lg shadow-primary/20 transition-all hover:brightness-110"
        >
          Confirm & Pay ₹999
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        </div>
        
        <div className="text-center">
          <button 
            type="button" 
            onClick={onPrev}
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-primary"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Go Back to Step 3
          </button>
        </div>
      </div>
    </form>
  );
}