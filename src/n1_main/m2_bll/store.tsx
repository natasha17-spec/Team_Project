import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import loginReducer from "./Reducers/loginReducer";
import registerReducer from "./Reducers/loginReducer";
import recoveryReducer from "./Reducers/recoveryReducer";
import newPassReducer from "./Reducers/newPassReducer";
import profileReducer from "./Reducers/profileReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    recoveryPass: recoveryReducer,
    newPass: newPassReducer,
    profile: profileReducer,
})
export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))