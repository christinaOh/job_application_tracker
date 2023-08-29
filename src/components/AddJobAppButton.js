import { useState } from 'react';
import NewJobAppForm from './NewJobAppForm';

function AddJobAppButton() {
    const [popUpVisible, setPopUpVisible] = useState(false);
  
    function OpenPopUp () {
      setPopUpVisible(true);
    };
  
    return (
      <div>
        <button onClick={OpenPopUp}>Add New Application</button>
        {popUpVisible ? <NewJobAppForm onPopUpClose={setPopUpVisible} /> : null}
      </div>
    );
}

export default AddJobAppButton;