import React, { useState } from "react";
// must use state because react will not update the component if we just add the new expeneses
import NewExpense from "./components/NewExpense/NewExpense";

import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // dummy_expenses as the initial state value
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // Finally instead of this:
    // console.log("In App.js");
    // console.log(expense);

    //this:
    //we want to make a new array they includes the new expense (expense) plus the old ones
    //important note: if we want to update a state depending on the previous state, we have to use a special function form like this, otherwise it may not work properly because of React's scheduling
    //the fucntion passed as an argument will automiatically recieve the latest state snapshot, looks like a normal callback function
    //spread operator also works for arrays
    setExpenses((prevExpenses) => {
      console.log(expense);
      return [expense, ...prevExpenses];
    });
  };

  //this is new by me
  const filterExpenses = (yr) => {
    // console.log("this is from APP", yr);
    // console.log(expenses);
    // for (let i = 0; i<expenses.length; i++) {
    //   console.log(expenses[i].date.toDateString());
    // }
    console.log(expenses.filter((element) => element.date.toDateString().includes(yr)));
    return expenses.filter((element) => element.date.toDateString().includes(yr));
  };

  


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* ADD props NEW filteredYearItem */}
      <Expenses items={expenses} onFilterYr={filterExpenses} />
      {/* last two props by me NEW */}
    </div>
  );
};

export default App;
