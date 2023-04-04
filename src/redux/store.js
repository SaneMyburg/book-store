import { configureStore } from '@reduxjs/toolkit';
import catergoriesSlice from './catergories/catergoriesSlice';
import bookSlice from './books/bookSlice';

const store = configureStore({
  reducer: {
    book: bookSlice,
    category: catergoriesSlice,
  },
});

export default store;
