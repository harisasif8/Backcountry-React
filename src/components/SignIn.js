import { useContext, useState, useReducer } from "react";
import { UserContext, LOGGED_IN_USER } from "contexts/UserContext";
import { getItemFromLS } from "helper/utility/LSitems";
import { SIGN_IN } from "reducers/UserReducer";
import { Link } from "react-router-dom";
import AuthReducer, { INITIAL_STATE, LOGIN_USER } from "reducers/AuthReducer";

const SignIn = () => {
    const loggedInUserFromLS = getItemFromLS(LOGGED_IN_USER) || '[]'
    const parsedLoggedInUser = JSON.parse(loggedInUserFromLS);

    const [{ loginUser }, dispatchLoginUser] = useReducer(AuthReducer, INITIAL_STATE);
    const [{ users, isLoggedIn }, dispatch] = useContext(UserContext)
    console.log('isLoggedIn', isLoggedIn);


    const [validCredentials, setValidCredentials] = useState('')

    const handleInput = (e) => {
        dispatchLoginUser({ type: LOGIN_USER, payload: { ...loginUser, [e.target.name]: e.target.value } })
    }

    const userSignIn = (e) => {
        e.preventDefault()
        const isUserRegistered = users.find((user) => loginUser.email === user.email && loginUser.password === user.password)
        if (isUserRegistered) {
            dispatch({ type: SIGN_IN, payload: { loggedInUser: [isUserRegistered], loginStatus: true } })
            parsedLoggedInUser.push(isUserRegistered)
            localStorage.setItem(LOGGED_IN_USER, JSON.stringify(parsedLoggedInUser))
            alert('Successfully logged In')
            console.log('isLoggedIn', isLoggedIn);
        }
        else {
            setValidCredentials('Invalid Credentials')
        }
    }

    return (
        <div className="background">
            <form className="authentication-form" onSubmit={(event) => userSignIn(event)}>
                <h4 className="create-account">Sign In</h4>
                <input type="email" name="email" value={loginUser.email} className="email" placeholder="Email" onChange={(event) => handleInput(event)} required />
                <small className="email-validation">{validCredentials}</small>
                <input type="password" id="loginPw" name="password" value={loginUser.password} className="password" placeholder="Password" onChange={(event) => handleInput(event)} required />
                <input type='submit' className="sign-up-btn" value={'Sign In'} />
                <h6 className="sign-in">Dont' have an Account? <Link to={'signup'}>Sign Up</Link></h6>
            </form>
        </div>
    )
}

export default SignIn;