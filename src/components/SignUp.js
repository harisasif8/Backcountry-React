


const SignUp = () => {

    
    return (
        <div>
            <form className="authentication-form">
                <h4 className="create-account">Sign Up</h4>
                <div className="authentication-name">
                    <input type="text" id="fname" className="name" placeholder="First Name" required />
                    <input type="text" id="lname" className="name" placeholder="Last Name" required />
                </div>
                <input type="email" id="email" className="email" placeholder="Email" required />
                <input type="password" id="pw" className="email" placeholder="Password" required />
                <input type='button' className="sign-up-btn" value={'Join Now'} />
                <h6 className="sign-in">Already have an Account? <a>Sign In</a></h6>

            </form>
        </div>
    )
}

export default SignUp;