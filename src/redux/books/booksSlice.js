import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
