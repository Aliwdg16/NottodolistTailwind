import { useState, useEffect } from 'react';
import TaskItem from './TaskItem';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), title: newTask, done: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const updateTask = (taskId, newTitle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: newTitle } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-gray-300 p-4 border-gray-700 rounded shadow-md w-full scroll-margin-top:50px; ">
      <h1 className=" text-center text-yellow-300 text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
      <input
      className="flex-grow border-b-2 border-gray-400 outline-none focus:border-gray-700 mr-2 py-2 px-3"
        type='text'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder='Add a new task'
      />
      <button className="bg-gray-500 text-white px-4 py-2 rounded-md  hover:bg-green-600" onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            removeTask={removeTask}
            updateTask={updateTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
