// import axios from "axios";
// import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from "../helpers/endpoints";

// import { LOGIN_ENDPOINT } from "../helpers/endpoints";

// import { SET_CURRENT_USER } from "./types";
// import jwt_decode from 'jwt-decode';
// import setAuthToken from '../helpers/setAuthToken';
import { SET_CURRENT_USER } from "./types";

// import {usuario} from "../usuario.json"

const initialState = {
    user: 
        {   email: "julio@gmail.com", 
            password: "1234" 
        } 
}

export const loginUser = (userData) => dispatch => {
   
    // console.log(userData);
    // console.log(userData)

    return new Promise((resolve, reject) => {
            
        // console.log("AutActions     ")
            if (userData["email"] === initialState.user["email"] && userData["password"] === initialState.user["password"])
            {
                dispatch(setCurrentUser({  loggedIn: true }));
                return;
            }else {
                alert("Los datos suministrados son incorrectos, Por favor Intente nuevamente, Gracias")
            }
    }); 
}

export const setCurrentUser = ({  loggedIn }) => {
    return {
        type: SET_CURRENT_USER,
        payload: {  loggedIn }
    };
}


export const logoutUser = () => dispatch => {
    dispatch(setCurrentUser({
        user: {},
        loggedIn: false 
              
    }));
}