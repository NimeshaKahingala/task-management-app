import './App.css';
import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { TodoContextProvider } from './context/TodoContext';

function App() {

  return (
    <TodoContextProvider>
      <div className="App">
        <AddTodo />
        <TodoList />
      </div>
    </TodoContextProvider>
  );
}

export default App;
