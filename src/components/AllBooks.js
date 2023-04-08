import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({ book = { } }) => {
  const dispatch = useDispatch();

  return (
    <div className="all-books">
      <ul>
        <li className="category">{book.category}</li>
        <li className="title">{book.title}</li>
        <li className="author">{book.author}</li>
      </ul>
      <button type="button" className="comments buttons">
        Comments
      </button>
      <button type="button" className="remove buttons" onClick={() => dispatch(removeBook(book.id))}>
        Remove
      </button>
      <button type="button" className="edit buttons">
        Edit
      </button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
