import StatCard from "./StatCard";

function AwaitingRespStatCard({jobApps}) {
    const responsesPending = jobApps.filter((jobApp) => jobApp.status === "Awaiting Response").length;
    const label = "RESPONSES PENDING"
    
    return (
      <StatCard icon={""} stat={responsesPending} label={label}/>
    )
}
  
export default AwaitingRespStatCard;
