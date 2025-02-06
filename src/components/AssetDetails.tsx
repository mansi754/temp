import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AssetDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Ensure id is a string
  const [asset, setAsset] = useState<{ name: string; shares: number; price: number } | null>(null);

  useEffect(() => {
    // Simulating fetching asset details (Replace with actual API call)
    const fetchAssetDetails = async () => {
      // Fake data (replace with API response)
      const assetData = {
        name: `Asset ${id}`,
        shares: 1000,
        price: 5
      };
      setAsset(assetData);
    };

    if (id) fetchAssetDetails();
  }, [id]);

  if (!id || !asset) return <p className="text-center text-gray-600">Loading asset details...</p>;

  return (
    <div className="bg-white p-6 shadow rounded-lg max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Asset Details</h2>
      <p><strong>Asset ID:</strong> {id}</p>
      <p><strong>Name:</strong> {asset.name}</p>
      <p><strong>Shares Available:</strong> {asset.shares}</p>
      <p><strong>Price per Share:</strong> ${asset.price}</p>
      <button 
        className="bg-green-600 text-white px-4 py-2 rounded mt-4 hover:bg-green-700 transition"
        onClick={() => alert(`Buying shares for ${asset.name}`)}
      >
        Buy Shares
      </button>
    </div>
  );
};

export default AssetDetails;
