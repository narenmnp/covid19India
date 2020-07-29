import { combineReducers } from 'redux';
import covid19Reducer from './modules/dashboard/dashboardReducer'

export const initialState = {
    covid19Reducer: []
};

export const rootReducer = combineReducers({
    covid19Reducer
});



