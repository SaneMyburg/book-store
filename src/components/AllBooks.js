import React from 'react';

const Book = () => (
  <div className="all-books">
    <ul>
      <li className="catergory">Catergory</li>
      <li className="title">Title</li>
      <li className="author">Author</li>
    </ul>
    <button type="button" className="comments">Comments</button>
    <button type="button" className="remove">Remove</button>
    <button type="button" className="edit">Edit</button>

  </div>
);

export default Book;
