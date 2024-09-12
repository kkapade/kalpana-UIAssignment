import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the extra matchers
import TransactionForm from './TransactionForm';


  test("renders form elements correctly", () => {
    render(<TransactionForm addTransaction={() => {}} />);
    
    // Check if the form elements are present
    expect(screen.getByText("Customer ID:")).toBeInTheDocument();
    expect(screen.getByText("Amount:")).toBeInTheDocument();
    expect(screen.getByText("Date:")).toBeInTheDocument();
    expect(screen.getByRole('button', { name: "Add Transaction" })).toBeInTheDocument();
  });  

