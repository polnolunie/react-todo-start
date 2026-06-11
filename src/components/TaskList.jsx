import Task from "./Task";

export default function TaskList({ task, ...props }) {
  return (
    <ul className="todo-list">
      {task.map((item) => (
        <Task key={item.id} task={item} {...props} />
      ))}
    </ul>
  );
}
