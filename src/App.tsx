import React from "react";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";

function App() {
  return (
    <div className="h-screen bg-blue-50 dark:bg-bg-dark text-zinc-900 dark:text-zinc-300 transition-colors duration-500">
      <Header />
      <div className="pt-[80px] mx-auto max-w-3xl px-5">
        <InputForm />
      </div>
    </div>
  );
}

export default App;
