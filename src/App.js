import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <TaskProvider>
      <TaskForm />
      <TaskList />
    </TaskProvider>
  );
};

export default App;
