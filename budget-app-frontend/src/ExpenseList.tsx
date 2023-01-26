import ExpenseItem, { IExpense } from "./ExpenseItem";

interface IExpenseListProps {
  expenses: IExpense[];
}

function ExpenseList(props: IExpenseListProps) {
  return (
    <div className="container">
      {props.expenses.map((e) => (
        <ExpenseItem expense={e} />
      ))}
    </div>
  );
}

export default ExpenseList;
