import React from 'react';
import { useState } from 'react';

let globalId= 0;

function App() 
{

  const [todos, setTodos]= useState([]);
  const [text, setText]= useState("");

  const createTodo= (event) =>
  {
    event.preventDefault();
    setTodos((previousTodo) =>
    {
      setText("");
      return [...previousTodo, {todo: text, id: globalId++}];
    })
  }

  const enableText= (event) =>
  {
    setText(event.target.value);
  }

  const deleteTodo= (itemId) =>
  {
    setTodos((oldTodos) => 
    {
      return oldTodos.filter((item) =>
      {
        return item.id !== itemId;
      })
    })
  }

  return(
    <div>
      <h1>To-Do-App</h1>
      <form onSubmit={createTodo}>
        <input 
          type="text" 
          value={text} 
          onChange={enableText} 
          autoFocus
        />
        <button type="submit">Create To-Do</button>
      </form>
      
      <ul>
        {
          todos.map((item, index) =>
          {
            return (
              <div key={item.id}>
                <li>{item.todo}</li>  
                <button onClick={() => deleteTodo(item.id)}>Delete</button>
              </div> 
            )
          })
        }
      </ul>
    </div>
  )
}

export default App;