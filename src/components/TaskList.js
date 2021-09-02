import React from "react";
import Task from "./Task";

function TaskList({ tasks, filter, taskHandler }) {
  return (
    <div className="tasks">
      {tasks.map((task, key) => {
        return filter === "All" ? <Task key={key} task={task} taskHandler={taskHandler} />
        : task.category === filter ? <Task key={key} task={task} taskHandler={taskHandler} /> : null
      })}
    </div>
  );
}

export default TaskList;
