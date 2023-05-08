import axios from "axios";
import {
	Get_Product_Success,
	Patch_product_success,
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
		.post(`http://localhost:3000/api/products/create`, data)
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
		.get(`https://diagnostic-boiled-shift.glitch.me/mens`, paramObj)
		.then((res) => {
			dispatch({ type: Get_Product_Success, payload: res.data });
		})
		.catch(() => {
			dispatch({ type: Product_Failure });
		});
};

export const Patchproduct = (dataObj, id) => (dispatch) => {
	dispatch({ type: Product_Req });
	axios
		.patch(`http://localhost:8080/MenKids/${id}`, dataObj)
		.then(() => {
			dispatch({ type: Patch_product_success });
		})
		.catch(() => {
			dispatch({ type: Product_Failure });
		});
};

export const deleteProduct = (id) => (dispatch) => {
	dispatch({ type: Product_Req });
	axios
		.delete(`http://localhost:8080/MenKids/${id}`)
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

export const deleteCart = (id) => {
	return axios
		.delete(`${BASEURL}/cart/delete/${id}`)
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
