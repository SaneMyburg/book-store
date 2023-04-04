import React from 'react';
import { useSelector } from 'react-redux';
import Book from './AllBooks';

const DisplayBooks = () => {
  const books = useSelector((state) => state.book.books);

  return (
    <>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
    </>
  );
};

export default DisplayBooks;
