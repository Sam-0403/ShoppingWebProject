import * as actionTypes from "../constants/product_constant";

const get_products_reducer = (state = {products: []}, action) => {
    switch(action.type){
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            };
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            };
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

const get_product_details_reducer = (state = {product: {}}, action) => {
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true
            };
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload
            };
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return {
                product: {}
            };
        default:
            return state;
    }
}

export {get_products_reducer, get_product_details_reducer};