import { useContext, useState, useReducer } from "react";
import { UserContext, USER } from "contexts/UserContext";
import { getItemFromLS } from "helper/utility/LSitems";
import { SIGN_UP } from "reducers/UserReducer";
import { Link, useNavigate } from "react-router-dom";
import AuthReducer, { INITIAL_STATE, SET_USER } from "reducers/AuthReducer";

const SignUp = () => {
    const userFromLS = getItemFromLS(USER) || '[]';
    let parsedUserFromLS = JSON.parse(userFromLS);

    const [{ signingUpUser }, dispatchSignUpUser] = useReducer(AuthReducer, INITIAL_STATE);
    const [repeatedUser, setRepeatedUser] = useState('')
    const [{ users }, dispatch] = useContext(UserContext)
    const navigate = useNavigate();

    const handleInput = (e) => {
        dispatchSignUpUser({
            type: SET_USER,
            payload: { ...signingUpUser, [e.target.name]: e.target.value }
        })
    }

    const userSignUp = (e) => {
        e.preventDefault();
        const isUserExist = users.find((user) => user.email === signingUpUser.email)
        if (isUserExist) {
            setRepeatedUser("This email already exists.")
        }
        else {
            const newUser = {
                fName: signingUpUser.fName,
                lName: signingUpUser.lName,
                email: signingUpUser.email,
                password: signingUpUser.password
            }
            dispatch({ type: SIGN_UP, payload: { user: newUser } })
            parsedUserFromLS.push(newUser)
            localStorage.setItem(USER, JSON.stringify(parsedUserFromLS))
            setRepeatedUser('');
            alert('Successfully signed up!')
            navigate('/signin')
        }

    }

    return (
        <div className="background">
            <form className="authentication-form" onSubmit={(event) => userSignUp(event)}>
                <h4 className="create-account">Sign Up</h4>
                <div className="authentication-name">
                    <input type="text" name="fName" value={signingUpUser.fName} className="name" placeholder="First Name" onChange={(event) => handleInput(event)} required />
                    <input type="text" name="lName" value={signingUpUser.lName} className="name" placeholder="Last Name" onChange={(event) => handleInput(event)} required />
                </div>
                <input type="email" name="email" value={signingUpUser.email} className="email" placeholder="Email" onChange={(event) => handleInput(event)} required />
                <small name='repeatedUser' className="email-validation">{repeatedUser}</small>
                <input type="password" name="password" value={signingUpUser.password} className="password" placeholder="Password" onChange={(event) => handleInput(event)} required />
                <input type='submit' className="sign-up-btn" value={'Join Now'} />
                <h6 className="sign-in">Already have an Account? <Link to={'/signin'}>Sign In</Link></h6>
            </form>
        </div>
    )
}

export default SignUp;