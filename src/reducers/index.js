
const initialState = {
    isAuthenticated: false,
    temperatures: [
        {id: "312", degree: "22"},
        {id: "424", degree: "34"},
        {id: "122", degree: "112"},
        {id: "421", degree: "69"},
        {id: "666", degree: "54"},
        {id: "442", degree: "35"},
        {id: "111", degree: "31"},
        {id: "776", degree: "65"},

    ],
    users: [
        {id:"1", login: "admin"},
        {id:"2", login: "user"},
        {id:"3", login: "user"},
        {id:"4", login: "user"},
        {id:"6", login: "user"},
        {id:"7", login: "user"},
        {id:"8", login: "user"}
    ],
    isLoadingLogin: false,
    error: ""
};


const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'LOGOUT':
            localStorage.removeItem("login")
            return {
                ...state,
                isAuthenticated: false
            }

        case 'CHECK_LOGIN':
            if (localStorage.getItem("login")){
                return {
                    ...state,
                    isAuthenticated: true
                }
            }
            return state

        case 'LOGIN_REQUEST':
            return {
                ...state,
                isLoadingLogin: true
            }

        case 'LOGIN_SUCCESS' :
            return {
                ...state,
                isLoadingLogin: false,
                isAuthenticated: true
            }

        case 'LOGIN_ERROR' :
            return {
                ...state,
                error: action.payload,
                isLoadingLogin: false
            }

        case 'REGISTRATION_REQUEST':
            return {
                ...state,
                isLoadingLogin: true
            }

        case 'REGISTRATION_SUCCESS':
            return {
                ...state,
                isLoadingLogin: false,
                isAuthenticated: true
            }
        case 'REGISTRATION_ERROR':
            return {
                ...state,
                error: action.payload,
                isLoadingLogin: false
            }

        case `DELETE_LINE`:
            console.log(action.payload)
            if (action.payload.method === "temperatures") {
                const newArr = [
                    ...state.temperatures.slice(0, action.payload.index),
                    ...state.temperatures.slice(action.payload.index + 1)
                ]
                return {...state, temperatures: newArr}
            } else if (action.payload.method === "users") {
                const newArr = [
                    ...state.users.slice(0, action.payload.index),
                    ...state.users.slice(action.payload.index + 1)
                ]
                return {...state, users: newArr}
            }
            return state;

        case 'SAVE_LINE' :
            const { data, method, index} = action.payload;
             if (method === "temperatures" && data !== "") {
                 const arr = state.temperatures;
                 arr.splice(index, 1, {id: data.arg1, degree: data.arg2})
                return {...state, temperatures: arr}
             } else if (method === "users" && data.arg1 !== "" && data.arg2 !== "") {
                 const arr = state.users;
                 arr.splice(index, 1, {id: data.arg1, login: data.arg2})
                 return {...state, users: arr}
             } else {
                 return state
             }

        default:
            return state;
    }
    }

export default reducer;