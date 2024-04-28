import { useState } from 'react';

const TaskItem = ({ task, toggleTask, removeTask, updateTask }) => {
  const [edit, setEdit] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleToggleDone = () => {
    toggleTask(task.id);
  };

  const handleEdit = () => {
    if (edit && editedTitle !== task.title) {
      updateTask(task.id, editedTitle);
    }
    setEdit(!edit);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleEdit();
    }
  };

  return (
    <li className="flex justify-between items-center border-b border-gray-300 py-2 cursor-pointer bg-gradient-to-r from-gray-600 to-gray-50;" style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
      <input type='checkbox' checked={task.done} onChange={handleToggleDone} />
      {edit ? (
        <input
          type='text'
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={handleKeyPress}
          autoFocus
        />
      ) : (
        <span>{task.title}</span>
      )}
      {edit ? (
        <button className="text-blue-500 hover:text-green-600" onClick={handleEdit}>Save</button>
      ) : (
        <button className="text-blue-600 hover:text-red-700" onClick={() => setEdit(true)}>Edit</button>
      )}
      <button className="text-red-300 hover:text-red-600" onClick={() => removeTask(task.id)}>Remove</button>
    </li>
  );
};

export default TaskItem;
