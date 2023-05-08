import { legacy_createStore, combineReducers, applyMiddleware } from "redux"



import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as ProductReducer } from "./ProductReducer/reducer"


import thunk from "redux-thunk"
const rootReducer = combineReducers({
	ProductReducer,
	authReducer,
});



export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));