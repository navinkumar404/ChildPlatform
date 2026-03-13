import VaccinationHeader from "@/components/dashboard/vaccinations/VaccinationHeader";
import VaccinationProgress from "@/components/dashboard/vaccinations/VaccinationProgress";
import VaccinationTimeline from "@/components/dashboard/vaccinations/VaccinationTimeline";
import VaccinationSidePanel from "@/components/dashboard/vaccinations/VaccinationSidePanel";

export default function VaccinationTrackerPage() {
  return (
    <div className="mx-auto max-w-8xl">
      <VaccinationHeader />
      
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Left Column: Timeline */}
        <div className="flex-1">
          <VaccinationProgress />
          <VaccinationTimeline />
        </div>
        
        {/* Right Column: Actions */}
        <VaccinationSidePanel />
      </div>
    </div>
  );
}