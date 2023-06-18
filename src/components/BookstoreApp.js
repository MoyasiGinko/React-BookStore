import React, { useState } from 'react';
import BookList from './booksList';
import AddBook from './addBooks';

const Store = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'The Chronicles of Narnia',
      author: 'C.S. Lewis',
      category: ['fantasy'],
    },
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzume Collins',
      category: ['thriller'],
    },
    {
      id: 1,
      title: 'Game of Thrones',
      author: 'George R.R. Martin',
      category: ['fantasy'],
    },
  ]);

  const handleAddBook = (book) => {
    const newBook = { ...book, id: Date.now() };
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="bookstore">
      <BookList books={books} onDelete={handleDeleteBook} />
      <AddBook onSubmit={handleAddBook} />
    </div>
  );
};

export default Store;
