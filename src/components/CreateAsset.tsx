import React, { useState } from "react";

const CreateAsset: React.FC = () => {
  const [assetName, setAssetName] = useState("");
  const [description, setDescription] = useState("");
  const [shares, setShares] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ assetName, description, shares, price });
  };

  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create Asset</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Asset Name"
          value={assetName}
          onChange={(e) => setAssetName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Total Shares"
          value={shares}
          onChange={(e) => setShares(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Price per Share"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateAsset;
