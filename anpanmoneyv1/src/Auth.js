import React, {useEffect, useState} from "react";
import app from "./firebase.js";

export const AuthContext = React.createContext();

export const AuthProvider =({user})=> {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    return(
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {user}
            </AuthContext.Provider>
    );
};