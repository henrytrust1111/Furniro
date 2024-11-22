import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  Cart: [],
};

const ProductState = createSlice({
  name: "product",
  initialState,
  reducers: {
    DB: (state, { payload }) => {
      state.products = payload;
      console.log("Dispatched payload:", payload);
    },
    userProfile: (state, { payload }) => {
      state.userProfile = payload;
      console.log(payload);
    },
  },
});

export const { DB, getAllStates, userProfile } = ProductState.actions;
export default ProductState.reducer;
