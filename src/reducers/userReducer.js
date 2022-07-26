

export const SIGN_UP = 'SIGN_UP'

export const initialUserState = {
    user: [{
        email: '',
        password: ''
    }]
}

const UserReducer = (state, action) => {
    const { type, state } = action;

    switch (type) {
        case SIGN_UP:
            return {
               ...state,

            }
    }
}