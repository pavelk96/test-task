const initialState = {

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