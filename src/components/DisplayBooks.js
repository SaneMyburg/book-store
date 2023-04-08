import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './AllBooks';
import { fetchBooks } from '../redux/books/bookSlice';

const DisplayBooks = () => {
  const {
    books, success,
  } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch, success]);

  if (books.length === 0) {
    return (
      <>
        <h2>No books</h2>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="booksContainer">
          <ul>
            {
            books.map((book) => (
              <li key={book.id}>
                <Book book={book} />
              </li>
            ))
          }
          </ul>

        </div>

      </div>
    </>
  );
};

export default DisplayBooks;
