import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TodoCase() {
  // State to store list items
  const [items, setItems] = useState([]);
  // State to store input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle input change
  const handleInputChange = (event) => {
    // Update inputValue with current input value
    setInputValue(event.target.value);
  };

  // Handler function for add and delete actions
  const handleAction = (action, indexToDelete = null) => {
    switch (action) {
        case "add":
            if (inputValue.trim()) {
                setItems([...items, inputValue]); // Add new item
                setInputValue(""); // Clear input field
            }
            break;
        case "delete":
          console.log(indexToDelete)
            if (indexToDelete !== null) {
                const newItems = items.filter((_, index) => index !== indexToDelete);
                setItems(newItems); // Remove item at indexToDelete
            }
            break;
        default:
            break;
    }
  };


  return (
    <>
      <div>
        <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        />
        <button onClick={() => handleAction("add")}>Add Item</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item} &#40; The length is {item.length} characters &#41;
            <button onClick={() => handleAction("delete", index)} className="delete-button">
              Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoCase;
