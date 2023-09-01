import { useState } from 'react';
import NewJobAppForm from './NewJobAppForm';

function AddJobAppButton({onJobAppsChange}) {
    const [popUpVisible, setPopUpVisible] = useState(false);
  
    function OpenPopUp () {
      setPopUpVisible(true);
    };
  
    return (
      <div>
        <button onClick={OpenPopUp}>Add New Application</button>
        {popUpVisible ? <NewJobAppForm onPopUpClose={setPopUpVisible} onJobAppsChange={onJobAppsChange} /> : null}
      </div>
    );
}

export default AddJobAppButton;
