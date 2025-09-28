import {useState} from "react";
import {useAuth} from '../auth/useAuth.jsx';
import useLoad from '../api/useLoad.js';
import Action from "../UI/Actions.jsx";
import ModuleForm from "../entity/module/ModuleForm.jsx";
import { CardContainer } from "../UI/Card.jsx";
import ModuleCard from "../entity/module/ModuleCard.jsx";

function Modules() {


  // Initialisation  | --------------------------------

  const {loggedInUser} = useAuth();

  if (!loggedInUser) return <p>Loading...</p>;

  const myModulesEndpoint = loggedInUser.UserUsertypeID === 1 
    ? `modules/leader/${loggedInUser.UserID}`
    : `modules/users/${loggedInUser.UserID}`



  
  // State           | --------------------------------
  const [modules, , loadingMessage, loadModules] =  useLoad(myModulesEndpoint);
  const [showForm, setShowForm] = useState(false);

  // DEBUG: Let's see what these actually contain
  console.log("loadingMessage type:", typeof loadingMessage);
  console.log("loadModules type:", typeof loadModules);
  console.log("loadingMessage value:", loadingMessage);
  console.log("loadModules value:", loadModules);





  // Handlers        | --------------------------------
  const handleAdd = () => setShowForm(true);
  const handleCancel = () => setShowForm(false);
  const handleSuccess = async () => {
    handleCancel();
    await loadModules(myModulesEndpoint);
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
        <p>{loadingMessage}</p>
      ) : modules.length === 0 ? (
        <p>No Records Found</p>
      ) : (
        <CardContainer>
          
          {modules.map((module) => (<ModuleCard module={module} key={module.ModuleID } />))}

        </CardContainer>
      )}
    </>
  );
}

export default Modules;
