
const initialState = {
    isAuthenticated: false,
    temperatures: [
        {id: "test", degree: "temp"},
        {id: "test2", degree: "temp2"}
    ],
    users: [
        {id:"1", login: "admin"},
        {id:"2", login: "user"},
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
            if (action.method === "temperatures") {
                const newArr = [
                    ...state.temperatures.slice(0, action.payload),
                    ...state.temperatures.slice(action.payload + 1)
                ]
                return {...state, temperatures: newArr}
            } else if (action.method === "users") {
                const newArr = [
                    ...state.users.slice(0, action.payload),
                    ...state.users.slice(action.payload + 1)
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