import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-indigo-700 text-white p-4 flex justify-between items-center shadow-lg z-50">
      <div className="text-xl font-bold">Patentize</div>
      <div className="flex space-x-4">
        <Link to="/" className="px-4 py-2 text-white hover:bg-indigo-800 rounded transition">
          Dashboard
        </Link>
        <Link to="/my-assets" className="px-4 py-2 text-white hover:bg-indigo-800 rounded transition">
          My Assets
        </Link>
        <Link to="/profile" className="px-4 py-2 text-white hover:bg    -indigo-800 rounded transition">
          Profile
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
