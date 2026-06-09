import Task from "./Task";

export default function TaskList({
  task,
  toggleTask,
  deleteTask,
  editTask,
  saveTask,
}) {
  return (
    <ul className="todo-list">
      {task.map((item) => (
        <Task
          key={item.id}
          task={item}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
          saveTask={saveTask}
        />
      ))}
    </ul>
  );
}
