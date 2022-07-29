import { createContext, useReducer, useEffect } from "react";
import UserReducer, { FETCH_ALL_USERS, initialUserState, SIGN_UP } from "reducers/UserReducer";
import { getItemFromLS } from "helper/utility/LSitems";


export const UserContext = createContext();
export const USER = 'users'
export const LOGGED_IN_USER = 'Logged in user'

export const UserProvider = props => {

    const [state, dispatch] = useReducer(UserReducer, initialUserState);

    useEffect(() => {
        const userFromLS = getItemFromLS(USER) || '[]';
        let parsedUserFromLS = JSON.parse(userFromLS)
        if (parsedUserFromLS.length) {
            dispatch({ type: FETCH_ALL_USERS, payload: { users: parsedUserFromLS } })
        }
    }, []);
    return (
        <UserContext.Provider value={[state, dispatch]}>
            {props.children}
        </UserContext.Provider>)
}



