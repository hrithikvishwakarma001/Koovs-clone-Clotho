import { SET_AUTH_TOKEN } from "./actionType";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_AUTH_TOKEN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.id,
        token: action.payload.token,
      };
    default:
      return state;
  }
};


