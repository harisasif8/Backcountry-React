import { useContext, useState } from "react";
import getUserData from "helper/utility/getUserData";
import { UserContext, LOGGED_IN_USER } from "contexts/UserContext";
import { getItemFromLS } from "helper/utility/LSitems";
import { SIGN_IN } from "reducers/userReducer";






const SignIn = () => {
    const loggedInUserFromLS = getItemFromLS(LOGGED_IN_USER) || '[]'
    const parsedLoggedInUser = JSON.parse(loggedInUserFromLS)
    const [isLoggedIn, setIsLoggedIn] = useState(null)
    const [{ users, loggedInUser }, dispatch] = useContext(UserContext)
    console.log('users', users);



    const userSignIn = (e) => {
        e.preventDefault()
        const loginEmail = getUserData('loginEmail')
        const loginPassword = getUserData('loginPw')
        const isUserValid = document.getElementById('userValidation')
        const isUserRegistered = users.find((user) => user.email === loginEmail && user.password === loginPassword)
        console.log('isUserRegistered', isUserRegistered);
        if (isUserRegistered) {
            dispatch({ type: SIGN_IN, payload: { loggedInUser: [isUserRegistered] } })
            parsedLoggedInUser.push(isUserRegistered)
            localStorage.setItem(LOGGED_IN_USER, JSON.stringify(parsedLoggedInUser))
        }
        else {
            isUserValid.innerHTML = 'Wrong Credentials.'
        }



    }

    return (
        <div className="body" onSubmit={(event) => userSignIn(event)}>
            <form className="authentication-form">
                <h4 className="create-account">Sign In</h4>
                <input type="email" id="loginEmail" className="email" placeholder="Email" required />
                <small id="userValidation" className="email-validation"></small>
                <input type="password" id="loginPw" className="password" placeholder="Password" required />
                <input type='submit' className="sign-up-btn" value={'Sign In'} />
                <h6 className="sign-in">Dont' have an Account? <a>Sign Up</a></h6>
            </form>
        </div>
    )
}

export default SignIn;