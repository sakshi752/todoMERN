const initialState = {
    data: null
}
export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TODO_REDUCER":
            return {
                data: action.payload.data
            }
        default:
            return state
    }
}