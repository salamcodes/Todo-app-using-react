import { useState, useRef } from 'react'
import './App.css'

function App() {
  const titleVal = useRef();
  const [todo, setTodo] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    todo.push({
      Title: titleVal.current.value,
    });
    setTodo([...todo])
  }

  const delTodo = (index) => {
    todo.splice(index, 1);
    setTodo([...todo])
  }
  const editTodo = (index) => {
     const newVal = prompt("Enter Edited todo");
    const newTodos = todo.map((item, i) =>
      i === index ? { ...item, Title: newVal } : item
    );
    setTodo([newTodos])
  }
  return (
    <>
      <div className="container">
        <div className="todo-card">
          <h1 className="title">My Todo List</h1>

          <form className="input-group" onSubmit={addTodo}>
            <input type="text" placeholder="Add a new task..." ref={titleVal} />

            <button type="submit">Add</button>
          </form>

          <ul className="todo-list">
            {todo.length > 0 ? todo.map((item, index) => {
              return <li className="todo-item" key={index}>
                <span>{item.Title}</span>
                <button className="delete" onClick={() => delTodo(index)} type="button">✕</button>
                <button className="delete" onClick={() => editTodo(index)} type="button">Edit</button>
              </li>
            }) : <h1>No todos</h1>}

          </ul>

          <p className="footer">You have {todo.length} tasks today</p>
        </div>
      </div>
    </>
  )
}

export default App
