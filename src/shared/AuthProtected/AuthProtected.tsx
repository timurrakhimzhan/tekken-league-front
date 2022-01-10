import React from "react";
import useAuth from "../../hooks/use-auth";

const AuthProtected: React.FC = ({children}) => {
    const {isLoggedIn} = useAuth();
    if(isLoggedIn) {
        return <>{children}</>
    }
    return null;
}

export default AuthProtected