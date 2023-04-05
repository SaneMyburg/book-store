import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 2,
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 3,
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push(payload);
    },
    removeBook: (state, action) => {
      const id = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => book.id !== id),
      };
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export const bookReducer = bookSlice.reducer;
