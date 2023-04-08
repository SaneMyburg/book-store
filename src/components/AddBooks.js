import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

const InputBook = () => {
  const [input, setInput] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();

  const handleInput = (item) => {
    setInput((prevState) => ({
      ...prevState,
      [item.target.name]: item.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const book = { id, ...input };
    dispatch(addBook(book));
    setInput({
      title: '',
      author: '',
    });
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={input.title}
        onChange={handleInput}
        id="input-1"
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={input.author}
        onChange={handleInput}
        id="input-2"
      />
      <button type="button" onClick={handleSubmit}>Add Book</button>
    </form>
  );
};

export default InputBook;
