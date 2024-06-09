import './App.css';
import React, { act, useReducer, useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { type } from '@testing-library/user-event/dist/type';

const initialTodoList = [{ id: 1, todoText: "text1", isChecked: true }, { id: 2, todoText: "text2", isChecked: false }, { id: 3, todoText: "text3", isChecked: false }, { id: 4, todoText: "text4", isChecked: true }];

function reducer(state, action) {
  console.log("action", action);
  console.log("state", state);

  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.payload];
    }
    case "UPDATE_TODO": {
      const index = state.findIndex((todo) => {
        return action.payload.id === todo.id;
      });
      return [...state.slice(0, index), action.payload, ...state.slice(index + 1)];
    }
    case "DELETE_TODO": {
      const index = state.findIndex((todo) => {
        return action.payload === todo.id;
      });

      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    default:
      throw new Error(`invalid action type ${action.type}`)
  }
}


function App() {
  const [todoList, dispatch] = useReducer(reducer, initialTodoList);

  const addTodo = (newTodo) => {
    dispatch({ type: "ADD_TODO", payload: newTodo })
  }

  const handleUpdateTodo = (updatedTodo) => {
    dispatch({ type: "UPDATE_TODO", payload: updatedTodo })
  }

  const deleteTodo = (todoId) => {
    dispatch({ type: "DELETE_TODO", payload: todoId })
  }

  return (
    <div className="App">
      <h1>Unit Test Learn</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todoList={todoList} handleUpdateTodo={handleUpdateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
