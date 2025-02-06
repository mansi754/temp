import { useWallet } from '@txnlab/use-wallet'
import React, { useEffect, useState } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MyAssets from './components/AssetDetails'
import Footer from './components/Footer'; // Import Footer component
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import WalletConnectPage from './components/WalletConnectPage'

const Home: React.FC = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const { activeAddress } = useWallet()  // Check if the wallet is connected

  const toggleWalletModal = () => {
    setOpenWalletModal(!openWalletModal)
  }

  useEffect(() => {
    // Any additional logic can go here if needed when wallet status changes
  }, [activeAddress])

  // Fake data for example purposes (replace with actual data later)
  const dashboardData = {
    assets: 10,
    shares: 5,
    royalties: 20.5,
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

        {/* Fixed Navbar with Home Link */}
        <Navbar className="fixed top-0 left-0 w-full z-50" />

        {/* Main Content Area */}
        <div className="pt-24 w-full p-6 space-y-6 min-h-screen">
          
          {/* Routing Section */}
          <Routes>
            {/* Home Page Route */}
            <Route 
              path="/" 
              element={
                activeAddress ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <div className="min-h-screen text-center">
                    <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Welcome to Patentize</h2>
                    <p className="text-lg text-gray-600 mb-4">A platform for tokenizing patents, assets, and more.</p>
                    <p className="text-lg text-gray-600 mb-6">Connect your wallet to get started!</p>

                    {/* Display Connect Wallet button if wallet is not connected */}
                    {!activeAddress && (
                      <div className="text-center">
                        <div className="bg-indigo-100 p-6 rounded-lg shadow-lg">
                          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Connect Your Wallet</h2>
                          <button
                            data-test-id="connect-wallet"
                            className="btn bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
                            onClick={toggleWalletModal}
                          >
                            Connect Wallet
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
            />

            {/* Dashboard Route */}
            <Route 
              path="/dashboard" 
              element={activeAddress ? (
                <div className="min-h-screen text-center">
                  <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Your Dashboard</h2>
                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-xl font-semibold mb-4">User Information</h2>
                    <p className="text-gray-600">
                      <span className="font-medium">Wallet Address:</span>{' '}
                      <span className="break-words">{activeAddress}</span>
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Total Assets:</span> {dashboardData.assets}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Total Shares:</span> {dashboardData.shares}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Total Royalties:</span> {dashboardData.royalties} ALGO
                    </p>
                  </div>

                  {/* Recent Transactions Section */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
                    <div className="space-y-2">
                      <p className="text-gray-600">No transactions yet.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <Navigate to="/" />
              )}
            />

            {/* My Assets Route */}
            <Route path="/my-assets" element={activeAddress ? <MyAssets /> : <Navigate to="/" />} />
            
            {/* Profile Route */}
            <Route path="/profile" element={activeAddress ? <Profile /> : <Navigate to="/" />} />
          </Routes>

        </div>

        {/* Wallet Connection Modal */}
        <WalletConnectPage openModal={openWalletModal} closeModal={toggleWalletModal} />

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default Home
