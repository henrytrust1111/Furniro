import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
  blog: [],
};

const ProductState = createSlice({
  name: "product",
  initialState,
  reducers: {
    DB: (state, { payload }) => {
      state.products = payload;
      // console.log("Dispatched payload:", payload);
    },
    blog: (state, { payload }) => {
      state.blog = payload;
      // console.log(payload);
    },
    Cart: (state, { payload }) => {
      state.cart = payload;
      // console.log(payload);
    },
  },
});

export const { DB, blog, getAllStates, userProfile, Cart } = ProductState.actions;
export default ProductState.reducer;
