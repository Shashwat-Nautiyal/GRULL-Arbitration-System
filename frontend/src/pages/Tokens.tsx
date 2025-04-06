import { useState } from 'react';
import { CreditCard } from 'lucide-react';
import { ethers } from 'ethers';
import { contractABI } from '../components/constants';

interface TokenProps{
  provider: ethers.providers.Web3Provider;
}

export default function Tokens(props: TokenProps) {
  const [buyAmount, setBuyAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [contractAddress, setContractAddress] = useState<string>('0x3182c0ADEb8fc07029a7C6162B4a895694718122');
  const [transactionStatus, setTransactionStatus] = useState<string>('');

  const connectToExistingContract = async (address: string)=>{
    try {
      const signer = props.provider.getSigner();
      const contractInstance = new ethers.Contract(address, contractABI, signer);
      setContract(contractInstance);
      setContractAddress(address);
      return contractInstance;
    } catch (error) {
      console.error("Error connecting to contract:", error);
      return null;
    }
  }

  const handlePurchase = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTransactionStatus('Processing transaction...');

    try {
      if (!props.provider) {
        throw new Error("Web3 provider is not connected");
      }
      if (!buyAmount) {
        throw new Error("Please enter a valid amount");
      }
      const contractInstance = await connectToExistingContract(contractAddress);
      
      if (!contractInstance) {
        throw new Error("Failed to connect to contract");
      }
      
      const tokenPrice = await contractInstance.tokenPrice();
      console.log(tokenPrice)
      //const ethToSend = ethers.utils.parseUnits((Number(ethers.BigNumber.from(tokenPrice) )* parseFloat(buyAmount)).toString(), 18); // Calculate ETH to send based on token price
      const ethToSend = (Number(ethers.BigNumber.from(tokenPrice) )* parseFloat(buyAmount)).toString();
      // Call the buyTokens function and pass the number of tokens to buy
      const tx = await contractInstance.buyTokens(buyAmount, {
        value: ethToSend,
      });
      setTransactionStatus('Transaction submitted, waiting for confirmation...');
      
      // Wait for transaction confirmation
      const receipt = await tx.wait();
      setTransactionStatus(`Transaction confirmed! Hash: ${receipt.transactionHash}`);
      console.log("Transaction receipt:", receipt);
      
      // Reset stake amount
      setBuyAmount('');
    } catch (error) {
      console.error("Error during staking:", error);
      setTransactionStatus(`Transaction failed: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <div className="flex items-center justify-center">
                <CreditCard className="h-12 w-12 text-indigo-600" />
              </div>
              <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
                Purchase Tokens
              </h2>
              <p className="mt-2 text-center text-gray-600">
                Buy tokens to participate in the arbitration system
              </p>

              <form onSubmit={handlePurchase} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                    Amount
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      className="focus:ring-indigo-500 p-2 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
                      placeholder="0.0"
                      value={buyAmount}
                      onChange={(e) => setBuyAmount(e.target.value)}
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">ETH</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-500">Exchange Rate</span>
                      <span className="text-sm text-gray-900">1 ETH = 1000 TOKENS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-500">Network Fee</span>
                      <span className="text-sm text-gray-900">≈ 0.001 ETH</span>
                    </div>
                    {buyAmount && (
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-500">You will receive</span>
                        <span className="text-sm text-gray-900">{Number(buyAmount)} TOKENS</span>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    isProcessing ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isProcessing ? 'Processing...' : 'Purchase Tokens'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}