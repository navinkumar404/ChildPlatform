"use client";

import { useState, useEffect } from "react";

interface UploadRecordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UploadRecordModal({ isOpen, onClose }: UploadRecordModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    // Backdrop
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm">
      
      {/* Modal Container */}
      <div 
        className="flex max-h-[90vh] w-full max-w-[550px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Section */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-xl">cloud_upload</span>
            </div>
            <h2 className="text-xl font-medium text-slate-900">Upload Health Record</h2>
          </div>
          <button 
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="space-y-6 overflow-y-auto p-6">
          
          {/* Drag & Drop Zone */}
          <div className="relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 px-6 py-10 transition-colors hover:border-primary/50 hover:bg-primary/10">
            <input 
              type="file" 
              className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
            />
            
            {!selectedFile ? (
              <div className="text-center pointer-events-none">
                <span className="material-symbols-outlined mb-3 text-4xl text-primary/60">note_add</span>
                <p className="mb-1 text-sm font-normal text-slate-700">Drag & drop your file here</p>
                <p className="text-xs font-normal text-slate-500">or click to browse from your device</p>
                <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-normal uppercase tracking-wider text-slate-400">
                  <span className="material-symbols-outlined text-[14px]">picture_as_pdf</span> PDF
                  <span className="mx-1">•</span>
                  <span className="material-symbols-outlined text-[14px]">image</span> JPG, PNG
                  <span className="mx-1">•</span>
                  Max 10MB
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div className="overflow-hidden">
                  <p className="truncate text-sm font-medium text-slate-900">{selectedFile.name}</p>
                  <p className="text-xs text-slate-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <button 
                  onClick={() => setSelectedFile(null)} 
                  className="z-20 ml-4 rounded-full p-1 text-slate-400 hover:bg-red-50 hover:text-red-500"
                  title="Remove file"
                >
                  <span className="material-symbols-outlined text-sm">delete</span>
                </button>
              </div>
            )}
          </div>

          {/* Record Details Form */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            
            <div className="md:col-span-2">
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Document Name *</label>
              <input 
                type="text" 
                placeholder="e.g. Annual Blood Report 2026"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Category *</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20">
                  <option value="" disabled selected>Select Category</option>
                  <option value="vaccination">Vaccination Card</option>
                  <option value="lab">Lab Test Result</option>
                  <option value="prescription">Prescription</option>
                  <option value="checkup">General Check-up</option>
                  <option value="other">Other</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Date of Record</label>
              <input 
                type="date" 
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Notes / Doctor's Name (Optional)</label>
              <textarea 
                rows={2}
                placeholder="Add any relevant context here..."
                className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col-reverse justify-end gap-3 border-t border-slate-100 bg-slate-50/50 p-6 sm:flex-row">
          <button 
            onClick={onClose}
            className="rounded-lg px-6 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200"
          >
            Cancel
          </button>
          <button 
            className={`flex items-center justify-center gap-2 rounded-full px-8 py-2.5 text-sm font-medium text-white shadow-sm transition-all ${selectedFile ? "bg-primary hover:bg-primary/90 shadow-primary/20" : "bg-slate-300 cursor-not-allowed"}`}
            disabled={!selectedFile}
          >
            <span className="material-symbols-outlined text-[18px]">cloud_upload</span>
            Upload Document
          </button>
        </div>

      </div>
    </div>
  );
}