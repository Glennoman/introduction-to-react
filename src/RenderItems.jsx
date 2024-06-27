import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function TodoCase() {
  // State to store list items
  const [items, setItems] = useState([]);
  // State to store input value
  const [inputValue, setInputValue] = useState("");
  // State to manage the index of the task being edited
  const [editIndex, setEditIndex] = useState(null);
  // State to store the new value for the task being edited
  const [editValue, setEditValue] = useState("");

  // Function to handle input change
  const handleInputChange = (event) => {
    // Update inputValue with current input value
    setInputValue(event.target.value);
  };

  // Handle change in the edit input field
  const handleEditChange = (event) => {
    setEditValue(event.target.value);
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
        console.log(indexToDelete);
        if (indexToDelete !== null) {
          const newItems = items.filter((_, index) => index !== indexToDelete);
          setItems(newItems); // Remove item at indexToDelete
        }
        break;
      case "edit":
        if (indexToDelete !== null) {
          setEditIndex(indexToDelete); // Set index of the item to be edited
          setEditValue(items[indexToDelete]);
        }
        break;
      default:
        break;
    }
  };

  // Handling updating an item
  const handleUpdate = () => {
    if (editValue.trim()) {
      const updatedItems = items.map((item, index) =>
        index === editIndex ? editValue : item
      );
      setItems(updatedItems); // Updating state w edited item
      setEditIndex(null); // Clearing edit mode
      setEditValue(""); // Clearing edit input field
    }
  };

  // Function to render list items
  const renderItems = () => {
    return items.map((item, index) => (
      <li key={index}>
        {index === editIndex ? (
          <>
            {/* Input field for editing the task */}
            <input type="text" value={editValue} onChange={handleEditChange} />
            {/* Button to update the task */}
            <button onClick={handleUpdate}>Update</button>
            {/* Button to cancel editing */}
            <button onClick={() => setEditIndex(null)}>cancel</button>
          </>
        ) : (
          <>
            {item} &#40; The length is {item.length} characters &#41;
            <button
              onClick={() => handleAction("delete", index)}
              className="delete-button"
            >
              Delete
            </button>
            {/* Button to edit the item */}
            <button onClick={() => handleAction("edit", index)} className="edit-button">
              Edit
            </button>
          </>
        )}
      </li>
    ));
  };

  return (
    <>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={() => handleAction("add")}>Add Item</button>
        <ul>{renderItems()}</ul>
      </div>
    </>
  );
}

export default TodoCase;
