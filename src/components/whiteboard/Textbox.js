import React, { useState } from 'react';

const TextBox = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <textarea
      type="text"
      value={value}
      onChange={handleChange}
    >
    </textarea>
  );
};

export default TextBox;
