import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import projectReducer from "./reducer";

const rootReducer = combineReducers({
    project: projectReducer
})
export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))