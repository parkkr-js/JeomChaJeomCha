import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: [],
};

const shoppingCart = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.shoppingCart.push(action.payload);
    },
    removeCart: (state, action) => {
      state.shoppingCart.splice(action.payload, 1);
    },
    removeAllCart: (state) => {
      state.shoppingCart = [];
    },
    updateCart: (state, action) => {
      const index = state.shoppingCart.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        state.shoppingCart[index] = {
          ...state.shoppingCart[index],
          ...action.payload.data,
        };
      }
    },
  },
});

export const { addCart, removeCart, updateCart, removeAllCart } =
  shoppingCart.actions;
export default shoppingCart.reducer;
