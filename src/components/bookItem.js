import React from 'react';
import PropTypes from 'prop-types';
import Progress from './bookProgress';

const Book = ({
  book: {
    id, title, author, category,
  }, // Include the category property
  onDelete,
}) => {
  const handleDelete = () => onDelete(id);

  return (
    <>
      <div className="book-item">
        <div>
          {category && <p className="category-head">{category}</p>}
          <h2 className="book-title">{title}</h2>
          <p className="author-name">{author}</p>
          <div className="btn-wrapper">
            <button className="comments-btn" type="button">Comments</button>
            <button className="remove-btn" type="button" onClick={handleDelete}>
              Remove
            </button>
            <button className="edit-btn" type="button">Edit</button>
          </div>
        </div>
        <div>
          <Progress />
        </div>
      </div>
    </>
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
