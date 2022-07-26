


const SignIn = () => {


    return (
        <div className="body">
            <form className="authentication-form">
                <h4 className="create-account">Sign In</h4>
                <input type="email" id="email" className="email" placeholder="Email" required />
                <input type="password" id="pw" className="email" placeholder="Password" required />
                <input type='button' className="sign-up-btn" value={'Sign In'} />
                <h6 className="sign-in">Dont' have an Account? <a>Sign Up</a></h6>
            </form>
        </div>
    )
}

export default SignIn;