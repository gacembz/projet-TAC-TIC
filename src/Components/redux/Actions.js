// import { ADDSUJET,  DELETESUJET,  EDITSUJET, INSCRIRE } from "./Types"


// export const addsujet=(payload)=>{
// return{
// type:ADDSUJET,
// payload :payload,
// }
// }
// export const inscrire=(newinscrire)=>{
// return{
// type:INSCRIRE,
// payload :newinscrire,
// }
// }
// export const editsujet=(id,newedit)=>{
// return{
// type:EDITSUJET,
// payload:id,

// }
// }
// export const deleteSujet = id => {
//   return {
//     type: DELETESUJET,
//     payload:id,
//   };}
import {
  FAIL,
  GET_CURRENT,
  
  LOADING,
  LOGIN,
  LOGOUT,
  REGISTER,
  
} from "./Types";
import axios from "axios";
import { Navigate } from "react-router-dom";
export const register = (newUser, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/users/register", newUser);
    dispatch({ type: REGISTER, payload: res.data });
    navigate("/profile");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

// login

export const login = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/users/login", user);
    dispatch({ type: LOGIN, payload: res.data });
    navigate("/profile");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

// get current

export const getCurrent = () => async (dispatch) => {
  const config = {
    headers: {
      authentification: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/users/current", config);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};


// logout

export const logout = () => ({ type: LOGOUT });