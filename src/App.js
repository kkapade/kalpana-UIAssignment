import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import RewardsTable from './RewardsTable';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
    
  };

  return (
    <div className="App">
      <h1>Customer Rewards Program</h1>
      <TransactionForm addTransaction={addTransaction} />
      <RewardsTable transactions={transactions} />
    </div>
  );
}

export default App;
