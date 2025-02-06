import React, { useEffect, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';

const Balances = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [fomoBalance, setFomoBalance] = useState(0);
  const [solBalance, setSolBalance] = useState(0);

  useEffect(() => {
    if (!publicKey) return;

    const fetchBalances = async () => {
      try {
        // Fetch SOL balance
        const solBalance = await connection.getBalance(publicKey);
        setSolBalance(solBalance / 1e9);

        // Fetch FOMO token balance (replace with your mint address)
        const FOMO_MINT = new PublicKey('7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgWeU');
        const tokenAccounts = await connection.getTokenAccountsByOwner(publicKey, {
          mint: FOMO_MINT,
        });
        if (tokenAccounts.value.length > 0) {
          const balance = await connection.getTokenAccountBalance(tokenAccounts.value[0].pubkey);
          setFomoBalance(balance.value.uiAmount || 0);
        }
      } catch (error) {
        console.error('Error fetching balances:', error);
      }
    };

    fetchBalances();
  }, [publicKey, connection]);

  if (!publicKey) {
    return (
      <div className="text-center text-gray-600">
        Please connect your wallet to view balances.
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Balances</h2>
      <div className="space-y-2">
        <p className="text-gray-700">
          <span className="font-medium">FOMO:</span> {fomoBalance}
        </p>
        <p className="text-gray-700">
          <span className="font-medium">SOL:</span> {solBalance}
        </p>
      </div>
    </div>
  );
};

export default Balances;