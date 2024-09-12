import React from 'react';

/* function calculatePoints calculats rward points
*/
function calculatePoints(amount) {
  if (amount <= 0) return 0;
  if (amount > 100) {
    return 2 * (amount - 100) + 1 * (50); // calculate to receive 2 ponts for every doller spent over $100 
  }
  if (amount > 50) {
    return 1 * (amount - 50); // 1 point for every dollar between $50 and $100
  }
  return 0;
}


/* Calculate monthly points*/
function getMonthlyPoints(transactions) {
  const monthlyPoints = {};
  
  transactions.forEach((transaction) => {
    const { customerId, amount, date } = transaction;
    const month = new Date(date).toLocaleString('default', { month: 'short', year: 'numeric' }); //date

    if (!monthlyPoints[customerId]) {
      monthlyPoints[customerId] = {};
    }
    
    if (!monthlyPoints[customerId][month]) {
      monthlyPoints[customerId][month] = 0;
    }

    monthlyPoints[customerId][month] += calculatePoints(amount); // add points against month and customer id
  });

  return monthlyPoints;
}

/* Reward Table*/
function RewardsTable({ transactions }) {
  const monthlyPoints = getMonthlyPoints(transactions); 

  return (
    <div>
      <h2>Rewards Summary</h2>
      {Object.keys(monthlyPoints).length === 0 ? (
        <p>No transactions available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Month</th>
              <th>Points Earned</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(monthlyPoints).map(([customerId, months]) =>
              Object.entries(months).map(([month, points]) => (
                <tr key={`${customerId}-${month}`}>
                  <td>{customerId}</td>
                  <td>{month}</td>
                  <td>{points}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RewardsTable;
