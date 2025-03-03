const employeesReducer = (employees = [], action) => {
    switch (action.type) {
        case 'FETCH_EMPLOYEES':
            console.log("From FETCH_EMPLOYEES:",action.payload)
            return action.payload;
        case 'CREATE_EMPLOYEE':
            console.log("From CREATE_EMPLOYEES:",action.payload)
            return [...employees, action.payload];
        case 'DELETE_EMPLOYEE':
            return employees.filter((employee) => employee.id !== action.payload);
        case 'UPDATE_EMPLOYEE':
            return employees.map((employee) => 
                employee.id === action.payload.id ? action.payload : employee
            );
        default:
            return employees;
    }
}

export default employeesReducer