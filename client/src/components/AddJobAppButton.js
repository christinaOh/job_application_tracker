import { useState } from 'react';
import NewJobAppForm from './NewJobAppForm';

function AddJobAppButton({onJobAppsChange}) {
    const [popUpVisible, setPopUpVisible] = useState(false);
  
    function OpenPopUp () {
      setPopUpVisible(true);
    };
  
    return (
      <div>
        <button onClick={OpenPopUp} class="new-app-button"><p>Add New</p><p>Application</p></button>
        {popUpVisible ? <NewJobAppForm onPopUpClose={setPopUpVisible} onJobAppsChange={onJobAppsChange} /> : null}
      </div>
    );
}

export default AddJobAppButton;
