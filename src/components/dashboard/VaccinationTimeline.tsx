import { Activity, CheckCircle, Hourglass, AlertTriangle } from "lucide-react";

export default function VaccinationTimeline() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-xl font-medium">
          <Activity className="h-6 w-6 text-primary" />
          Vaccination Timeline
        </h3>
        <button className="text-sm font-semibold text-primary hover:underline">View History</button>
      </div>
      <div className="flex flex-col gap-4 overflow-x-auto pb-2 md:flex-row">
        <div className="min-w-[280px] flex-1 rounded-xl border-l-4 border-primary bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-start justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">Completed</span>
            <CheckCircle className="h-5 w-5 text-primary" />
          </div>
          <h5 className="text-lg font-medium">BCG</h5>
          <p className="text-sm text-slate-500">Tuberculosis Prevention</p>
          <p className="mt-3 text-xs font-medium text-slate-400">Administered: 12 Jan 2021</p>
        </div>
        <div className="min-w-[280px] flex-1 rounded-xl border-l-4 border-orange-500 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-start justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-orange-500">Due Soon</span>
            <Hourglass className="h-5 w-5 text-orange-500" />
          </div>
          <h5 className="text-lg font-medium">Polio</h5>
          <p className="text-sm text-slate-500">Dose 4 (Booster)</p>
          <p className="mt-3 text-xs font-medium text-orange-600">Due: 15 Mar 2026</p>
        </div>
        <div className="min-w-[280px] flex-1 rounded-xl border-l-4 border-red-500 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-start justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-red-500">Overdue</span>
            <AlertTriangle className="h-5 w-5 text-red-500" />
          </div>
          <h5 className="text-lg font-medium">Hepatitis B</h5>
          <p className="text-sm text-slate-500">Final Dose</p>
          <p className="mt-3 text-xs font-medium text-red-500">Missed: 01 Nov 2024</p>
        </div>
      </div>
    </section>
  );
}
