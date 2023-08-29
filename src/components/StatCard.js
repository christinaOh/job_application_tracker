function StatCard({icon, stat, label}) {
    return (
      <div>
        <img src={icon}></img>
        <h2>{stat}</h2>
        <p>{label}</p>
      </div>
    );
}

export default StatCard;
