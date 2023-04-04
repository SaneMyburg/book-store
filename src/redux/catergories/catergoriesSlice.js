import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catergories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: ({ categories }) => {
      if (categories.length < 1) {
        return 'Under construction';
      }
      return categories;
    },
  },
});

export default categoriesSlice;
