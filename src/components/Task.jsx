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
    <li
      className={`${task.completed ? "completed" : ""} ${task.edit ? "editing" : ""}`.trim()}
    >
      <input
        className="toggle"
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {task.edit ? (
        <input
          className="edit"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            console.log(e);
            if (e.key === "Enter") {
              saveTask(task.id, value);
            }
          }}
        />
      ) : (
        <>
          <label>
            <span className="description">{task.title}</span>
          </label>

          <button
            className="icon icon-edit"
            onClick={() => editTask(task.id)}
          />
          <button
            className="icon icon-destroy"
            onClick={() => deleteTask(task.id)}
          />
        </>
      )}
    </li>
  );
}
