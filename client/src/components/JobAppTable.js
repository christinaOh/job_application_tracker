import JobAppRow from "./JobAppRow";
import { useState } from "react";
import EditJobAppForm from "./EditJobAppForm";

function JobAppTable({ jobApps, onJobAppsChange}) {
    const rows = [];
    const [editFormVisible, setEditFormVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

  
    jobApps.forEach((jobApp) => {
      rows.push(
        <JobAppRow
          jobApp={jobApp} setSelectedId={setSelectedId} setEditFormVisible={setEditFormVisible}/>
      );
    });
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Job Position</th>
              <th>Company</th>
              <th>Location</th>
              <th><p>Job</p><p>Posting</p></th>
              <th>Applied On</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        {editFormVisible ? <EditJobAppForm jobapps={jobApps} id = {selectedId} setEditFormVisible={setEditFormVisible} onJobAppsChange={onJobAppsChange} setSelectedId={setSelectedId}/> : null}
      </div>
    );
}

export default JobAppTable;
