import { Cake, Syringe, Calendar } from "lucide-react";

export default function StatsGrid() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Cake className="h-7 w-7" />
        </div>
        <div>
          <p className="text-sm text-slate-500">Age</p>
          <p className="text-xl font-medium">5 years</p>
        </div>
      </div>
      <div className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
          <Syringe className="h-7 w-7" />
        </div>
        <div>
          <p className="text-sm text-slate-500">Vaccines</p>
          <p className="text-xl font-medium">12/15 (80% complete)</p>
        </div>
      </div>
      <div className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
          <Calendar className="h-7 w-7" />
        </div>
        <div>
          <p className="text-sm text-slate-500">Next Due</p>
          <p className="text-xl font-medium">15 Mar 2026 <span className="text-sm text-orange-600">⚠️ Polio</span></p>
        </div>
      </div>
    </section>
  );
}
