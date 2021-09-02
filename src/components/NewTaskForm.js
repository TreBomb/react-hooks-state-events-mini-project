import React from "react";

function NewTaskForm({ categories, formHandler, formSubmit }) {
  return (
    <form className="new-task-form" onSubmit={formSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={e => formHandler(e)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={e => formHandler(e)}>
          {categories.map((category, key) => {
            return category === "All" ? null : <option key={key}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
