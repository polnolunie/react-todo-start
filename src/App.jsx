import { useState } from "react";
import "./App.css";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
  const [task, setTask] = useState([
    { id: 1, title: "First Task", completed: false, edit: false },
    { id: 2, title: "Second Task", completed: false, edit: false },
    { id: 3, title: "Third Task", completed: true, edit: false },
  ]);

  const toggleTask = (id) => {
    setTask((prevTasks) =>
      prevTasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const deleteTask = (id) => {
    setTask((prevTasks) => prevTasks.filter((item) => item.id !== id));
  };

  const editTask = (id) => {
    setTask((prevTasks) =>
      prevTasks.map((item) =>
        item.id === id ? { ...item, edit: true } : item,
      ),
    );
  };

  const saveTask = (id, newTitle) => {
    setTask((prevTasks) =>
      prevTasks.map((item) =>
        item.id === id ? { ...item, title: newTitle, edit: false } : item,
      ),
    );
  };

  return (
    <section className="todoapp">
      <NewTaskForm />
      <section className="main">
        <TaskList
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
          saveTask={saveTask}
        />

        <Footer />
      </section>
    </section>
  );
}

export default App;
