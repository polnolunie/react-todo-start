import { useState } from "react";

export default function Task({
  task,
  saveTask,
  toggleTask,
  editTask,
  deleteTask,
}) {
  const [value, setValue] = useState(task.title);

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {task.edit ? (
        <>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              console.log(e);
              if (e.key === "Enter") {
                saveTask(task.id, value);
              }
            }}
          />
          <button onClick={() => editTask(task.id)}>Edit</button>
        </>
      ) : (
        <>
          <span>{task.title}</span>
          <button onClick={() => editTask(task.id)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
}
