import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categories/categoriesSlice';
import { bookReducer } from './books/bookSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoriesSlice,
  },
});

export default store;
