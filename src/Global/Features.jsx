import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  Cart: [],
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
  },
});

export const { DB, blog, getAllStates, userProfile } = ProductState.actions;
export default ProductState.reducer;
