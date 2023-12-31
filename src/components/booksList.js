import React from 'react';
import PropTypes from 'prop-types';
import Book from './bookItem';

const BookList = ({ books, onDelete }) => (
  <div className="book-list">
    {books.map((book) => (
      <Book key={book.id} book={book} onDelete={onDelete} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
