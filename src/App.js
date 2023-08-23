import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [cardContent, setCardContent] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddCard = () => {
    setCardContent(inputValue);
    setInputValue('');
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter Card Content..."
        value={inputValue}
        onChange={handleInputChange}
        className="input"
      />
      <button onClick={handleAddCard} className="button">
        Add Card
      </button>
      {cardContent && (
        <div className="card">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, consectetur.</h3>
          <p>{cardContent}</p>
        </div>
      )}
    </div>
  );
};

export default App;
