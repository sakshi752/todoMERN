const initialState = {
    user: null,

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {

            };
        default:
            return state
    }
}