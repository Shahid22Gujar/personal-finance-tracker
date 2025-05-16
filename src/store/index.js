// used reduxToolkit because it advance the state management in react than tranditional redux
import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../slices/dashboardSlice';
import transactionReducer from '../slices/transactionSlice';
import budgetReducer from '../slices/budgetSlice';
import profileSettingReducer from '../slices/profileSettingSlice'
import reportsReducer from '../slices/reportsSlice'

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    transaction:transactionReducer,
    budget:budgetReducer,
    setting:profileSettingReducer,
    reports:reportsReducer
  },
});

export default store;