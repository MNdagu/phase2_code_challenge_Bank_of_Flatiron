import React from "react";
import TransactionsList from "./TransactionsList";
import AddTransactionForm from "./AddTransactionForm";
import Search from "./Search";
import { useState, useEffect } from "react";

function AccountContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  let [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);



  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AddTransactionForm transactions={transactions} setTransactions={setTransactions}/>
      <TransactionsList searchTerm={searchTerm} transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
