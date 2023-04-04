import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [{
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  }],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => ({
      ...state,
      books: [...state.books, payload],
    }),
    removeBook: (state) => {
      const { books } = state;
      if (books.length < 1) {
        return bookSlice;
      }
      return { ...state, books: books.slice(0, -1) };
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export const bookReducer = bookSlice.reducer;
