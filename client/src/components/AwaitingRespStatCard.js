function AwaitingRespStatCard({jobApps}) {
    const responsesPending = jobApps.filter((jobApp) => jobApp.status === "Awaiting Response").length;
    const label = "RESPONSES PENDING"
    
    return (
      <div class="stat-card">
        <div class="circle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="moon-crescent">
          <title>moon-crescent</title><path class="cls-1" d="M29,32A29,29,0,0,1,46,5.6a29,29,0,1,0,0,52.8A29,29,0,0,1,29,32Z"/><path class="cls-2" d="M46,58.4A29,29,0,0,1,46,5.6c-.82-.37-1.65-.7-2.51-1a29,29,0,0,0,0,54.79C44.34,59.1,45.18,58.77,46,58.4Z"/><circle class="cls-3" cx="24" cy="42" r="5"/><path class="cls-4" d="M26,26a3,3,0,0,1-6,0"/><path class="cls-4" d="M15,26a3,3,0,0,1-6,0"/><ellipse class="cls-5" cx="24" cy="43.5" rx="3" ry="1.5"/><line class="cls-6" x1="37.88" y1="30.88" x2="42.12" y2="35.12"/><line class="cls-6" x1="37.88" y1="35.12" x2="42.12" y2="30.88"/><line class="cls-6" x1="50.88" y1="43.88" x2="55.12" y2="48.12"/><line class="cls-6" x1="50.88" y1="48.12" x2="55.12" y2="43.88"/><line class="cls-6" x1="56.88" y1="29.88" x2="61.12" y2="34.12"/><line class="cls-6" x1="56.88" y1="34.12" x2="61.12" y2="29.88"/><line class="cls-6" x1="43.88" y1="16.88" x2="48.12" y2="21.12"/><line class="cls-6" x1="43.88" y1="21.12" x2="48.12" y2="16.88"/>
        </svg>
        </div>
        <div class="stat">
          <h2>{responsesPending}</h2>
          <p>{label}</p>
        </div>
      </div>
    );
}
  
export default AwaitingRespStatCard;
