import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Header = () => {
  const { publicKey } = useWallet();

  return (
    <header className="bg-green-600 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">FomoFroge DEX</h1>
      <div className="flex items-center space-x-4">
        <WalletMultiButton className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-green-50 transition duration-300" />
        {publicKey && (
          <p className="text-sm font-medium">
            Connected: {publicKey.toBase58().slice(0, 8)}...
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;