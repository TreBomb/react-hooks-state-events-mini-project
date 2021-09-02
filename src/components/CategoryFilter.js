import React from "react";

function CategoryFilter({ categories, changeFilter }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, key) => <button id={category} key={key} onClick={e => changeFilter(e)}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
