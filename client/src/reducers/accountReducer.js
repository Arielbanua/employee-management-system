const initialState = {
    account: null,
    error: null,
    isAdmin: false,
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { 
                ...state, 
                account: action.payload, 
                error: null,
                isAdmin: action.payload.role === 'admin' // Check if the user is an admin
            };
        case 'LOGIN_FAIL':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default accountReducer;
