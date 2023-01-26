import { useState } from "react";
import { Button } from "react-bootstrap";
import { IExpense } from "./ExpenseItem";

interface IAddExpenseProps {
  expenses: IExpense[];
  setExpenses: any;
}

function AddExpense(props: IAddExpenseProps) {
  const categoryList = ["Eating Out", "Groceries", "Shopping"];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSaveExpenseClick = () => {
    const newExpense: IExpense = {
      category: { name: selectedCategory },
      description: description,
      amount: amount,
    };

    props.setExpenses([...props.expenses, newExpense]);
  };

  const handleCategorySelectChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };

  const handleAmountChange = (event: any) => {
    setAmount(event.target.value);
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <select
            className="form-select"
            aria-label="Select Category"
            onChange={handleCategorySelectChange}
          >
            <option selected value="">
              Select Category
            </option>
            <option>{categoryList[0]}</option>
            <option>{categoryList[1]}</option>
            <option>{categoryList[2]}</option>
          </select>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter description"
            aria-label="Expense description"
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control"
            step="0.01"
            min="0"
            placeholder="0.00"
            aria-label="Amount"
            onChange={handleAmountChange}
          />
        </div>
        <div className="col">
          <Button onClick={handleSaveExpenseClick}>SAVE</Button>
        </div>
      </div>
    </div>
  );
}

export default AddExpense;
