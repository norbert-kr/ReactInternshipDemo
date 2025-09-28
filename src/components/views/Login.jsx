import {useNavigate} from 'react-router-dom';
import {useAuth} from '../auth/useAuth.jsx';
import Action from '../UI/Actions.jsx';


function Login(){


    const {login} = useAuth();
    const navigate = useNavigate();

    const student = {
        UserID: 276,
        UserFirstname: "Yasin",
        UserLastname: "ABDULLA",
        UserEmail: "K7077123@kingston.ac.uk",
        UserRegistered: 0,
        UserLevel: 3,
        UserYearID: 1,
        UserUsertypeID: 2,
        UserImageURL: "https://images.generated.photos/MEhzHfD0AtIoLUVj5R4QKAmyaS87QnLhEpGvxxjwVcI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTg5NTA2LmpwZw.jpg",
        UserUsertypeName: "Student",
        UserYearName: "2022-23"
    };

    const staff = {
        UserID: 820,
        UserFirstname: "Graeme",
        UserLastname: "Jones",
        UserEmail: "Ku06696@kingston.ac.uk",
        UserRegistered: 1,
        UserLevel: 0,
        UserYearID: null,
        UserUsertypeID: 1,
        UserImageURL: "https://images.generated.photos/Zx-gNUWFq9NPQDPRLEJQQPWx19QhpKGSAnzIPFUDz3k/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92Ml8w/MDM4MjcxLmpwZw.jpg",
        UserUsertypeName: "Staff",
        UserYearName: null
    };



    const handleStudent = () => {
        login(student);
        navigate("/");
    }
    
    const handleStaff = () => {
        login(staff);
        navigate("/");
    }


    return (

        <Action.Tray>
            <Action.Add showText buttonText="Login as student" onClick={handleStudent}/>
            <Action.Add showText buttonText="Login as staff" onClick={handleStaff}/>

        </Action.Tray>

    )

}

export default Login;