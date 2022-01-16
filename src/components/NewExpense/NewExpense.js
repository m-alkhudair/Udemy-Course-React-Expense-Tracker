import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);


  const saveExpenseDataHander = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false); //to Close the form when we submit!
  };

  const startEditingHandler = () =>{
    setIsEditing(true);
  };

  const stopEditingHandler = () =>{
    setIsEditing(false);
  };

  // const showForm = (event) =>{
    
  //   if (event) {
  //   event.preventDefault();
  //   console.log(event);

  
  //   const newExpenseFrom = <ExpenseForm onSaveExpenseData={saveExpenseDataHander} onCancel={hideForm}/>
  //   setNewExpenseContent(newExpenseFrom);
  //   console.log(newExpenseFrom);
  //   }
    
  // }

  // let newExpense = <button type="button" onClick={showForm}>Add a New Expense</button>

  // const [newExpenseContent, setNewExpenseContent] = useState(newExpense)
  
  // // to activate the cancel btn

  // const hideForm  = (event)=>{
  //   if (event) {
  //    console.log(event); 

  //    setNewExpenseContent(newExpense);

  //   }
  // }
 

  return (
    <div className="new-expense">

    {/* if isEditing is false render the button */}
    {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
    {/* if isEditing is true render the form */}
    {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHander} onCancel={stopEditingHandler}/>}
     {/* {newExpenseContent} */}
     
    </div>
  );
};

export default NewExpense;
