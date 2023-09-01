import { useState, useEffect } from 'react';
import JobAppTable from './JobAppTable';
import StatsOverview from './StatsOverview';
import axios from 'axios';

function Dashboard() {
    const [jobApps, setJobApps] = useState([]);

    async function getAndSetJobApps() {
      const res = await axios.get('http://localhost:8000/jobapps')
      console.log(res.data)
      setJobApps(res.data)
    }
  
    useEffect(() => {
      getAndSetJobApps()
    }, []);

    return (
      <div>
        <StatsOverview jobApps={jobApps} onJobAppsChange={setJobApps}/>
        <JobAppTable jobApps={jobApps} onJobAppsChange={setJobApps}/>
      </div>
    );
}

export default Dashboard;
