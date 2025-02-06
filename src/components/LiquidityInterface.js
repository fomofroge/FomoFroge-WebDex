import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

const LiquidityInterface = () => {
  const { publicKey } = useWallet();
  const [fomoAmount, setFomoAmount] = useState('');
  const [solAmount, setSolAmount] = useState('');

  if (!publicKey) {
    return <p>Please connect your wallet to proceed.</p>;
  }

  return (
    <div className="liquidity-interface">
      <h2>Add Liquidity</h2>
      <div>
        <label>FOMO Amount:</label>
        <input
          type="number"
          value={fomoAmount}
          onChange={(e) => setFomoAmount(e.target.value)}
          placeholder="FOMO Amount"
        />
      </div>
      <div>
        <label>SOL Amount:</label>
        <input
          type="number"
          value={solAmount}
          onChange={(e) => setSolAmount(e.target.value)}
          placeholder="SOL Amount"
        />
      </div>
      <button>Add Liquidity</button>
    </div>
  );
};

export default LiquidityInterface;