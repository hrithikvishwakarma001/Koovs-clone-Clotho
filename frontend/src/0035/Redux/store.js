import { legacy_createStore, combineReducers, applyMiddleware } from "redux"



import { reducer as loginReducer } from "./AuthReducer/reducer";
import { reducer as ProductReducer } from "./ProductReducer/reducer"


import thunk from "redux-thunk"
const rootReducer = combineReducers({
    ProductReducer,
    loginReducer,

})



export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));