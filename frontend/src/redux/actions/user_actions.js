import * as actionTypes from "../constants/user_constant";
import axios from "axios";

const get_users = () => async (dispatch) => {
    try{
        dispatch({
            type: actionTypes.GET_USERS_REQUEST
        });
        const {data} = await axios.get(`/api/users`);
        dispatch({
            type: actionTypes.GET_USERS_SUCCESS,
            payload: data
        });
    }
    catch(error){
        dispatch({
            type: actionTypes.GET_USERS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};

const set_user = (email) => async (dispatch, getState) => {
    let user_data = null;
    while(!(user_data && user_data !== null)){
        const {data} = await axios.get(`/api/users`);
        user_data = data.find(user => 
            user.email === email
        );
    }
    dispatch({
        type: actionTypes.SET_USER,
        payload: user_data
    });
    localStorage.setItem("user", JSON.stringify(getState().user.userInfo));
};

const reset_user = () => async (dispatch, getState) => {
    dispatch({
        type: actionTypes.RESET_USER,
    });
    localStorage.setItem("user", JSON.stringify(getState().user.userInfo));
};

const add_user = (userInfo) => async () => {
    await axios.post(`/api/users/signup`, userInfo);
};

const confirm_user = (confirmationCode) => async (dispatch, getState) => {
    await axios.post(`/api/users/confirm/${confirmationCode}`, {confirmationCode: confirmationCode});
    let user_data = null;
    while(!(user_data && user_data !== null && user_data.status === "Active")){
        const {data} = await axios.get(`/api/users`);
        user_data = data.find(user => 
            user.confirmationCode === confirmationCode
        );
    }
    dispatch({
        type: actionTypes.SET_USER,
        payload: user_data
    });
    localStorage.setItem("user", JSON.stringify(getState().user.userInfo));
}

const confirm_pending_user = (userInfo) => async (dispatch, getState) => {
    await axios.post(`/api/users/confirm`, userInfo);
    let user_data = null;
    while(!(user_data && user_data !== null && user_data.status === "Active")){
        const {data} = await axios.get(`/api/users`);
        user_data = data.find(user => 
            user.email === userInfo.email
        );
    }
    dispatch({
        type: actionTypes.SET_USER,
        payload: user_data
    });
    localStorage.setItem("user", JSON.stringify(getState().user.userInfo));
}


export {get_users, set_user, reset_user, add_user, confirm_user, confirm_pending_user};