import React, { useState } from "react";

function AddTransactionForm({ transactions, setTransactions }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      ...formData,
      amount: parseFloat(formData.amount),
    };

    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((data) => {
        setTransactions([...transactions, data]);
        console.log(newTransaction)
      });

    setFormData({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={formData.date}
            required
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            required
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            required
            value={formData.category}
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            required
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
