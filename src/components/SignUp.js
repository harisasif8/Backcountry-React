import { useContext } from "react";
import { UserContext, USER } from "contexts/UserContext";
import { getItemFromLS } from "helper/utility/LSitems";
import getUserData from "helper/utility/getUserData";
import { SIGN_UP } from "reducers/userReducer";

const SignUp = () => {
    const userFromLS = getItemFromLS(USER) || '[]';
    let parsedUserFromLS = JSON.parse(userFromLS);

    const [{ users }, dispatch] = useContext(UserContext)

    const userSignUp = (e) => {
        e.preventDefault();
        const fName = getUserData('fname');
        const lName = getUserData('lname');
        const email = getUserData('email');
        const password = getUserData('pw');
        const repeatedUser = document.getElementById('repeatedUser')
        const isUserExist = users.find((user) => user.email === email)

        if (isUserExist) {
            repeatedUser.innerHTML = "This email already exists."
        }

        else {
            const newUser = {
                fName: fName,
                lName: lName,
                email: email,
                password: password
            }
            dispatch({ type: SIGN_UP, payload: { users: [newUser] } })
            parsedUserFromLS.push(newUser)
            localStorage.setItem(USER, JSON.stringify(parsedUserFromLS))
            repeatedUser.innerHTML = '';
            alert('Successfully signed up!')
        }

    }
    console.log('parsedUserFromLS', parsedUserFromLS);
    console.log('users', users);

    return (
        <div>
            <form className="authentication-form" onSubmit={(event) => userSignUp(event)}>
                <h4 className="create-account">Sign Up</h4>
                <div className="authentication-name">
                    <input type="text" id="fname" className="name" placeholder="First Name" required />
                    <input type="text" id="lname" className="name" placeholder="Last Name" required />
                </div>
                <input type="email" id="email" className="email" placeholder="Email" required />
                <small id="repeatedUser" className="email-validation"></small>
                <input type="password" id="pw" className="password" placeholder="Password" required />
                <input type='submit' className="sign-up-btn" value={'Join Now'} />
                <h6 className="sign-in">Already have an Account? <a>Sign In</a></h6>
            </form>
        </div>
    )
}

export default SignUp;