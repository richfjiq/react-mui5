import { createSlice } from '@reduxjs/toolkit';

const cartStore = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {},
  // extraReducers: (builder) => {},
});

export default cartStore.reducer;
