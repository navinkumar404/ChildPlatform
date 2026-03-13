import { FileText, Image, Activity, Stethoscope, Eye, Scale, ClipboardList, Pill, Download, MoreVertical } from "lucide-react";

export default function RecordsGrid() {
  const records = [
    { title: "Vaccination Card 2025", date: "15 Jan 2025", size: "2.4 MB", ext: "PDF", icon: FileText, color: "text-red-600", bg: "bg-red-100" },
    { title: "Annual Check-up Report", date: "10 Dec 2024", size: "5.1 MB", ext: "JPG", icon: Image, color: "text-blue-600", bg: "bg-blue-100" },
    { title: "Lab Test Results - CBC", date: "22 Nov 2024", size: "1.2 MB", ext: "PNG", icon: Activity, color: "text-emerald-600", bg: "bg-emerald-100" },
    { title: "Dental Exam Report", date: "05 Oct 2024", size: "3.8 MB", ext: "PDF", icon: Stethoscope, color: "text-purple-600", bg: "bg-purple-100" },
    { title: "Vision Screening Test", date: "12 Sep 2024", size: "2.1 MB", ext: "PDF", icon: Eye, color: "text-amber-600", bg: "bg-amber-100" },
    { title: "Amoxicillin Prescription", date: "30 Aug 2024", size: "890 KB", ext: "JPG", icon: Pill, color: "text-rose-600", bg: "bg-rose-100" }
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {records.map((record, index) => (
        <div key={index} className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md">

          <div className="mb-4 flex items-start justify-between">
            <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${record.bg} ${record.color}`}>
              <record.icon className="h-7 w-7" />
            </div>
            <button className="text-slate-400 hover:text-slate-600">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>

          <h3 className="mb-1 truncate font-medium text-slate-900" title={record.title}>
            {record.title}
          </h3>
          <p className="mb-4 text-xs text-slate-500">
            {record.date} • {record.size} • {record.ext}
          </p>

          <div className="mt-auto flex items-center gap-2">
            <button className="flex-1 rounded-lg bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100">
              View
            </button>
            <button className="rounded-lg bg-slate-50 px-3 py-2 text-slate-700 transition-colors hover:bg-slate-100">
              <Download className="h-5 w-5" />
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}
