import AgeGroupSelector from "@/components/dashboard/milestones/AgeGroupSelector";
import MilestoneProgress from "@/components/dashboard/milestones/MilestoneProgress";
import DevelopmentAccordions from "@/components/dashboard/milestones/DevelopmentAccordions";
import TipsAndActivities from "@/components/dashboard/milestones/TipsAndActivities";

export default function MilestonesPage() {
  return (
    <div className="mx-auto w-full max-w-8xl">
      
      {/* Header Info (Optional: if not covered by global header) */}
      <div className="mb-6 flex items-center gap-3">
        
        <h1 className="text-2xl font-medium tracking-tight text-slate-900">Milestone Tracker</h1>
      </div>

      <AgeGroupSelector />
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <MilestoneProgress />
        <DevelopmentAccordions />
      </div>

      <TipsAndActivities />
      
    </div>
  );
}