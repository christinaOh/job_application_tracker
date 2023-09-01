function StatCard({icon, stat, label}) {
    return (
      <div class="stat-card">
        <div class="circle">
        <svg id="sword-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <title>cloud-rain</title><path class="cls-1" d="M31.08,29.42A11.55,11.55,0,1,0,14.75,45.75l16.5,16.5L47.58,45.92a11.67,11.67,0,0,0-16.5-16.5Z"/><line class="cls-2" x1="23" y1="34" x2="39" y2="34"/><rect class="cls-3" x="26" y="22" width="10" height="12"/><line class="cls-4" x1="31" y1="30" x2="31" y2="23"/><rect class="cls-5" x="20" y="17" width="22" height="5"/><path class="cls-6" d="M31,1h0a4,4,0,0,1,4,4V17a0,0,0,0,1,0,0H27a0,0,0,0,1,0,0V5a4,4,0,0,1,4-4Z"/><line class="cls-4" x1="31" y1="5" x2="28" y2="5"/><line class="cls-4" x1="31" y1="9" x2="28" y2="9"/><line class="cls-4" x1="31" y1="13" x2="28" y2="13"/><line class="cls-7" x1="38" y1="39" x2="41" y2="42"/><line class="cls-7" x1="38" y1="42" x2="41" y2="39"/><line class="cls-7" x1="21" y1="39" x2="24" y2="42"/><line class="cls-7" x1="21" y1="42" x2="24" y2="39"/><path class="cls-8" d="M35,49H27l.62-1.35C28.23,46.6,29.13,46,31,46h0c1.87,0,2.77.6,3.38,1.65Z"/>
        </svg>
        </div>
        <div class="stat">
          <h2>{stat}</h2>
          <p>{label}</p>
        </div>
      </div>
    );
}

export default StatCard;
