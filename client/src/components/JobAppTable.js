import JobAppRow from "./JobAppRow";

function JobAppTable({jobApps}) {
    const rows = [];
  
    jobApps.forEach((jobApp) => {
      rows.push(
        <JobAppRow
          jobApp={jobApp} />
      );
    });
  
    return (
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
    );
}

export default JobAppTable;
