import { useState } from 'react';
import { Shield } from 'lucide-react';

export default function Stake() {
  const [stakeAmount, setStakeAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleStake = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Implement staking logic here
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <div className="flex items-center justify-center">
                <Shield className="h-12 w-12 text-indigo-600" />
              </div>
              <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
                Become a Juror
              </h2>
              <p className="mt-2 text-center text-gray-600">
                Stake your tokens to participate in dispute resolution and earn rewards
              </p>

              <form onSubmit={handleStake} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="stake-amount" className="block text-sm font-medium text-gray-700">
                    Stake Amount
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="number"
                      name="stake-amount"
                      id="stake-amount"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0.0"
                      value={stakeAmount}
                      onChange={(e) => setStakeAmount(e.target.value)}
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">TOKENS</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-500">Minimum Stake</span>
                      <span className="text-sm text-gray-900">1,000 TOKENS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-500">Reward Rate</span>
                      <span className="text-sm text-gray-900">5% per resolved case</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-500">Lock Period</span>
                      <span className="text-sm text-gray-900">30 days</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? 'Processing...' : 'Stake Tokens'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}