import * as actionTypes from "../constants/cart_constant";
import axios from "axios";

const get_cart = () => async (dispatch, getState) => {
    const userInfo = getState().user.userInfo;
    const cart = [];
    for(let i=0; i<userInfo.cartProduct.length; i++){
        cart.push({
            product: userInfo.cartProduct[i],
            price: userInfo.cartPrice[i],
            quantity: userInfo.cartQuantity[i]
        });
    }
    dispatch({
        type: actionTypes.SET_CART,
        payload: cart
    });
    localStorage.setItem("cart", JSON.stringify(cart));
}

const add_to_cart = (id, quantity) => async (dispatch, getState) => {
    const userInfo = getState().user.userInfo;
    const {data} = await axios.get(`/api/products/${id}`);
    // console.log(data);
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            price: data.price,
            quantity
        }
    });
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
    const cartProduct = [];
    const cartPrice = [];
    const cartQuantity = [];
    getState().cart.cartItems.map(item => {
            cartProduct.push(item.product);
            cartPrice.push(item.price);
            cartQuantity.push(item.quantity)
        }
    )
    const cartInfo = {
        _id: userInfo._id,
        cartProduct: cartProduct,
        cartPrice: cartPrice,
        cartQuantity: cartQuantity,
    };
    // console.log(cartInfo);
    await axios.post(`/api/users/cart`, cartInfo);
};

const add_to_customer = (id, quantity) => async (dispatch, getState) => {
    const userInfo = getState().user.userInfo;
    const {data} = await axios.get(`/api/products/${id}`);
    // console.log(data);
    // console.log(quantity);
    const existCustomer = data.customerId.find(customerId => customerId === userInfo._id);
    // console.log(existCustomer);
    // console.log(data.customerId.findIndex(customerId => customerId === userInfo._id));
    // console.log(data.customerQuantity.splice(data.customerId.findIndex(customerId => customerId === userInfo._id), 1, quantity));
    const customerId = existCustomer?(data.customerId):([...data.customerId, userInfo._id]);
    let customerQuantity;
    if(existCustomer){
        data.customerQuantity.splice(data.customerId.findIndex(customerId => customerId === userInfo._id), 1, quantity);
        customerQuantity = data.customerQuantity;
    }
    else{
        customerQuantity = [...data.customerQuantity, quantity];
    }
    const customerInfo = {
        _id: data._id,
        customerId: customerId,
        customerQuantity: customerQuantity
    };
    console.log(customerInfo);
    await axios.post(`/api/products/customer`, customerInfo);
};

const remove_from_cart = (id) => async (dispatch, getState) => {
    const userInfo = getState().user.userInfo;
    const {data} = await axios.get(`/api/products/${id}`);
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
    const cartProduct = [];
    const cartPrice = [];
    const cartQuantity = [];
    getState().cart.cartItems.map(item => {
            cartProduct.push(item.product);
            cartPrice.push(item.price);
            cartQuantity.push(item.quantity)
        }
    )
    const cartInfo = {
        _id: userInfo._id,
        cartProduct: cartProduct,
        cartPrice: cartPrice,
        cartQuantity: cartQuantity,
    };
    const removeIndex = data.customerId.findIndex(customerId => customerId === userInfo._id);
    const customerId = data.customerId.splice(removeIndex, 1);
    const customerQuantity = data.customerQuantity.splice(removeIndex, 1);
    const customerInfo = {
        _id: data._id,
        customerId: customerId,
        customerQuantity: customerQuantity
    };
    await axios.post(`/api/users/cart`, cartInfo);
    await axios.post(`/api/products/customer`, customerInfo);
};

export {get_cart, add_to_cart, add_to_customer, remove_from_cart};