import { combineReducers } from "redux";
import authReducer from './authReducers';
// import userPostReducer from "./userPostReducer";

export default combineReducers({
    auth: authReducer
    // ,
    // posts: userPostReducer
});