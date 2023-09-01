import TotalStatCard from "./TotalStatCard";
import AwaitingRespStatCard from "./AwaitingRespStatCard";
import RejectedStatCard from "./RejectedStatCard";
import InterviewStatCard from "./InterviewStatCard";
import AddJobAppButton from "./AddJobAppButton";

function StatsOverview({jobApps, onJobAppsChange}) {
    return (
      <div class="stats-overview">
        <TotalStatCard jobApps={jobApps}/>
        <InterviewStatCard jobApps={jobApps}/>
        <AwaitingRespStatCard jobApps={jobApps}/>
        <RejectedStatCard jobApps={jobApps}/>
        <AddJobAppButton onJobAppsChange = {onJobAppsChange}/>
      </div>
    )
}

export default StatsOverview;
