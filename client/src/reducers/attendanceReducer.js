const attendanceReducer = (attendances = [], action) => {
    switch (action.type) {
        case 'CREATE_ATTENDANCE':
            return [...attendances, action.payload];  
        case 'FETCH_ATTENDANCES':
            return action.payload; 
        default:
            return attendances;
    }
}

export default attendanceReducer;
