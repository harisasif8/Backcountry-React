export const SET_USER = 'SET_USER'
export const LOGIN_USER = 'LOGIN_USER'

export const INITIAL_STATE = {
    signingUpUser: {
        fName: '',
        lName: '',
        password: '',
        email: '',
    },

    loginUser: {
        password: '',
        email: ''
    }

}

const AuthReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_USER:
            return {
                ...state,
                signingUpUser: payload
            };
        case LOGIN_USER:
            return {
                ...state,
                loginUser: payload
            }
        default:
            break;
    }

}

export default AuthReducer;