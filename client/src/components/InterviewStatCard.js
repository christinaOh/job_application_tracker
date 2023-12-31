function InterviewStatCard({jobApps}) {
    const interviewInvites = jobApps.filter((jobApp) => jobApp.status === "Invited for Interview").length;
    const label = "INTERVIEW INVITATIONS"
    return (
      <div class="stat-card">
        <div class="circle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="muscle-love">
          <title>muscle-love</title><path class="cls-1" d="M57.48,8.21a4.12,4.12,0,0,0-5.83,0L50.51,9.35,49.37,8.21A4.12,4.12,0,1,0,43.55,14l1.14,1.14h0L50.51,21l5.83-5.83h0L57.48,14A4.12,4.12,0,0,0,57.48,8.21Z"/><path class="cls-2" d="M60,33s-11-9-20,3c0,0-8-7-17,0L22,19s-.44-.61-1.13-1.49l.55.06s3.54,0,4.13-1.32l2,1.81a1.88,1.88,0,0,0,2.61-.19L35,12.41a1.88,1.88,0,0,0,.12-2.36L29.69,3,13.74,10.28A1.49,1.49,0,0,0,13,11c-1,3-9,32-9,34v2.32a1.4,1.4,0,0,0,.53,1.1C5,48.76,7.12,49.36,8,50c3.77,2.76,9.65,7.59,16,9,9,2,20-1,20-1a28.79,28.79,0,0,0,16,3"/><path class="cls-3" d="M21,40s1,0,2-4"/><path class="cls-3" d="M43,41s0-2-3-5"/><path class="cls-3" d="M54,48s0,2,6,3"/><path class="cls-4" d="M16,47s6,10,20,7"/>
        </svg>
        </div>
        <div class="stat">
          <h2>{interviewInvites}</h2>
          <p>{label}</p>
        </div>
      </div>
    );
}

export default InterviewStatCard;
