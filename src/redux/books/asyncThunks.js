import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const KEY = 'eWWpOQYFfW4okklL3oVZ';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const { data } = await axios.get(`${API_BASE_URL}/apps/${KEY}/books`);
  const booksArray = Object.entries(data).map(([id, items]) => ({
    id,
    ...items[0],
  }));

  return booksArray;
});

export const addBook = createAsyncThunk('books/addBook', async (bookData) => {
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

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId) => {
    await axios.delete(`${API_BASE_URL}/apps/${KEY}/books/${bookId}`);
    return bookId;
  },
);

export default {
  fetchBooks,
  addBook,
  removeBook,
};
