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
      <span className="add-new-title Text-Style-10">ADD NEW BOOK</span>
      <form className="form-input" onSubmit={handleSubmit}>
        <label htmlFor="title">
          <input
            className="input-title"
            placeholder="Book Title"
            type="text"
            id="title"
            name="title"
            value={bookData.title}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="author">
          <input
            className="input-author"
            placeholder="Author Name"
            type="text"
            id="author"
            name="author"
            value={bookData.author}
            onChange={handleInputChange}
          />
        </label>
        <select
          className="input-category"
          placeholder="Category"
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
        <button className="add-btn" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

AddBook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddBook;
