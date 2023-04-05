import React, { useState } from 'react';

const Category = () => {
  const [status, setStatus] = useState('');

  const handleClick = () => {
    setStatus('Under construction');
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Status
      </button>
      <p>{status}</p>
    </div>
  );
};

export default Category;
