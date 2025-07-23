import React, { useState } from "react";

export default function AddTransaction() {
  const [type, setType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Transaction added: ${type}, ${amount}, ${category}, ${desc}`);
    setAmount("");
    setCategory("");
    setDesc("");
  };

  return (
    <div className="page">
      <h1>Add Transaction</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Type
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </label>
        <label>
          Amount
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </label>
        <label>
          Category
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </label>
        <label>
          Description
          <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} required />
        </label>
        <button type="submit">➕ Add Transaction</button>
      </form>
    </div>
  );
}
