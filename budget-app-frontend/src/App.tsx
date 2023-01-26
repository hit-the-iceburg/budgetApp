import "./App.scss";
import React, { useEffect, useState } from "react";
import "./App.css";
import { IExpense } from "./ExpenseItem";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";

function App() {
  const [expenses, setExpenses] = useState<IExpense[]>([]);

  return (
    <div className="App">
      <AddExpense expenses={expenses} setExpenses={setExpenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
