import React, { useState } from "react";

const categories = [
  "Subscription",
  "Transportation",
  "Food",
  "Debt",
  "Personal Care",
  "Clothing",
  "Fun",
];

interface ExpenseData {
  amount: number;
  description: string;
  category: string;
}

const InputForm = () => {
  const [inputData, setInputData] = useState<ExpenseData>({
    amount: 0,
    description: "",
    category: "",
  });

  const formIsValid = () => {
    return inputData.amount > 0 && inputData.description && inputData.category;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(inputData);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        className="w-full mb-3 dark:bg-dark-grey py-3 pl-4 rounded-md outline-none placeholder:text-zinc-600"
        type="number"
        placeholder="Amount"
        onChange={(e) =>
          setInputData((prevState) => ({
            ...prevState,
            amount: Number(e.target.value),
          }))
        }
      />
      <input
        className="w-full mb-3 dark:bg-dark-grey py-3 pl-4 rounded-md outline-none placeholder:text-zinc-600"
        type="text"
        placeholder="Description"
        value={inputData.description}
        onChange={(e) =>
          setInputData((prevState) => ({
            ...prevState,
            description: e.target.value,
          }))
        }
      />
      <select
        onChange={(e) =>
          setInputData((prevState) => ({
            ...prevState,
            category: e.target.value,
          }))
        }
        className="w-full mb-3 dark:bg-dark-grey p-3 rounded-md outline-none appearance-none"
      >
        {categories.map((category) => (
          <option key={category} value={`${category}`}>
            {category}
          </option>
        ))}
      </select>
      <button
        type="submit"
        disabled={!formIsValid()}
        className="font-medium bg-accent-blue py-2 px-3.5 rounded-md text-white"
      >
        Add Expense
      </button>
    </form>
  );
};

export default InputForm;
