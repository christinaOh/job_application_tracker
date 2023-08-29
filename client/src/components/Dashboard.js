import { useState } from 'react';
import JobAppTable from './JobAppTable';
import StatsOverview from './StatsOverview';

function Dashboard() {
    const [jobApps, setJobApps] = useState([]);
    return (
      <div>
        <StatsOverview jobApps={jobApps}/>
        <JobAppTable jobApps={jobApps}/>
      </div>
    );
}

export default Dashboard;
