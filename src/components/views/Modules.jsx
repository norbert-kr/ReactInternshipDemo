import {useAuth} from '../auth/useAuth.jsx';

import { useState, useEffect } from "react";
import Action from "../UI/Actions.jsx";
import ModuleForm from "../entity/module/ModuleForm.jsx";
import { CardContainer } from "../UI/Card.jsx";
import ModuleCard from "../entity/module/ModuleCard.jsx";


function Modules() {


  // Initialisation  | --------------------------------

  const { loggedInUser } = useAuth();

  const apiURL = "https://softwarehub.uk/unibase/api/";
  const myModulesEndpoint = loggedInUser.UserUsertypeID === 1 
    ? `${apiURL}modules/leader/${loggedInUser.UserID}`
    : `${apiURL}modules/users/${loggedInUser.UserID}`


  // State           | --------------------------------
  const [modules, setModules] = useState(null);
  const [showForm, setShowForm] = useState(false);


  const apiGet = async (endpoint) => {
    const response = await fetch(endpoint);
    const result = await response.json();
    setModules(result);
  };

  
  useEffect(() => {
    apiGet(myModulesEndpoint);
  }, [myModulesEndpoint]);



  // Handlers        | --------------------------------
  const handleAdd = () => setShowForm(true);
  const handleCancel = () => setShowForm(false);
  const handleSuccess = async () => {
    handleCancel();
    await apiGet(myModulesEndpoint);
  }


  // View            | --------------------------------
  return (
    <>
      <h1>Modules</h1>

      <Action.Tray>
        {!showForm && ( <Action.Add showText buttonText="Add New Module" onClick={handleAdd}/>)}
      </Action.Tray>

      {showForm && <ModuleForm onCancel={handleCancel} onSuccess={handleSuccess}/>}

      {!modules ? (
        <p>Loading Records...</p>
      ) : modules.length === 0 ? (
        <p>No Records Found</p>
      ) : (
        <CardContainer>
          
          {modules.map((module) => (<ModuleCard module={module} key={module.ModuleID} />))}

        </CardContainer>
      )}
    </>
  );
}

export default Modules;
