export const openModal = (employeeId) => ({
  type: 'OPEN_MODAL',
  payload: employeeId,
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
}); 