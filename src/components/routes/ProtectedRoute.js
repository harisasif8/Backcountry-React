import { UserContext } from "contexts/UserContext";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const [{ isLoggedIn }] = useContext(UserContext)

    console.log('isLoggedIn', isLoggedIn);
    if (!isLoggedIn) return <Navigate to='/signin' replace />
    return children;
};

export default ProtectedRoute;