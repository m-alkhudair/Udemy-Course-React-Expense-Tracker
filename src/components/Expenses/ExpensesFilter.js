import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const selectOnChangeHandler = (event) => {
    props.onSelection(event.target.value); //this was before we coverted the prop into an obj
    // console.log(event.target.value);
    props.onFilteringYr();

    //Mine Might DELETE SOON
    // props.onFilterFunctions.selectYr(event.target.value);
    // props.onFilterFunctions.filterList();
  };

  // const filterExpensesByYear = () =>{
  //   selectOnChangeHandler();
  //   // props.onFilteringYr();
  // }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={selectOnChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
