import { combineReducers } from 'redux';
import { reducer } from './index.redux';
import { auth } from './auth.redux';

export default combineReducers({reducer, auth});