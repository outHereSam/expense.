import React, { useState } from "react";

const InputForm = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <form className="" onSubmit={handleSubmit}>
      <input
        className="w-full mb-3 dark:bg-dark-grey py-3 pl-4 rounded-md outline-none"
        type="number"
        placeholder="Amount"
      />
      <input
        className="w-full mb-3 dark:bg-dark-grey py-3 pl-4 rounded-md outline-none"
        type="text"
        placeholder="Description"
      />
      <select className="w-full mb-3 dark:bg-dark-grey p-3 rounded-md outline-none">
        <option value="">Grocery</option>
        <option value="">Entertainment</option>
        <option value="">Subscription</option>
      </select>
      <button className="font-medium bg-accent-blue py-2 px-3.5 rounded-md text-white">
        Add Expense
      </button>
    </form>
  );
};

export default InputForm;
