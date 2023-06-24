import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ onSubmit }) => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    category: '', // Add the category property
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookData.title || !bookData.author || !bookData.category) {
      return; // Don't submit the form
    }
    onSubmit(bookData);
    setBookData({ title: '', author: '' });
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setBookData((prevData) => ({ ...prevData, category: value }));
  };

  return (
    <div className="add-book">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            id="title"
            name="title"
            value={bookData.title}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="author">
          Author:
          <input
            type="text"
            id="author"
            name="author"
            value={bookData.author}
            onChange={handleInputChange}
          />
        </label>
        <select
          name="category"
          id="category"
          value={bookData.category}
          onChange={handleCategoryChange}
        >
          <option value="">Categories</option>
          <option value="Action">Action</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Drama">Drama</option>
          <option value="Si-Fi">Si-Fi</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

AddBook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddBook;
