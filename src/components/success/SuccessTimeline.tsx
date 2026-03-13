export default function SuccessTimeline() {
  return (
    <div className="space-y-6">
      <h2 className="flex items-center gap-2 px-2 text-xl font-medium text-slate-900">
        <span className="material-symbols-outlined text-primary">timeline</span>
        What happens next
      </h2>
      
      {/* Timeline */}
      <div className="relative space-y-8 px-4">
        {/* Vertical Line */}
        <div className="absolute bottom-4 left-[34px] top-4 w-0.5 bg-slate-200"></div>
        
        {/* Step 1 (Completed) */}
        <div className="relative flex items-center gap-6">
          <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white ring-4 ring-background-light">
            <span className="material-symbols-outlined text-xl">check</span>
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-slate-900">Payment confirmed</h4>
            <p className="text-sm text-slate-500">Instant confirmation received</p>
          </div>
        </div>
        
        {/* Step 2 (Pending) */}
        <div className="relative flex items-center gap-6">
          <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-white text-primary ring-4 ring-background-light">
            <span className="text-sm font-bold">2</span>
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-slate-900 opacity-80">Welcome message sent</h4>
            <p className="text-sm text-slate-500">Checking communications channels...</p>
          </div>
        </div>
        
        {/* Step 3 (Pending) */}
        <div className="relative flex items-center gap-6">
          <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-400 ring-4 ring-background-light">
            <span className="text-sm font-bold">3</span>
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-slate-400">Go Green certificate generated</h4>
            <p className="text-sm italic text-slate-400">Processing digital certificate</p>
          </div>
        </div>
        
        {/* Step 4 (Pending) */}
        <div className="relative flex items-center gap-6">
          <div className="z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-400 ring-4 ring-background-light">
            <span className="text-sm font-bold">4</span>
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-slate-400">Dashboard access activated</h4>
            <p className="text-sm italic text-slate-400">Provisioning your personal space</p>
          </div>
        </div>
      </div>

      {/* Communication Status Cards */}
      <div className="rounded-2xl border border-primary/10 bg-primary/5 p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-blue-500 shadow-sm">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold uppercase text-slate-400">Email sent to</p>
              <p className="truncate text-sm font-medium text-slate-700">parent@email.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 border-y border-primary/10 py-4 md:border-x md:border-y-0 md:px-4 md:py-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-green-500 shadow-sm">
              <span className="material-symbols-outlined">chat_bubble</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">WhatsApp</p>
              <p className="text-sm font-medium text-slate-700">Welcome message sent</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-slate-500 shadow-sm">
              <span className="material-symbols-outlined">sms</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">SMS</p>
              <p className="text-sm font-medium text-slate-700">Confirmation sent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}