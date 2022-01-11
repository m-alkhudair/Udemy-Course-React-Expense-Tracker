import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem"; //no longer needed
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filterSelectionHandler = (selection) => {
    // console.log('Expenses.js', selection);
    setSelectedYear(selection);
    console.log("This is the selected date: ", selectedYear);
  };

  //SOLUTION TO ASSIGNMENT 3:
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  // THIS is NEW by me:
  // const filterYr = () =>{
  //   return props.onFilterYr(selectedYear);
  // }

  //MINE DELETE
  // const filterFunctions = {
  //   selectYr: filterSelectionHandler,
  //   filterList: filterYr,
  // }

  // CONDITIONAL LOGIC FOR <ExpenseItem> OUTSIDE:
  // Note: we can store JSX content in variables and also return it out side the return statment.
  // Now we can add an (if statement)!
  // let expenseContent = <p>No Expense Found.</p> //this is the defau value
  // if (filteredExpenses.length > 0) {
  //   expenseContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ))
  // }
  // NEW BRACH (CONDITIONAL RETURNS) UPDATE: THIS LOGIC IS MOVED TO EXPENSESLIST.JS

  return (
    <Card className="expenses">
      {/* two-way binding ensures that the sate is reflected in the value picked in the dropdown */}
      <ExpensesFilter
        selected={selectedYear}
        onSelection={filterSelectionHandler}

        // Mine
        // onFilteringYr={filterYr}
        // onFilterFunctions={filterFunctions}
      />

      {/* if you generate an array of components in JSX, React has the ability to render them */}
      {/* not that in the callback function we used parentheses instead of curly braces */}
      {/* PART 2 OF THE SOLUTION FOR ASSIGNMENT 3: REPLACE props.items with filteredExpenses */}
      {/* {filteredExpenses.map((expense) => (
        <ExpenseItem
        // IMPORTANT NOTE: the key prop, you can add to either custom element or built-in element. Whenever we add a new expense div to the list of ExpenseItems, the last div flashes, and the content in it changes to the new added elements content. React revisits all the divs in the list and changes the content, this could cause performace issues as well as bugs. The key prop ensures that it has a unique identifier that allows react to only focus on adding it
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}

      {/* CONTENT CONDITIONALS LESSON: 
      note: if statements and for loops not allowed here, because they are too long, but we can use tirnary expressions! */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No Expenses Found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}




      {/* He was like ON SECOnd Thought lets do it differently==> we will move the LOGIC outside the return statement! GO UP! Comment the bellow out:  */}

      {/* BUT REALLY GO INFO!!!! */}

      {/* WE CAN SPLIT THE TIRNARY EXPRESSION TO TWO SMALLER EXPRESSIONS, A STANDARD JS TRICK: */}
      {/* The && operator, will return the expression after it if the condition is met */}
      {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
 */}

 {/* IN ITS PLACE WILL SIMPLY POINT TO THE VARIABLE ! */}
    {/* {expenseContent} */}
    {/* // NEW BRACH (CONDITIONAL RETURNS) UPDATE: THIS LOGIC IS MOVED TO EXPENSESLIST.JS */}

    <ExpensesList items={filteredExpenses} />

      {/* Supposed to DELETE this at the bottom */}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem> */}
    </Card>
  );
};

export default Expenses;
