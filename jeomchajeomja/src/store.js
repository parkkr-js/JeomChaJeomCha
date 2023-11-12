import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './features/book/booksSlice';

export default configureStore({
  reducer: {
    books: booksReducer,
  },
});

