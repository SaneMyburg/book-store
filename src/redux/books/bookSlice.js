import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vP6BpPbWWYHkTwlTJFNs/books/';

const initialState = {
  books: [],
  isLoading: false,
  error: false,
  success: false,
};

const BooksDdata = (data) => {
  const newBook = [];

  data.forEach((item) => {
    const [id, [book]] = item;
    const { title, author, category } = book;

    newBook.push({
      id,
      title,
      author,
      category,
    });
  });
  return newBook;
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const { data } = await axios(baseUrl);
    const newBook = BooksDdata(Object.entries(data));
    return newBook;
  } catch (error) {
    return error;
  }
});

export const addBook = createAsyncThunk('books/addBook', async ({ id, title, author }) => {
  try {
    const { data } = await axios.post(baseUrl, {
      item_id: id,
      title,
      author,
      category: 'Fiction',
    });
    return data;
  } catch (error) {
    return error;
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    const { data } = await axios.delete(baseUrl + id);
    return data;
  } catch (error) {
    return error;
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: action.payload,
      }))
      .addCase(fetchBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }))
      .addCase(addBook.pending, (state) => ({
        ...state,
        success: false,
      }))
      .addCase(addBook.fulfilled, (state) => ({
        ...state,
        success: true,
      }))
      .addCase(addBook.rejected, (state) => ({
        ...state,
        success: false,
      }))
      .addCase(removeBook.pending, (state) => ({
        ...state,
        success: false,
      }))
      .addCase(removeBook.fulfilled, (state) => ({
        ...state,
        success: true,
      }))
      .addCase(removeBook.rejected, (state) => ({
        ...state,
        success: false,
      }));
  },
});

export const bookReducer = bookSlice.reducer;
