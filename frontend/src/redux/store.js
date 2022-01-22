import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

//Reducers
import cart_reducer from "./reducers/cart_reducer";
import {get_products_reducer, get_product_details_reducer} from "./reducers/product_reducer";
import {get_users_reducer, user_reducer} from "./reducers/user_reducer";

const reducer = combineReducers({
    cart: cart_reducer,
    user: user_reducer,
    getProducts: get_products_reducer,
    getProductDetails: get_product_details_reducer,
    getUsers: get_users_reducer
});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
const userFromLocalStorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []

const INITIAL_STATE = {
    cart: {
        cartItems: cartFromLocalStorage
    },
    user: {
        userInfo: userFromLocalStorage
    }
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;