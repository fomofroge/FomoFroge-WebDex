import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

const WalletInfo = () => {
  const { publicKey } = useWallet();

  if (!publicKey) {
    return <p>No wallet connected.</p>;
  }

  return (
    <div>
      <p>Connected Wallet: {publicKey.toBase58()}</p>
    </div>
  );
};

export default WalletInfo;