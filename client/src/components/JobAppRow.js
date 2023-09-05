function JobAppRow({ jobApp, setSelectedId, setEditFormVisible }) {

    function onJobRowClick() {
      setSelectedId(jobApp.id)
      setEditFormVisible(true)
    }

    return (
      <tr class="jobapprow" onClick={onJobRowClick}>
        <td>{jobApp.jobTitle}</td>
        <td>{jobApp.company}</td>
        <td>{jobApp.location}</td>
        <td><a href={jobApp.jobPosting}>{jobApp.jobPosting.length == 0 ? "":"Link"}</a></td>
        <td>{jobApp.appliedOn}</td>
        <td class={"status "+ jobApp.status.toLowerCase().replaceAll(" ", "-")}><p>{jobApp.status}</p></td>
      </tr>
    );
}

export default JobAppRow;
