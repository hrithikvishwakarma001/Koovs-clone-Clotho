import axios from "axios";
import {
	Get_Product_Success,
	Product_Failure,
	Product_Req,
	Product_Success,
	Delete_product_success,
	ADD_TO_CART,
} from "./actionType";
import { BASEURL } from "../../../0568/utils";

export const addProduct = (data) => (dispatch) => {
	dispatch({ type: Product_Req });
	axios
		.post(`${BASEURL}/products/men/create`, data)
		.then(() => {
			dispatch({ type: Product_Success });
		})
		.catch(() => {
			dispatch({ type: Product_Failure });
		});
};

export const getProduct = (paramObj) => (dispatch) => {
	dispatch({ type: Product_Req });
	axios
		.get(`${BASEURL}/products/men`, paramObj)
		.then((res) => {
			// console.log('👻 -> file: action.js:29 -> .then -> res:', res.data)
			dispatch({ type: Get_Product_Success, payload: res.data.products });
		})
		.catch(() => {
			dispatch({ type: Product_Failure });
		});
};

export const deleteProduct = (id) => (dispatch) => {
	dispatch({ type: Product_Req });
	axios
		.delete(`${BASEURL}/products/men/${id}`)
		.then(() => {
			dispatch({ type: Delete_product_success, payload: id });
		})
		.catch(() => {
			dispatch({ type: Product_Failure });
		});
};

export const getCart = (token) => (dispatch) => {
	axios
		.get(`${BASEURL}/cart`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => {
			console.log("cart data", res.data.products);
			dispatch({ type: ADD_TO_CART, payload: res.data.products });
		})
		.catch((err) => {
			console.log(err.message);
		});
};

export const deleteCart = (id, token) => {
	return axios
		.delete(`${BASEURL}/cart/delete/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then(() => {
			console.log("data deleted from cart", id);
		})
		.catch((err) => console.log(err));
};

export const addToCart = (id, token) => (dispatch) => {
	try {
		axios
			.post(
				`${BASEURL}/cart/add/${id}`,
				{},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((res) => {
				console.log("cart data", res.data.products);
				// dispatch({ type: ADD_TO_CART, payload: res.data.products });
			})
			.catch((err) => {
				console.log(err.message);
			});
	} catch (error) {
		console.log(error);
	}
};

export const addOrder = (data, token) => {
	return axios
		.post(`${BASEURL}/orders/create`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => {
			console.log("order data", res.data);
			return res.data;
		})
		.catch((err) => {
			console.log(err.message);
		});
};
