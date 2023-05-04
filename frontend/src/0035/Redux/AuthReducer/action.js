import axios from "axios";
import { SET_AUTH_TOKEN } from "./actionType";


export const getToken = (email, password) => (dispatch) => {
  axios.post(`https://reqres.in/api/register`, { email, password }).then((res) => { dispatch({ type: SET_AUTH_TOKEN, payload: res.data }) }).then((err) => console.log(err));


}

