import { useState } from "react"
import axios from "axios";

function NewJobAppForm({onPopUpClose, onJobAppsChange}) {
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [jobPosting, setJobPosting] = useState('');
    const [appliedOn, setAppliedOn] = useState('');
    const [status, setStatus] = useState('Awaiting Response');

    const jobAppObject = {
        jobTitle: jobTitle,
        company: company,
        location: location,
        jobPosting: jobPosting,
        appliedOn: appliedOn,
        status: status,
    };
    
    async function createRequest(e) {
        e.preventDefault();

        const res = await axios.post('http://localhost:8000/jobapps/create', jobAppObject)

        console.log(res)
        setJobTitle('')
        setCompany('')
        setLocation('')
        setJobPosting('')
        setAppliedOn('')
        setStatus('Awaiting Response')
    
        const getRes = await axios.get('http://localhost:8000/jobapps')
        console.log(getRes)
        onJobAppsChange(getRes.data)
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
    function handleClose(e) {
      onPopUpClose(false)
    }
  
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Add New Job Application</h2>
                <form onSubmit={createRequest}>
                    <label for="jobTitle">Job Title</label>
                    <input type='text' id="jobTitle" name="jobTitle" value={jobTitle} onChange={onChangeJobTitle}/>

                    <label for="company">Company</label>
                    <input type='text' id="company" name="company" value={company} onChange={onChangeCompany}></input>

                    {/* TODO: make this a location dropdown */}
                    <label for="location">Location</label>
                    <input type='text' id="location" name="location" value={location} onChange={onChangeLocation}></input>

                    <label for="jobPostLink">Job Posting</label>
                    <input type='text' id="jobPostLink" name="jobPostLink" value={jobPosting} onChange={onChangeJobPosting}></input>

                    <label for="appliedOn">Applied On</label>
                    <input type='date' id="appliedOn" name="appliedOn" value={appliedOn} onChange={onChangeAppliedOn}></input>

                    <label for="status">Status</label>
                    <label>
			            Status:
				        <select  value={status} onChange={onChangeStatus}>
				            <option  value='Awaiting Response'>Awaiting Response</option>
				            <option  value="Rejected">Rejected</option>
				            <option  value="Invited for Interview">Invited for Interview</option>
			            </select>
		            </label>
                    <button type="submit">Add</button>
                </form>
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    )
}

export default NewJobAppForm;
