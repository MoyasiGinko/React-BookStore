import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const KEY = 'eWWpOQYFfW4okklL3oVZ';
const FETCH_BOOKS = 'books/fetchBooks';
const ADD_BOOKS = 'books/addBook';
const REMOVE_BOOK = 'books/removeBook';

export const fetchBooks = createAsyncThunk(FETCH_BOOKS, async () => {
  const res = await axios.get(`${API_BASE_URL}/apps/${KEY}/books`);
  const booksArray = Object.entries(res.data).map(([id, info]) => ({
    id,
    ...info[0],
  }));

  return booksArray;
});

export const addBook = createAsyncThunk(ADD_BOOKS, async (bookData) => {
  const bookId = Date.now();

  const { title, author, category } = bookData;

  await axios.post(`${API_BASE_URL}/apps/${KEY}/books`, {
    item_id: bookId,
    title,
    author,
    category: category || '',
  });

  return {
    item_id: bookId,
    title,
    author,
    category: category || '',
  };
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (bookId) => {
  await axios.delete(`${API_BASE_URL}/apps/${KEY}/books/${bookId}`);
  return bookId;
});

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.length = 0;
        action.payload.forEach((book) => state.push(book));
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const index = state.findIndex((book) => book.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      });
  },
});

export default booksSlice.reducer;
