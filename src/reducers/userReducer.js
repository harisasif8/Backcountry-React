

export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'

export const initialUserState = {
    users: [],
    loggedInUser: []
}

const UserReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case SIGN_UP:
            return {
                ...state,
                users: [...state.users, ...payload.users]
            }
        case SIGN_IN:
            return {
                ...state,
                loggedInUser: [...state.loggedInUser, ...payload.loggedInUser]
                // loggedInUser: [payload.loggedInUser]

            }

        default:
            throw new Error('No case for type')
    }
}

export default UserReducer;