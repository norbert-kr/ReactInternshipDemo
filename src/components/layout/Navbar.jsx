import { NavLink } from "react-router-dom";
import {useAuth} from '../auth/useAuth.jsx';

import "./Navbar.scss";

function Navbar() {

  const {loggedInUser, logout} = useAuth();

  return (
    <nav>


      <div className="navItem">
        <NavLink to="/">Home</NavLink>
      </div>

      {
        loggedInUser && ( 
          <>
            <div className="navItem">
              <NavLink to="/modules">Modules</NavLink>
            </div>

            <div className="navItem">
              <NavLink to="/students">Students</NavLink>
            </div>
          </>
        )
      }

      {
        !loggedInUser ? 
        (
          <div className="navItem">
            <NavLink to="/login">Login</NavLink>
          </div>

        ) : (

          <div className="navItem">
            <NavLink to="/" onClick={logout}>Logout</NavLink>
          </div>
          
        )
      }
    </nav>  
  );
}

export default Navbar;


