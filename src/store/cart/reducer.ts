import { createSlice } from '@reduxjs/toolkit';
import { addToCart, removeFromCart } from './actions';

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
  },
});

export default cartStore.reducer;
