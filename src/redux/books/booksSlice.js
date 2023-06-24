import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks, addBook, removeBook } from './asyncThunks';

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
      .addCase(addBook.fulfilled, (state, action) => [...state, action.payload])
      .addCase(removeBook.fulfilled,
        (state, action) => state.filter((book) => book.id !== action.payload));
  },
});

export default booksSlice.reducer;
