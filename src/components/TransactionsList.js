import React from "react";
import Transaction from "./Transaction";

function TransactionsList({searchTerm, transactions}) {

  const filteredTransactions = transactions.filter((transaction) => {
    return(
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }).sort((a, b) => {
    return a.description.localeCompare(b.description);
  });

  return (
    <>
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {filteredTransactions.map((transaction) => {
          return (
          <Transaction key={transaction.id} transaction={transaction} />
        );
        })}
      </tbody>
    </table>
    </>
  );
}

export default TransactionsList;
