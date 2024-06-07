import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskForm = () => {
    const [task, setTask] = useState('');
    const { addTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ text: task });
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
