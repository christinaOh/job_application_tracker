import { useState } from 'react';
import NewJobAppForm from './NewJobAppForm';

function AddJobAppButton({onJobAppsChange, buttonText}) {
    const [popUpVisible, setPopUpVisible] = useState(false);
  
    function OpenPopUp () {
      setPopUpVisible(true);
    };
  
    return (
      <div class="btn-container">
        <button onClick={OpenPopUp} class={"new-app-button " + buttonText.toLowerCase().replaceAll(" ", "-")}><p>{buttonText}</p></button>
        {popUpVisible ? <NewJobAppForm onPopUpClose={setPopUpVisible} onJobAppsChange={onJobAppsChange} /> : null}
      </div>
    );
}

export default AddJobAppButton;
