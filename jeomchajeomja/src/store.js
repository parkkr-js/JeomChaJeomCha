import { combineReducers, configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/book/booksSlice";
import shoppingCartReducer from "./features/shoppingCart/shoppingCartSlice";

export default configureStore({
  reducer: combineReducers({
    book: booksReducer,
    shoppingCart: shoppingCartReducer,
  }),
});
