const  deleteLine = (index, method) => {
    return {
        type: 'DELETE_LINE',
        payload: {index, method}
    };
};

const saveLine = (index, method, data) => {
    return {
        type: 'SAVE_LINE',
        payload: {index, method, data}
    }
};

const loginRequst = () => {
    return{
        type: "LOGIN_REQUEST"
    }
};

const loginSuccess = () => {
    return{
        type: "LOGIN_SUCCESS"
    }
};

const loginError = (error) => {
    return{
        type: "LOGIN_ERROR",
        payload: error
    }
};

const fetchLogin = (dispatch) => async (login, password) =>  {
    dispatch(loginRequst());
    const response = await fetch(`/users?login=${login}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then(res => {
            dispatch(loginSuccess())
            return res.json()
        })
        .catch((error) => dispatch(loginError(error)))
    if (response.length > 0){
        if (response[0].password === password){
            localStorage.setItem("login", login)
        } else {
            console.log("Неверный пароль")
        }
    } else {
        console.log('Такого пользователя нет')
    }

};

const registrationRequest = () => {
    return{
        type: "LOGIN_REQUEST"
    }

};

const registrationSuccess = () => {
    return{
        type: "LOGIN_SUCCESS"
    }
};

const registrationError = (error) => {
    return{
        type: "LOGIN_ERROR",
        payload: error
    }
};

const fetchRegistration = (dispatch) => async (firstName, lastName, login, password) =>  {
    dispatch(registrationRequest());
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        login: login,
        password: password
    }
    await fetch(`/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }, body: JSON.stringify(newUser)
    })
        .then((res) => {
            dispatch(registrationSuccess())
            return res.json()
        })
        .catch((error) => dispatch(registrationError(error)))
    localStorage.setItem("login", login)
};

const checkLogin = () => {
    return {
        type: 'CHECK_LOGIN'
    }
};

const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export {deleteLine, saveLine, fetchLogin, fetchRegistration, checkLogin, logout};