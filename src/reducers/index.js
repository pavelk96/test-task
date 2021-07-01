const initialState = {
    isAuthenticated: true,
    temperatures: [
        {id: "test", degree: "temp"},
        {id: "test2", degree: "temp2"}
    ],
    users: [
        {id:"1", login: "admin"},
        {id:"2", login: "user"},
    ]
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

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
            console.log(action.data)
             if (action.method === "temperatures" && action.data !== "") {
                const newItem = state.temperatures[action.payload].degree = action.data;
                return {...state, newItem}
             } else if (action.method === "users" && action.data !== "") {
                 const newItem = state.users[action.payload].login = action.data;
                 return {...state, newItem}
             } else {
                 return state
             }

        default:
            return state;
    }
    }

export default reducer;