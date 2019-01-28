import {combineReducers} from 'redux';

const user = (state = {authorized: false, userId:null, userName:null, userInfo:{}}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authorized: true,
                userId: action.payload.user.id,
                userName: action.payload.user.name
            };
        case 'LOGIN_FAILED':
            return {
                ...state,
                authorized: false,
            };
        case 'PROFILE_SUCCESS':
            return {
                ...state,
                userInfo: action.payload
            };

        default:
            return state
    }
};

const errors = (state = {showMessage:false,errorText:""}, action)=>{
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                showMessage: false,
                errorText: ""
            };
        case 'LOGIN_FAILED':
            return {
                ...state,
                showMessage: true,
                errorText: "Имя пользователя или пароль введены не верно"
            };
        case 'NETWORK_ERROR':
            return {
                ...state,
                showMessage: true,
                errorText: "Сервер не доступен"
            };
        default:
            return state
    }
};


export default combineReducers({
    errors,
    user
});