const initialState = {
    data: []
}
export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TODO_REDUCER":
            return {
                data: action.payload
            }
        default:
            return state
    }
}