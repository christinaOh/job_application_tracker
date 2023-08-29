import TotalStatCard from "./TotalStatCard";
import AwaitingRespStatCard from "./AwaitingRespStatCard";
import RejectedStatCard from "./RejectedStatCard";
import InterviewStatCard from "./InterviewStatCard";
import AddJobAppButton from "./AddJobAppButton";

function StatsOverview({jobApps}) {
    return (
      <div>
        <TotalStatCard jobApps={jobApps}/>
        <InterviewStatCard jobApps={jobApps}/>
        <AwaitingRespStatCard jobApps={jobApps}/>
        <RejectedStatCard jobApps={jobApps}/>
        <AddJobAppButton/>
      </div>
    )
}

export default StatsOverview;
