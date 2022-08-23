import './App.css';
import { useState } from "react";

function App() {
  const [todoList, setToDoList] = useState([]);
  const [todoItem, setToDoItem] = useState('');

  const inputChangeEventHandler = (event) => {
    const value = event.target.value;
    setToDoItem(value);
  }

  const onAddEventHandler = () => {
    if(!todoItem){
      alert('please enter value');
      return;
    }
    
    todoList.push(todoItem);
    setToDoList(todoList);
    setToDoItem('');
  }
  
  return (
    <div className="App">
      {
        todoList.map((value) => {
          return (<div className='todo-item'>{value}</div>)
        })
      }
      <input value={todoItem} type="text" onInput={inputChangeEventHandler} />
      <button onClick={onAddEventHandler}>Add Event</button>
    </div>
  );
}

export default App;
