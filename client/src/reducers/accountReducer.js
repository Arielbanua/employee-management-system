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
                isAdmin: action.payload.user.role === 'admin' 
            };
        case 'LOGIN_FAIL':
            return { ...state, error: action.payload };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default accountReducer;
