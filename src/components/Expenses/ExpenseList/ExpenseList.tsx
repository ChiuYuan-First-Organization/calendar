import React, { useState, useEffect } from "react";

import { Expense } from "../../../models/Expense";

import ExpenseItem from "./ExpenseItem/ExpenseItem";

import styles from "./ExpenseList.module.css";

const ExpenseList: React.FC<{
  expenses: Expense[];
  year: number;
  month: number;
  setChange: () => void;
}> = ({ expenses, year, month, setChange }) => {
  const [isFade, setIsFade] = useState<boolean>(false);

  let contents = null;
  if (expenses.length > 0) {
    const sortedExpenses = expenses.sort((a: Expense, b: Expense) =>
      a.date > b.date ? -1 : 1
    );
    contents = sortedExpenses.map((expense, index) => (
      <ExpenseItem key={index} index={index} expense={expense} setChange={setChange} />
    ));
  }

  let inform = `No expenses in ${year} - ${month}`;
  if (contents) {
    inform = `Expenses in ${year} - ${month}`;
  }

  useEffect(() => {
    setIsFade(true);
    const timer = setTimeout(() => {
      setIsFade(false);
    }, 700);
    return () => {
      clearTimeout(timer);
    }
  }, [year, month]);

  return (
    <>
      <ul className={styles.board}>
        <h1 className={isFade ? styles.fill : ""}>{inform}</h1>
        {contents}
      </ul>
    </>
  );
};

export default ExpenseList;
