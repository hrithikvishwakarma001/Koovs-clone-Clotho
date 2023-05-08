import axios from "axios";
import { SET_AUTH_TOKEN } from "./actionType";
import { BASEURL } from "../../../0568/utils";


export const getToken = (email, password) => (dispatch) => {
  axios.post(`${BASEURL}/register`, { email, password }).then((res) => {

     dispatch({ type: SET_AUTH_TOKEN, payload: res.data })
     
   }).then((err) => console.log(err));


}

