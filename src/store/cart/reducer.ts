import { createSlice } from '@reduxjs/toolkit';
import { addToCart } from './actions';

export interface Cart {
  id: string | number;
  name: string;
  image: string;
  info: string;
}

export interface CartState {
  cart: Cart[];
}

const initialState: CartState = {
  cart: [],
};

const cartStore = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart, (state, { payload }) => {
      console.log({ payload });
      state.cart = payload;
    });
  },
});

export default cartStore.reducer;
