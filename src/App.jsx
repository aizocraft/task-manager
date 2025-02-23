import React, { useEffect, useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    // Load tasks from localStorage when the app starts
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever the task list changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task
  function addTask(taskText) {
    const newTask = { 
      id: Date.now(), 
      text: taskText, 
      completed: false, 
      createdAt: new Date().toLocaleString() 
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  // Function to delete a task
  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  }

  // Function to toggle task completion
  function toggleComplete(id) {
    setTasks((prevTasks) => 
      prevTasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="container">
      <h1> ✅ Task Manager - Aizo</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
}

export default App;