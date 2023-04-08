import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({ book = { } }) => {
  const dispatch = useDispatch();

  return (
    <div className="all-books">
      <ul>
        <li className="category montserat normal">{book.category}</li>
        <li className="title roboto bold">{book.title}</li>
        <li className="author roboto mid-bold">{book.author}</li>
      </ul>
      <button type="button" className="comments buttons roboto mid-bold">
        Comments
      </button>
      <button type="button" className="remove buttons roboto mid-bold" onClick={() => dispatch(removeBook(book.id))}>
        Remove
      </button>
      <button type="button" className="edit buttons roboto mid-bold">
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
