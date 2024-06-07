import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
    const { updateTask, deleteTask, toggleTaskCompletion } = useContext(TaskContext);

    const handleUpdate = () => {
        const newText = prompt('Update task:', task.text);
        if (newText) {
            updateTask({ ...task, text: newText });
        }
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
            />
            {task.text}
            <button onClick={handleUpdate}>Update</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
};

export default TaskItem;
