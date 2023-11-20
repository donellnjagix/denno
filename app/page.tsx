import React, { useState } from 'react';
import Navbar from '../app/components/navbar/Navbar';

const Home: React.FC = () => {
  const [currentAccountBalance, setCurrentAccountBalance] = useState(80040);
  const [savingsAccountBalance, setSavingsAccountBalance] = useState(50000);
  const [depositedMoney, setDepositedMoney] = useState(10000);
  const [withdrawnMoney, setWithdrawnMoney] = useState(10000);

  // Additional states for loan-related information
  const [loanLimit, setLoanLimit] = useState(50000);
  const [loanTaken, setLoanTaken] = useState(20000);

  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl mt-4 mb-8" style={{ color: '#5C9C8C' }}>
          Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* First Row */}
          <div className="bg-SeaportSteam rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold mb-2" style={{ color: '#40847C' }}>
              Current Account Balance
            </h2>
            <p className="text-2xl" style={{ color: '#5C9C8C' }}>
              ${currentAccountBalance.toLocaleString('en-US')}
            </p>
          </div>
          <div className="bg-YuccaCream rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold mb-2" style={{ color: '#295B50' }}>
              Savings Account Balance
            </h2>
            <p className="text-2xl" style={{ color: '#5C9C8C' }}>
              ${savingsAccountBalance.toLocaleString('en-US')}
            </p>
          </div>
          <div className="bg-OldMoney rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold mb-2" style={{ color: '#5C9C8C' }}>
              Deposited Money
            </h2>
            <p className="text-2xl" style={{ color: '#5C9C8C' }}>
              ${depositedMoney.toLocaleString('en-US')}
            </p>
          </div>

          {/* Second Row */}
          <div className="bg-GreyTeal rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold mb-2" style={{ color: '#5C9C8C' }}>
              Withdrawn Money
            </h2>
            <p className="text-2xl" style={{ color: '#5C9C8C' }}>
              ${withdrawnMoney.toLocaleString('en-US')}
            </p>
          </div>
          <div className="bg-MauiBlue rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold mb-2" style={{ color: '#4CA4B4' }}>
              Loan Limit
            </h2>
            <p className="text-2xl" style={{ color: '#5C9C8C' }}>
              ${loanLimit.toLocaleString('en-US')}
            </p>
          </div>
          <div className="bg-TealBayou rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold mb-2" style={{ color: '#58A2A3' }}>
              Loan Taken
            </h2>
            <p className="text-2xl" style={{ color: '#5C9C8C' }}>
              ${loanTaken.toLocaleString('en-US')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
