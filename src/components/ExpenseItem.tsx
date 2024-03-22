const ExpenseItem = () => {
  return (
    <div className="flex items-center justify-between mb-5">
      <div>
        <h3 className="font-semibold text-lg">Spotify Subscription</h3>
        <p className="text-xs text-zinc-500 mt-1">Subscription</p>
      </div>
      <div>
        <h4 className="font-semibold text-red-400">- GHC 17</h4>
      </div>
    </div>
  );
};

export default ExpenseItem;
