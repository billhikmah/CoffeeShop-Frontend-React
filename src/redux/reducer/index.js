import {combineReducers} from "redux"

import cartReducer from "./addToCart";
import counterReducer from "./counter";
import login from "./loginStatus";

const reducers = combineReducers({
    cart: cartReducer,
    counter: counterReducer,
    login: login
})

export default reducers