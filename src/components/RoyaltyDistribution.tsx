import React, { useState } from "react";

const RoyaltyDistribution: React.FC = () => {
  const [amount, setAmount] = useState("");

  const handleDistribute = () => {
    console.log(`Distributing ${amount} in royalties.`);
  };

  return (
    <div className="container">
      <h2 className="text-3xl font-bold mb-4">Royalty Distribution</h2>
      <div className="royalty-container">
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-field"
        />
        <button className="btn-primary mt-2" onClick={handleDistribute}>
          Distribute
        </button>
      </div>
    </div>
  );
};

export default RoyaltyDistribution;
