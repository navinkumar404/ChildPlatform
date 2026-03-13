export default function ProfileSection() {
  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="rounded-2xl border border-primary/10 bg-white p-8 shadow-sm lg:col-span-2">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="group relative">
            <div 
              className="h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20 bg-cover bg-center" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554622965-bfaeff35e57f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
            />
            <button className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-primary text-white shadow-md">
              <span className="material-symbols-outlined text-sm">photo_camera</span>
            </button>
          </div>
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="flex flex-col justify-center gap-3 md:flex-row md:items-center md:justify-start">
              <h3 className="text-2xl font-medium">Aarav Sharma</h3>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Green Cohort Member 🌱</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <div className="flex items-center gap-1.5 text-slate-600">
                <span className="material-symbols-outlined text-sm">cake</span>
                <span>5 Years</span>
              </div>
              <div className="flex items-center gap-1.5 border-l border-slate-200 px-4 text-slate-600">
                <span className="material-symbols-outlined text-sm">person</span>
                <span>Male</span>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-3">
              <code className="font-mono text-sm text-slate-500">CHD-KA-20260310-000045</code>
              <button className="p-1 transition-colors hover:text-primary">
                <span className="material-symbols-outlined text-lg">content_copy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-center text-white shadow-lg">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
          <span className="material-symbols-outlined text-4xl">lightbulb</span>
        </div>
        <h4 className="mb-2 text-xl font-medium">Today's Health Tip</h4>
        <p className="font-light leading-relaxed text-white/90">
          "Ensure your child stays hydrated during playtime. Small sips of water every 30 minutes help maintain energy levels."
        </p>
      </div>
    </section>
  );
}