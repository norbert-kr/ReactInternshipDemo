import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav>
      {/*1. NAvlink updates the URL based on the clicked nav link*/}

      <div className="navItem">
        <NavLink to="/">Home</NavLink>
      </div>

      <div className="navItem">
        <NavLink to="/modules">Modules</NavLink>
      </div>

      <div className="navItem">
        <NavLink to="/students">Students</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
