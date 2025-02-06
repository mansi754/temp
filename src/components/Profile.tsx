import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-12">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-xl">
        <div className="flex flex-col items-center">
          {/* Profile Picture */}
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
            <img
              src="https://via.placeholder.com/150" // Placeholder image
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Username */}
          <h1 className="text-3xl font-semibold text-indigo-800 mb-2">John Doe</h1>
          <p className="text-lg text-gray-600 mb-6">@johndoe</p>

          {/* Profile Card */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md w-full space-y-4">
            <h2 className="text-2xl font-semibold text-indigo-800">Profile Information</h2>
            <div className="space-y-2">
              <p className="text-gray-700"><strong>Wallet Address:</strong> 0x1234567890abcdef...</p>
              <p className="text-gray-700"><strong>Total Assets:</strong> 5</p>
              <p className="text-gray-700"><strong>Total Shares:</strong> 120</p>
              <p className="text-gray-700"><strong>Total Royalties:</strong> 50 ALGO</p>
            </div>
          </div>

          {/* Additional Actions */}
          <div className="mt-8 flex justify-between w-full">
            <button className="btn bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
              Edit Profile
            </button>
            <button className="btn bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
