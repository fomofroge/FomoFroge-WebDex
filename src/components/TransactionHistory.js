import React, { useEffect, useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

const TransactionHistory = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (!publicKey) return;

    const fetchHistory = async () => {
      const history = await connection.getSignaturesForAddress(publicKey);
      setTransactions(history.slice(0, 5)); // Show last 5 transactions
    };

    fetchHistory();
  }, [publicKey, connection]);

  if (!publicKey) {
    return <p>Please connect your wallet to view transaction history.</p>;
  }

  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((tx, index) => (
          <li key={index}>{tx.signature.slice(0, 8)}...</li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;