import { SET_AUTH_TOKEN } from "./actionType";

const initialState = {
  isAuth: false,
  token: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_AUTH_TOKEN:
      return {
			...state,
			isAuth: true,
			token: action.payload,
		};
    default:
      return state;
  }
};


