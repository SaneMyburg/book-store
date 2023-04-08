import React from 'react';
import InputBook from '../components/AddBooks';
import DisplayBooks from '../components/DisplayBooks';

const Books = () => (
  <div className="bookstore">
    <DisplayBooks />
    <InputBook />
  </div>
);

export default Books;
