
export const showNotification = (message, severity) => (dispatch) => {
    dispatch({
        type: 'SET_NOTIFICATION',
        payload: { message, severity }
    });

    // Clear the notification after 3 seconds
    setTimeout(() => {
        dispatch({ type: 'CLEAR_NOTIFICATION' });
    }, 3000);
};
