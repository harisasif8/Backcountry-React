import React from "react";
import { Navigate } from "react-router-dom";
import { LOGGED_IN_USER } from "contexts/UserContext";
import { getItemFromLS } from "helper/utility/LSitems";

const PublicRoute = ({ children }) => {

    const loggedInUserFromLS = getItemFromLS(LOGGED_IN_USER) || '[]'
    const parsedLoggedInUser = JSON.parse(loggedInUserFromLS)

    if (parsedLoggedInUser.length) return <Navigate to='/products' replace />

    return children;
};

export default PublicRoute;

