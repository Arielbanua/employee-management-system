const initialState = {
    message: null,
    severity: 'info'  
};

const notificationReducer = (notifications = initialState, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return {
                message: action.payload.message,
                severity: action.payload.severity
            };
        case 'CLEAR_NOTIFICATION':
            return initialState;
        default:
            return notifications;
    }
};

export default notificationReducer;
