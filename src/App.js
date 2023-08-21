import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  let [todoItems, setTodoItems] = useState([])
  let [trackInputField, setTrackInputField] = useState("")
  let addTodoItem = (e) => {
    setTodoItems([{name: trackInputField}, ...todoItems])
    setTrackInputField = ""
    let field = document.getElementById('todo-field')
    field.value = ""
  }
  return (
    <React.Fragment>
     <input onKeyDown={(e) => {if (e.key === "Enter"){ addTodoItem()}}} id="todo-field" type="text" onChange={(e) => {setTrackInputField(e.target.value)}} />
     <button onClick={addTodoItem}>Add Task</button>
     <br />
     {todoItems.map((element, index) => {
      return <div key={index}>{element.name}</div>
     })}
    </React.Fragment>
  );
}

export default App;
