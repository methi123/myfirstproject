import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDeleteExpense = () => {
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null; // Return null to remove the deleted expense from the DOM
  }

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={handleDeleteExpense}>Delete</button>
    </div>
  );
}

export default ExpenseItem;
