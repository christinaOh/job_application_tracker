import { useState, useEffect } from 'react';
import JobAppTable from './JobAppTable';
import StatsOverview from './StatsOverview';
import EmptyTable from './EmptyTable';
import axios from 'axios';

function Dashboard() {
    const [jobApps, setJobApps] = useState([]);

    async function getAndSetJobApps() {
      console.log(process.env.REACT_APP_SERVER_URL)
      const res = await axios.get(process.env.REACT_APP_SERVER_URL + "/jobapps")
      console.log(res.data)
      setJobApps(res.data)
    }
  
    useEffect(() => {
      getAndSetJobApps()
    }, []);

    return (
      <body>
        <StatsOverview jobApps={jobApps} onJobAppsChange={setJobApps}/>
        {jobApps.length === 0 ? <EmptyTable onJobAppsChange={setJobApps}/>
          : <JobAppTable jobApps={jobApps} onJobAppsChange={setJobApps}/>}
      </body>
    );
}

export default Dashboard;
