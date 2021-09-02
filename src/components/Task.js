import React from "react";

function Task({ task, taskHandler }) {
  function deleteTask(item) {
    taskHandler(item);
  }
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={e => deleteTask(task.text)}>X</button>
    </div>
  );
}

export default Task;
