


const SignUp = () => {
    return (
        <div>
            <form className="authentication-form">
                <h2 className="create-account">Create your Account</h2>

                <div className="authentication-name">
                    <input type="text" id="fname" className="name" placeholder="First Name" required />
                    <input type="text" id="fname" className="name" placeholder="Last Name" required />
                </div>
                <input type="email" id="email" className="email" placeholder="Email" required />
                <input type="email" id="email" className="email" placeholder="Password" required />
                <input type='button' className="sign-up-btn" value={'Join Now'} />
                <h4 className="sign-in">Already have an Account? <a>Sign In</a></h4>

            </form>
        </div>
    )
}

export default SignUp;