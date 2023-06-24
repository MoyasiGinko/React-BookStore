import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from './booksList';
import AddBook from './addBooks';
import { fetchBooks, addBook, removeBook } from '../redux/books/asyncThunks';

const Store = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleAddBook = (book) => {
    dispatch(addBook(book));
  };

  const handleDeleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="bookstore">
      <BookList books={books} onDelete={handleDeleteBook} />
      <AddBook onSubmit={handleAddBook} />
    </div>
  );
};

export default Store;
