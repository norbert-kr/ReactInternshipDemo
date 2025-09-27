import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

    // Initialisation  | --------------------------------



    // State           | --------------------------------
    const [loggedInUser, setLoggedInUser] = useState(null);


    // Handlers        | --------------------------------
    const login = (user) => setLoggedInUser(user);
    const logout = () => setLoggedInUser(null);










    return (
        <AuthContext.Provider value={{loggedInUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);