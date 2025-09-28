import {useAuth} from '../auth/useAuth.jsx';
import ModuleCrudler from '../entity/module/ModuleCrudler.jsx';

function Modules() {


  // Initialisation  | --------------------------------

  const {loggedInUser} = useAuth();

  if (!loggedInUser) return <p>Please Log in...</p>;

  const myModulesEndpoint = loggedInUser.UserUsertypeID === 1 
    ? `modules/leader/${loggedInUser.UserID}`
    : `modules/users/${loggedInUser.UserID}`

  

  // State           | --------------------------------
  // Handlers        | --------------------------------
  // View            | --------------------------------


  return (
    <> 
      <h1>Modules</h1>
      <ModuleCrudler endpoint={myModulesEndpoint} />
    </>
  );
}

export default Modules;
