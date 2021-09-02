import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filter, setFilter] = useState("All");
  const [form, setForm] = useState({
    category: "Code",
    text: ""
  });

  function changeFilter(f) {
    setFilter(f.target.id);
  };

  function formHandler(event) {
    const key = event.target.name;
    const value = event.target.value;
    setForm({...form, [key]: [value]});
  };

  function onTaskFormSubmit(event) {
    event.preventDefault();
    setTasks([...tasks, {"text": form.text, "category": form.category}])
  };

  function taskHandler(item) {
    setTasks(tasks.filter(task => task.text !== item))
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} changeFilter={changeFilter}/>
      <NewTaskForm categories={CATEGORIES} formHandler={formHandler} formSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} filter={filter} taskHandler={taskHandler}/>
    </div>
  );
}

export default App;