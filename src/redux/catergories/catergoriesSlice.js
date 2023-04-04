import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catergories: [],
};

const catergoriesSlice = createSlice({
  name: 'catergories',
  initialState,
  reducers: {
    checkStatus: ({ catergories }) => {
      if (catergories.length < 1) {
        return 'Under construction';
      }
      return catergories;
    },
  },
});

export default catergoriesSlice;
