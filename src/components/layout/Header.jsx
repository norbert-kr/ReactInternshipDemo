import {useAuth} from '../auth/useAuth.jsx'
import "./Header.scss";


function Header() {

  const {loggedInUser} = useAuth();


  return (
    <header>
      <h1>Basic React Demo</h1>
      {
        loggedInUser && <p className="welcome">Welcome {loggedInUser.UserFirstname}! </p>
      }
    </header>
  );
}


export default Header;
