export default function CertificateCard() {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 sm:p-8">
      
      {/* The Visual Certificate */}
      <div className="relative w-full overflow-hidden rounded-xl border-4 border-white bg-white p-8 text-center shadow-lg">
        {/* Watermark/Decor */}
        <div className="absolute -right-8 -top-8 text-primary opacity-5">
          <span className="material-symbols-outlined text-[150px]">verified</span>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
            <span className="material-symbols-outlined text-2xl">verified</span>
          </div>
          
          <h4 className="mb-2 text-xl font-medium italic text-slate-900">Certificate of Planting</h4>
          <p className="mb-6 max-w-xs text-xs font-normal text-slate-500">
            This certifies that a tree has been planted in the honor of
          </p>
          
          <h5 className="mb-8 text-3xl font-semibold text-primary">Sarah Johnson</h5>
          
          <div className="flex w-full items-end justify-between border-t border-slate-100 pt-6 text-left">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-widest text-slate-400">WombTo18 Go Green</p>
              <p className="text-xs font-medium text-slate-900">Cohort 2026 Member</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-100 p-1">
              <span className="material-symbols-outlined text-slate-400">qr_code_2</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cohort Badge Below Certificate */}
      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-white shadow-lg shadow-primary/20">
        <span className="material-symbols-outlined text-lg">star</span>
        <span className="text-sm font-medium tracking-tight">Proud Member of Green Cohort 2026</span>
      </div>
    </div>
  );
}