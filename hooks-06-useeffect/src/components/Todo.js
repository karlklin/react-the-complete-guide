import React, { useState, useEffect } from 'react';
import axios from 'axios';

const todo = props => {
  const [todoName, setTodoName] = useState('');
  const [todoList, setTodoList] = useState([]);
  //   const [todoState, setTodoState] = useState({ userInput: '', todoList: [] });

  useEffect(() => {
    axios.get('https://test-3e15a.firebaseio.com/todos.json').then(result => {
      console.log(result);
      const todoData = result.data;
      const todos = [];
      for (const key in todoData) {
        todos.push({id: key, name: todoData[key].name})
      }
      setTodoList(todos);
    });
  });
  const inputChangeHandler = event => {
    // setTodoState({
    //   userInput: event.target.value,
    //   todoList: todoState.todoList
    // });
    setTodoName(event.target.value);
  };

  const todoAddHandler = () => {
    // setTodoState({
    //   userInput: todoState.userInput,
    //   todoList: todoState.todoList.concat(todoState.userInput)
    // });
    setTodoList(todoList.concat(todoName));
    axios
      .post('https://test-3e15a.firebaseio.com/todos.json', { name: todoName })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Todo"
        onChange={inputChangeHandler}
        value={todoName}
      />
      <button type="button" onClick={todoAddHandler}>
        Add
      </button>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default todo;
