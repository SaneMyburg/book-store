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
    <form className="form">
      <hr />
      <h3 className="montserat bold">ADD NEW BOOK</h3>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={input.title}
        onChange={handleInput}
        className="montserat normal"
        id="input-1"
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={input.author}
        onChange={handleInput}
        id="input-2"
        className="montserat normal"
      />
      <button type="button" className="roboto bold" onClick={handleSubmit}>ADD BOOK</button>
    </form>
  );
};

export default InputBook;
