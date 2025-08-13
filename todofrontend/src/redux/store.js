import persistReducer from "redux-persist/es/persistReducer"
import rootReducer from "./CombinedReducers"
import { createStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";


const persistConfig = {
    key:"root",
    storage
}

const persistedReducers = persistReducer(persistConfig,rootReducer);

export const store = createStore(persistReducer);
export const persistor = persistStore(store)