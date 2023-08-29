function JobAppRow({ jobApp }) {
    return (
      <tr>
        <td>{jobApp.jobTitle}</td>
        <td>{jobApp.company}</td>
        <td>{jobApp.location}</td>
        <td>{jobApp.jobPostLink}</td>
        <td>{jobApp.appliedOn}</td>
        <td>{jobApp.status}</td>
      </tr>
    );
}

export default JobAppRow;
