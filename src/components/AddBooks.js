import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const InputBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        title,
        author,
        category: 'Fiction',
      }),
    );
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default InputBook;
