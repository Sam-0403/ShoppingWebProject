import * as actionTypes from "../constants/product_constant";
import axios from "axios";

const get_products = () => async (dispatch) => {
    try{
        dispatch({
            type: actionTypes.GET_PRODUCTS_REQUEST
        });
        const {data} = await axios.get("/api/products");
        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        });
    }
    catch(error){
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};

const get_product_details = (id) => async (dispatch) => {
    try{
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_REQUEST
        });
        const {data} = await axios.get(`/api/products/${id}`);
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
            payload: data
        });
    }
    catch(error){
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};

const remove_product_details = () => async (dispatch) => {
    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_RESET
    });
};

export {get_products, get_product_details, remove_product_details};