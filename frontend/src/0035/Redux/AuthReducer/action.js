import axios from "axios";
import { SET_AUTH_TOKEN } from "./actionType";
import { BASEURL } from "../../../0568/utils";
export const getLogin = (userData) => async (dispatch) => {
	try {
		const { data } = await axios.post(`${BASEURL}/users/login`, userData);
		console.log(data.token);
		localStorage.setItem("token", data.token);
		dispatch({ type: SET_AUTH_TOKEN, payload: data.token });
		alert("Login Successfull");
	} catch (err) {
		alert("Login Failed");
		return err.message;
	}
};


export const getRegister = async (userData) => {
	try {
		await axios.post(`${BASEURL}/users/register`, userData);
	} catch (err) {
		console.log(err);
	}
};

