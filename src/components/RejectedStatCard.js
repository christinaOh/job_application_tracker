import StatCard from "./StatCard";

function RejectedStatCard({jobApps}) {
    const rejected = jobApps.filter((jobApp) => jobApp.status === "Rejected").length;
    const label = "REJECTED"
  
    return (
      <StatCard icon={""} stat={rejected} label={label}/>
    )
}

export default RejectedStatCard;
