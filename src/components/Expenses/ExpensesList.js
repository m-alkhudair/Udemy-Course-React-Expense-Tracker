import React from "react";

import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css';

// We are moving all the filter results logic from Expenses.js to here

const ExpensesList = props =>{
    // let expenseContent = <p>No Expense Found.</p> // No Longer needed
    // if (props.items.length > 0) {
    //   expenseContent =  //Cut bellow
    // };
    if (props.items.length === 0) {
        // this approach is for when you content changes entirely based on different conditions
        return <h2 className="expenses-list__fallback">Found No Expenses</h2>
    }

    return <ul className="expenses-list">
       {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
};

export default ExpensesList;