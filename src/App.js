import { useState } from 'react';
import './App.css';


function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const editItem = (index, newValue) => {
    const updatedItems = [...items];
    updatedItems[index] = newValue;
    setItems(updatedItems);
  };

  const deleteAllItems = () => {
    setItems([]);
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => editItem(index, prompt('Enter new value:'))}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={deleteAllItems}>Delete All</button>
    </div>
  );
}


export default App;


