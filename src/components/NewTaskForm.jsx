export default function NewTaskForm() {
  return (
    <header className="header">
      <h1>TODOS</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  );
}
