const initialState = {
  isOpen: false,
  employeeId: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      console.log('Opening modal with employeeId:', action.payload); 
      return { isOpen: true, employeeId: action.payload };
    case 'CLOSE_MODAL':
      console.log('Closing modal'); 
      return { isOpen: false, employeeId: null };
    default:
      return state;
  }
};

export default modalReducer; 