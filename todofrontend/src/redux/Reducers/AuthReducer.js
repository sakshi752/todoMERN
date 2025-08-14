const initialState = {
    user: null,
    token:"dasd"
}

export  const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state, // keep other properties unchanged
                user: action.payload.user,   // store the user data
                token: action.payload.token   // store the token
            };
        default:
            return state
    }
}