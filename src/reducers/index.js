const initialState = {
    isAuthenticated: false,
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

        case `LOGOUT_USER`:
            return state;

        default:
            return state;
    }
    }

export default reducer;