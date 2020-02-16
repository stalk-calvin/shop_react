import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './toggle/toggle.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})