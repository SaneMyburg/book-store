import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <div className="all-books">
      <ul>
        <li className="category">{book.category}</li>
        <li className="title">{book.title}</li>
        <li className="author">{book.author}</li>
      </ul>
      <button type="button" className="comments">
        Comments
      </button>
      <button type="button" className="remove" onClick={handleRemoveBook}>
        Remove
      </button>
      <button type="button" className="edit">
        Edit
      </button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
