import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

const SwapInterface = () => {
  const { publicKey } = useWallet();
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  if (!publicKey) {
    return (
      <div className="text-center text-gray-600">
        Please connect your wallet to proceed.
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Swap Tokens</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">From:</label>
        <div className="flex space-x-2">
          <input
            type="number"
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
            placeholder="Amount"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="FOMO">FOMO</option>
            <option value="SOL">SOL</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">To:</label>
        <div className="flex space-x-2">
          <input
            type="number"
            value={toAmount}
            onChange={(e) => setToAmount(e.target.value)}
            placeholder="Amount"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="SOL">SOL</option>
            <option value="FOMO">FOMO</option>
          </select>
        </div>
      </div>
      <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
        Swap
      </button>
    </div>
  );
};

export default SwapInterface;