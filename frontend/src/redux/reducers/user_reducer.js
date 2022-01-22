import * as actionTypes from "../constants/user_constant";

const get_users_reducer = (state = {users: []}, action) => {
    switch(action.type){
        case actionTypes.GET_USERS_REQUEST:
            return {
                loading: true,
                users: []
            };
        case actionTypes.GET_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload
            };
        case actionTypes.GET_USERS_FAIL:
            return {
                loading: false,
                users: action.payload
            };
        default:
            return state;
    }
}

const user_reducer = (state = {userInfo: []}, action) => {
    switch(action.type){
        case actionTypes.SET_USER:
            const user_info = action.payload;
            return {
                ...state,
                userInfo: user_info
            };
        case actionTypes.RESET_USER:
            return {
                ...state,
                userInfo: []
            };
        default:
            return state;
    }
}

export {get_users_reducer, user_reducer};