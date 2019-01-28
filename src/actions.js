const authURI = "https://fast-fjord-69046.herokuapp.com/login";
const profileURI = "https://fast-fjord-69046.herokuapp.com/api/v1/user-info/";

export const logIn = (data) => dispatch => {
    dispatch({
        type: "ATTEMPTING_USER_LOGIN" //TODO: implement fetching state and animation
    });
    fetch(authURI, { //TODO: Replace with cross-browser solution
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then((response) => {
        console.log(response);
        if (!response.status) {
            let el = document.getElementById("passwordField");
            el.value = "";
            dispatch({
                type: "LOGIN_FAILED",
                message: "Имя пользователя или пароль введены не верно"
            });
        } else {
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: response.data
            });
            dispatch(getInfo(response.data.user.id))
        }
    }).catch(()=>{
        dispatch({
            type: "NETWORK_ERROR"
        })
    });
};
const getInfo = (id) => dispatch => {
    dispatch({
        type: "GETTING_USER_PROFILE"
    });
    fetch(profileURI+id, { //TODO: Replace with cross-browser solution
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then((response) => {
        console.log(response);
        if (!response.status) {
            dispatch({
                type: "PROFILE_FAILED",
                message: "Пользователь не найден"
            });
        } else {
            dispatch({
                type: "PROFILE_SUCCESS",
                payload: response.data
            })
        }
    }).catch(()=>{
        dispatch({
            type: "NETWORK_ERROR"
        })
    });
};
