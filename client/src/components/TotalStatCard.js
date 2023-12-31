function TotalStatCard({jobApps}) {
    const totalNumApps = jobApps.length;
    const label = "APPLICATIONS"
  
    return (
      <div class="stat-card">
        <div class="circle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="star">
          <title>star</title><path class="cls-1" d="M34.43,3.86l5.27,15.42a2.64,2.64,0,0,0,2.51,1.86l17,2.22a2.69,2.69,0,0,1,1.55,4.86L47,38.43a2.72,2.72,0,0,0-1,3L51.32,58a2.65,2.65,0,0,1-4.05,3L33.47,50.75a2.59,2.59,0,0,0-3.1,0L16.58,61a2.65,2.65,0,0,1-4.05-3l5.27-16.53a2.72,2.72,0,0,0-1-3L3,28.21a2.69,2.69,0,0,1,1.55-4.86l17-2.22a2.64,2.64,0,0,0,2.51-1.86L29.41,3.86A2.62,2.62,0,0,1,34.43,3.86Z"/><g class="cls-2"><path class="cls-3" d="M18.86,36.09a2.72,2.72,0,0,0-1-3L5,23.29l-.46.06A2.69,2.69,0,0,0,3,28.21L17.8,39.42Z"/><path class="cls-3" d="M50.25,54.63a2.54,2.54,0,0,1-3-.07L33.47,44.34a2.59,2.59,0,0,0-3.1,0L16.58,54.56a2.54,2.54,0,0,1-3,.07L12.52,58a2.65,2.65,0,0,0,4.05,3L30.37,50.75a2.59,2.59,0,0,1,3.1,0L47.26,61a2.65,2.65,0,0,0,4.05-3Z"/><path class="cls-3" d="M59.25,23.35l-.46-.06-12.86,9.8a2.72,2.72,0,0,0-1,3L46,39.42,60.8,28.21A2.69,2.69,0,0,0,59.25,23.35Z"/></g><circle class="cls-3" cx="36.5" cy="29.5" r="1.5"/><circle class="cls-3" cx="27.5" cy="29.5" r="1.5"/><path class="cls-3" d="M32,35a4,4,0,0,1-3.45-2A4,4,0,0,0,28,35a4,4,0,0,0,8,0,4,4,0,0,0-.55-2A4,4,0,0,1,32,35Z"/><line class="cls-1" x1="28.8" y1="20.28" x2="21.04" y2="21.21"/><circle class="cls-4" cx="12.5" cy="26.5" r="1.5"/><circle class="cls-4" cx="17.5" cy="28.5" r="1.5"/><circle class="cls-4" cx="22.5" cy="30.5" r="1.5"/><circle class="cls-4" cx="32.5" cy="10.5" r="1.5"/><circle class="cls-4" cx="32.5" cy="15.5" r="1.5"/><circle class="cls-4" cx="32.5" cy="21.5" r="1.5"/>
        </svg>
        </div>
        <div class="stat">
          <h2>{totalNumApps}</h2>
          <p>{label}</p>
        </div>
      </div>
    );
}

export default TotalStatCard;
