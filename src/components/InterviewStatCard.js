import StatCard from "./StatCard";

function InterviewStatCard({jobApps}) {
    const interviewInvites = jobApps.filter((jobApp) => jobApp.status === "Invited for Interview").length;
    const label = "INTERVIEW INVITATIONS"
    return (
      <StatCard icon={""} stat={interviewInvites} label={label}/>
    )
}

export default InterviewStatCard;
