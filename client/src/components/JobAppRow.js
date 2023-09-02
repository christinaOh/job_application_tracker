function JobAppRow({ jobApp }) {
    return (
      <tr>
        <td>{jobApp.jobTitle}</td>
        <td>{jobApp.company}</td>
        <td>{jobApp.location}</td>
        <td><a href={jobApp.jobPosting}>Link</a></td>
        <td>{jobApp.appliedOn}</td>
        <td class={"status "+ jobApp.status.toLowerCase().replaceAll(" ", "-")}><p>{jobApp.status}</p></td>
      </tr>
    );
}

export default JobAppRow;
