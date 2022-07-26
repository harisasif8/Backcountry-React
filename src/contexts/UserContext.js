import { createContext } from "react";


export const UserContext = createContext();
export const USER = 'user'

export const UserProvider = props => {


    return (
        <UserContext.Provider>
            {props.children}
        </UserContext.Provider>)
}



