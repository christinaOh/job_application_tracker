import { useState } from "react"
import axios from "axios";

function EditJobAppForm({jobapps, onJobAppsChange, id, setSelectedId, setEditFormVisible}) {
    const jobAppObject = jobapps.filter((jobapp) => jobapp.id === id)[0];

    const [jobTitle, setJobTitle] = useState(jobAppObject.jobTitle);
    const [company, setCompany] = useState(jobAppObject.company);
    const [location, setLocation] = useState(jobAppObject.location);
    const [jobPosting, setJobPosting] = useState(jobAppObject.jobPosting);
    const [appliedOn, setAppliedOn] = useState(jobAppObject.appliedOn);
    const [status, setStatus] = useState(jobAppObject.status);
    
    const updatedJobAppObject = {
        jobTitle: jobTitle,
        company: company,
        location: location,
        jobPosting: jobPosting,
        appliedOn: appliedOn,
        status: status,
    };

    async function createRequest(e) {
        e.preventDefault();
        await axios.put(process.env.REACT_APP_SERVER_URL + "/jobapps/edit/"+ id, updatedJobAppObject)

        const getRes = await axios.get(process.env.REACT_APP_SERVER_URL + "/jobapps")
        console.log(getRes)

        onJobAppsChange(getRes.data)
        setEditFormVisible(false)
        setSelectedId(null)
    }

    async function onDeleteJobApp() {
        await axios.delete(process.env.REACT_APP_SERVER_URL + "/jobapps/delete/" + id, updatedJobAppObject)

        const getRes = await axios.get(process.env.REACT_APP_SERVER_URL + "/jobapps")
        console.log(getRes)

        onJobAppsChange(getRes.data)
        setEditFormVisible(false)
        setSelectedId(null)
    }

    function onChangeJobTitle(e) {
        setJobTitle(e.target.value)
    }
    
    function onChangeCompany(e) {
        setCompany(e.target.value)
    }
    
    function onChangeLocation(e) {
        setLocation(e.target.value)
    }

    function onChangeJobPosting(e) {
        setJobPosting(e.target.value)
    }

    function onChangeAppliedOn(e) {
        setAppliedOn(e.target.value)
    }

    function onChangeStatus(e){
        setStatus(e.target.value)
    }

    function handleClose() {
        setEditFormVisible(false)
        setSelectedId(null)
    }
  
    return (
        <div className="popup">
            <div className="popup-inner">
                <button class="close-btn" onClick={handleClose}>Close</button>
                <div class="popup-content">
                    <h2>Edit</h2>
                    <form onSubmit={createRequest}>
                        <label for="jobTitle">Job Title</label>
                        <input type='text' id="jobTitle" name="jobTitle" value={jobTitle} onChange={onChangeJobTitle} required/>

                        <label for="company">Company</label>
                        <input type='text' id="company" name="company" value={company} onChange={onChangeCompany} required></input>

                        {/* TODO: make this a location dropdown */}
                        <label for="location">Location</label>
                        <input type='text' id="location" name="location" value={location} onChange={onChangeLocation} required></input>

                        <label for="jobPostLink">Job Posting</label>
                        <input type='text' id="jobPostLink" name="jobPostLink" value={jobPosting} onChange={onChangeJobPosting}></input>

                        <label for="appliedOn">Applied On</label>
                        <input type='date' id="appliedOn" name="appliedOn" value={appliedOn} onChange={onChangeAppliedOn} required></input>

                        <label>
                            Status
                            <select  class="status-dropdown" value={status} onChange={onChangeStatus}>
                                <option  value='Awaiting Response'>Awaiting Response</option>
                                <option  value="Rejected">Rejected</option>
                                <option  value="Invited for Interview">Invited for Interview</option>
                            </select>
                        </label>
                        <div class='button-container'>
                            <button class="submit-btn" type="submit"><p>Save</p></button>
                            <button class="delete-btn" onClick={onDeleteJobApp}>Delete Application</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditJobAppForm;
