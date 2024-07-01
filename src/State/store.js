import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Authentication/Reducer";

// Register the Auth User
const rootReducers = combineReducers({
    auth:authReducer
})

const store = legacy_createStore(rootReducers, applyMiddleware(thunk))