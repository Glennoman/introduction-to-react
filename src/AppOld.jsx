import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TodoList() {
  // Initialize state for items list and input value
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Function to handle input change
  const handleInputChange = (event) => {
    // Update inputValue with current input value
    setInputValue(event.target.value);
  };

  // Function to add new item to the list
  const addItem = () => {
    if (inputValue.trim()) {
      // Spread the existing items into a new array and add the new inputValue
      // Add new item and reset input field
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  // Delete an item from the list
  const deleteItem = (indexToDelete) => {
    // Filter out the item to be deleted using it's index
    // (underscore) represents the current element in the array being processed by filter
    const newItems = items.filter((_, index) => index !== indexToDelete);
    setItems(newItems); // Update state with new list
  }

  return (
    <>
      <div>
        <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        />
        <button onClick={addItem}>Add Item</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item} &#40; The length is {item.length} characters &#41;
            <button onClick={() => deleteItem(index)} className="delete-button">
              Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
