import { createSlice } from '@reduxjs/toolkit';
import { addToCart, loadCartFromLocalStorage, removeFromCart } from './actions';
import { getItem } from '../../utils';

export interface Cart {
  id: string | number;
  name: string;
  image: string;
  info: string;
}

export interface CartState {
  cart: Cart[];
  count: number;
}

const initialState: CartState = {
  cart: [],
  count: 0,
};

const cartStore = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart, (state, { payload }) => {
      state.cart = payload;
      state.count += 1;
    });
    builder.addCase(removeFromCart, (state, { payload }) => {
      state.cart = payload;
      state.count -= 1;
    });
    builder.addCase(loadCartFromLocalStorage, (state, { payload }) => {
      state.cart = payload;
      state.count = payload.length;
    });
  },
});

export default cartStore.reducer;
