import ExpenseItem from "./ExpenseItem";

const ExpenseContent = () => {
  return (
    <div className="mt-10">
      <div>
        <h4 className="text-xs uppercase">Total Expenses</h4>
        <h2 className="mt-0.5 uppercase font-bold text-3xl">GHC 2500</h2>
      </div>

      <div className="mt-10">
        <h4 className="text-xs uppercase">Recent Expenses</h4>
      </div>

      <div className="mt-5">
        <ExpenseItem />
      </div>
    </div>
  );
};

export default ExpenseContent;
