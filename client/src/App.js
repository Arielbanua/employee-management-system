import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import EmployeeDataPage from './pages/AdminEmployeePage';
import AppRoutes from './routes';
import { checkAuthState } from './actions/accountActions';
import AlertNotification from './components/Alert/Alert';

import reducers from './reducers';
import { AlertTitle } from '@mui/material';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch]);

  return (
    <>
      <AppRoutes />
      <AlertNotification />
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
