import StatCard from "./StatCard";

function TotalStatCard({jobApps}) {
    const totalNumApps = jobApps.length;
    const label = "APPLICATIONS"
  
    return (
      <StatCard icon={""} stat={totalNumApps} label={label}/>
    )
}

export default TotalStatCard;
