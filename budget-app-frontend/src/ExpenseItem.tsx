export interface ICategory {
  name: string;
}

export interface IExpense {
  category: ICategory;
  description: string;
  amount: number;
}

interface IExpenseItemProps {
  expense: IExpense;
}

function ExpenseItem(props: IExpenseItemProps) {
  return (
    <div className="row">
      <div>
        {props.expense.category.name +
          "   |   " +
          props.expense.description +
          "   |   " +
          props.expense.amount}
      </div>
    </div>
  );
}

export default ExpenseItem;
