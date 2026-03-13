export default function SubscriptionCard() {
  return (
    <section>
      <h3 className="mb-4 flex items-center gap-3 text-lg font-medium text-slate-900">
        <span className="material-symbols-outlined text-primary">payments</span> 
        Subscription
      </h3>
      
      <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-white shadow-lg shadow-primary/20">
        <div className="relative z-10">
          <p className="text-sm font-semibold text-white/90">Premium Annual Plan</p>
          <p className="mt-1 text-3xl font-bold">₹999/year</p>
          <p className="mt-6 text-xs font-medium text-white/90">Renews on 10 Mar 2027</p>
          
          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white/20 py-3 text-sm font-medium backdrop-blur-sm transition-all hover:bg-white/30">
            <span className="material-symbols-outlined text-[18px]">receipt_long</span> 
            Download Invoice
          </button>
        </div>
        
        {/* Background Decor */}
        <div className="absolute -bottom-8 -right-8 opacity-10 mix-blend-overlay">
          <span className="material-symbols-outlined text-[150px]">verified</span>
        </div>
      </div>
    </section>
  );
}