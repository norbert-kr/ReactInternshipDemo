import useLoad from '../../api/useLoad.js';
import { Modal, useModal } from '../../UI/Modal.jsx';
import { Alert } from '../../UI/Notifications.jsx';
import Action from "../..//UI/Actions.jsx";
import ModuleForm from "../../entity/module/ModuleForm.jsx";
import { CardContainer } from "../../UI/Card.jsx";
import ModuleCard from "./ModuleCard.jsx";




function ModuleCrudler({endpoint}){




    // State           | --------------------------------
    const [modules, , loadingMessage, loadModules] =  useLoad(endpoint);
    const [showForm, formTitle, openForm, closeForm] = useModal(false);
    const [showAlert, alertContent, openAlert, closeAlert] = useModal(false);

    // Handlers        | --------------------------------
    const handleSuccess = async () => {
        closeForm();
        openAlert('Module succesfully added');
        await loadModules(endpoint);
    }


    const addNewModule = 'Add new module';
    return ( 
    <>
    
        <Modal show={showForm} title={formTitle}>
            <ModuleForm onCancel={closeForm} onSuccess={handleSuccess}/>
        </Modal>

        <Alert show={showAlert} message={alertContent} onDismiss={closeAlert}/>
        
        <Action.Tray>
            {!showForm && ( <Action.Add showText buttonText={addNewModule} onClick={() => openForm('Add new module')}/>)}
        </Action.Tray>


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


export default ModuleCrudler