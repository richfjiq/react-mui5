import { combineReducers } from '@reduxjs/toolkit';

import { cartReducer } from './cart';

export const rootReducer = combineReducers({
  cart: cartReducer,
});
