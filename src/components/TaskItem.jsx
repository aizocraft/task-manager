import React from 'react';

function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleComplete(task.id)} 
        aria-label={`Mark task ${task.text} as ${task.completed ? 'incomplete' : 'complete'}`}
      />
      <span>{task.text}</span>
      <span>{task.createdAt}</span>
      <span>{task.completed ? 'Completed' : 'Pending'}</span>
      <span>{task.completed ? task.completedAt : ''}</span>
      <button onClick={() => deleteTask(task.id)} aria-label={`Delete task ${task.text}`}>X</button>
    </div>
  );
}

export default TaskItem;