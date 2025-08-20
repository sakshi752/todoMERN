import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./Reducers/AuthReducer";
import { TodoReducer } from "./Reducers/TodoReducer.js/TodoReducer";


const rootReducer = combineReducers({
    auth:authReducer,
    todos:TodoReducer
})

export default rootReducer;