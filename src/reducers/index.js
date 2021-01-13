import isLoggedReducer from './isLogged';
import {combineReducers} from 'redux';

export const allReducers = combineReducers({
    isLogged: isLoggedReducer
});