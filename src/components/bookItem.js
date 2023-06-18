import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  book: {
    id, title, author, category,
  }, // Include the category property
  onDelete,
}) => {
  const handleDelete = () => onDelete(id);

  return (
    <div className="book-item">
      <h2>{title}</h2>
      <p>
        Author:
        {author}
      </p>
      {category && (
      <p>
        Category:
        {category}
      </p>
      )}
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired, // Add the category property
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
