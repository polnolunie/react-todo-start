import { useState } from "react";

export default function Task({
  task,
  toggleTask,
  deleteTask,
  editTask,
  saveTask,
}) {
  const [value, setValue] = useState(task.title);

  const handleSave = () => {
    saveTask(task.id, value);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {task.edit ? (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => console.log(e)}
        />
      ) : (
        <span>{task.title}</span>
      )}

      {task.edit ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => editTask(task.id)}>Edit</button>
      )}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}
