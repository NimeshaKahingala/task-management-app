import './App.css';
import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { type } from '@testing-library/user-event/dist/type';


function App() {
  // const [todoList, dispatch] = useReducer(reducer, initialTodoList);

  // const addTodo = (newTodo) => {
  //   dispatch({ type: "ADD_TODO", payload: newTodo })
  // }

  // const handleUpdateTodo = (updatedTodo) => {
  //   dispatch({ type: "UPDATE_TODO", payload: updatedTodo })
  // }

  // const deleteTodo = (todoId) => {
  //   dispatch({ type: "DELETE_TODO", payload: todoId })
  // }

  return (
    <div className="App">
      <AddTodo/>
      <TodoList/>
    </div>
  );
}

export default App;
