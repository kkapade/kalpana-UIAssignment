import React, { useState } from 'react';
import "./App.css";

function TransactionForm({ addTransaction }) {
 
  const [customerId, setCustomerId] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customerId && amount && date) {
      addTransaction({ customerId, amount: parseFloat(amount), date });      
      setAmount('');
      setDate('');
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
        <div className='formAlign'>
        <h2 >Add Transaction</h2>
      <div>
        <label>Customer ID:</label>
        <input
          type="text"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Add Transaction</button>
        </div>
      
    </form>
  );
}

export default TransactionForm;
