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
                <div className="progress-container">
                  <div role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax={100} aria-label="reading-progess" />
                  <div className="reading-progress">
                    <p className="complete-reading">
                      {Math.floor(Math.random() * (99 - 0)) + 0}
                      <span>%</span>
                    </p>
                    <p className="completed">Completed</p>
                  </div>
                </div>
                <div className="side-border" />
                <div className="chapter-status">
                  <p>CURRENT CHAPTER</p>
                  <p>
                    Chapter
                    {' '}
                    {Math.floor(Math.random() * (20 - 0)) + 0}
                  </p>
                  <button type="button" className="update-btn">UPDATE PROGRESS</button>
                </div>
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
