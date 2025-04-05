import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Scale, Wallet } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        setIsConnected(true);
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Scale className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">DeFi Arbitration</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/stake" className="text-gray-700 hover:text-indigo-600">Stake</Link>
            <Link to="/disputes" className="text-gray-700 hover:text-indigo-600">Register Dispute</Link>
            <Link to="/tokens" className="text-gray-700 hover:text-indigo-600">Buy Tokens</Link>
            {isConnected ? (
              <div className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
                <Wallet className="h-4 w-4 text-indigo-600 mr-2" />
                <span className="text-sm text-gray-600">
                  {`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}
                </span>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Wallet className="h-4 w-4 mr-2" />
                Connect Wallet
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/stake"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              Stake
            </Link>
            <Link
              to="/disputes"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              Register Dispute
            </Link>
            <Link
              to="/tokens"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              Buy Tokens
            </Link>
            {!isConnected && (
              <button
                onClick={connectWallet}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}