// Dashboard.tsx (Mock Data Version)
import React, { useState, useEffect } from 'react'

const Dashboard: React.FC = () => {
  // Simulating state for mock data
  const [userData, setUserData] = useState({
    address: '0x1234abcd5678efgh',
    totalAssets: 0,
    totalShares: 0,
    totalRoyalties: 0,
  })
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'Buy', amount: 50, date: '2025-01-10' },
    { id: 2, type: 'Sell', amount: 25, date: '2025-01-15' },
  ])

  useEffect(() => {
    // Simulate fetching data from the backend after a delay
    setTimeout(() => {
      setUserData({
        address: '0x5678abcd1234efgh',
        totalAssets: 5,
        totalShares: 1000,
        totalRoyalties: 50,
      })
      setTransactions([
        { id: 1, type: 'Buy', amount: 50, date: '2025-01-10' },
        { id: 2, type: 'Sell', amount: 25, date: '2025-01-15' },
        { id: 3, type: 'Buy', amount: 100, date: '2025-02-01' },
      ])
    }, 2000) // Mock delay to simulate fetching from API
  }, [])

  return (
    <div className="p-6">
      {/* Dashboard Header */}
      <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>

      {/* User Information Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">User Information</h2>
        <p className="text-gray-600">
          <span className="font-medium">Wallet Address:</span> {userData.address}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Total Assets:</span> {userData.totalAssets}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Total Shares:</span> {userData.totalShares}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Total Royalties:</span> {userData.totalRoyalties} ALGO
        </p>
      </div>

      {/* Recent Transactions Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <div className="space-y-2">
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <p key={transaction.id} className="text-gray-600">
                {transaction.type} {transaction.amount} shares on {transaction.date}
              </p>
            ))
          ) : (
            <p className="text-gray-600">No transactions yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
