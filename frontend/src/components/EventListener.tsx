import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Shield, AlertCircle, Check } from 'lucide-react';

interface EventsProps {
  provider: ethers.providers.Web3Provider;
  contractAddress: string;
}

export default function EventListener({ provider, contractAddress }: EventsProps) {

  const [events, setEvents] = useState<any[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [contractInstance, setContractInstance] = useState<ethers.Contract | null>(null);

  // Contract ABI - Include only the event definitions needed
  const contractABI = [
    // Event definitions
    "event disputeCreated(uint256 id)",
    "event appliedForJuror(uint256 id)",
    "event jurorId(uint256)",
    "event newJurorsSelected(Juror[])",
    "event tokensBought(address, uint256)",
    "event disputeCreated(uint256, dispute)",
    "event jurorsAssigned(dispute, Juror[])",
    "event disputeResolved(dispute, uint256)",
    "event jurorSlashed(address, uint256)",
    "event jurorRewards(address, uint256)"
  ];

  useEffect(() => {
    if (provider && contractAddress) {
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
      );
      setContractInstance(contract);
    }
  }, [provider, contractAddress]);

  useEffect(() => {
    let mounted = true;
    
    const startListening = async () => {
      if (!contractInstance) return;
      
      setIsListening(true);
      
      // Listen for appliedForJuror events
      contractInstance.on("appliedForJuror", (id) => {
        if (!mounted) return;
        const newEvent = {
          type: "appliedForJuror",
          id: id.toString(),
          timestamp: Date.now(),
          message: `New juror application (ID: ${id.toString()})`
        };
        setEvents(prev => [newEvent, ...prev]);
      });
      
      // Listen for tokensBought events
      contractInstance.on("tokensBought", (address, amount) => {
        if (!mounted) return;
        const newEvent = {
          type: "tokensBought",
          address: address,
          amount: ethers.utils.formatUnits(amount, 18),
          timestamp: Date.now(),
          message: `${shortenAddress(address)} bought ${ethers.utils.formatUnits(amount, 18)} tokens`
        };
        setEvents(prev => [newEvent, ...prev]);
      });
      
      // Listen for disputeCreated events
      contractInstance.on("disputeCreated", (id) => {
        if (!mounted) return;
        const newEvent = {
          type: "disputeCreated",
          id: id.toString(),
          timestamp: Date.now(),
          message: `New dispute created (ID: ${id.toString()})`
        };
        setEvents(prev => [newEvent, ...prev]);
      });
      
      // Listen for disputeResolved events
      contractInstance.on("disputeResolved", (dispute, result) => {
        if (!mounted) return;
        const newEvent = {
          type: "disputeResolved",
          id: dispute.id.toString(),
          result: result.toString(),
          timestamp: Date.now(),
          message: `Dispute #${dispute.id.toString()} resolved with result: ${result.toString()}`
        };
        setEvents(prev => [newEvent, ...prev]);
      });
      
      // Listen for jurorSlashed events
      contractInstance.on("jurorSlashed", (address, amount) => {
        if (!mounted) return;
        const newEvent = {
          type: "jurorSlashed",
          address: address,
          amount: ethers.utils.formatUnits(amount, 18),
          timestamp: Date.now(),
          message: `Juror ${shortenAddress(address)} slashed ${ethers.utils.formatUnits(amount, 18)} tokens`
        };
        setEvents(prev => [newEvent, ...prev]);
      });
      
      // Listen for jurorRewards events
      contractInstance.on("jurorRewards", (address, amount) => {
        if (!mounted) return;
        const newEvent = {
          type: "jurorRewards",
          address: address,
          amount: ethers.utils.formatUnits(amount, 18),
          timestamp: Date.now(),
          message: `Juror ${shortenAddress(address)} rewarded ${ethers.utils.formatUnits(amount, 18)} tokens`
        };
        setEvents(prev => [newEvent, ...prev]);
      });
    };
    
    // Helper function to shorten addresses
    const shortenAddress = (address: string) => {
      return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
    };
    
    if (contractInstance) {
      startListening();
    }
    
    // Cleanup function to remove listeners
    return () => {
      mounted = false;
      if (contractInstance) {
        contractInstance.removeAllListeners();
        setIsListening(false);
      }
    };
  }, [contractInstance]);

  // Format timestamp to readable format
  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  // Get icon based on event type
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'appliedForJuror':
        return <Shield className="w-5 h-5 text-blue-500" />;
      case 'disputeCreated':
        return <AlertCircle className="w-5 h-5 text-orange-500" />;
      case 'disputeResolved':
        return <Check className="w-5 h-5 text-green-500" />;
      case 'jurorSlashed':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'jurorRewards':
        return <Check className="w-5 h-5 text-green-500" />;
      default:
        return <Shield className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    // <div className="w-2/3 mx-auto bg-cyan-400 p-6 rounded-lg shadow-md">
    //   <div className="flex items-center justify-between mb-4">
    //     <h2 className="text-xl font-bold text-gray-800">Events</h2>
    //     {events.length === 0 ? (
    //     <div className="text-center text-gray-500">
    //       No events received yet. Actions on the contract will appear here.
    //     </div>
    //   ) : (
    //     <div className="space-y-3 max-h-96 overflow-y-auto">
    //       {events.map((event, index) => (
    //         <div key={index} className="p-3 bg-gray-50 rounded-md flex items-start">
    //           <div className="mr-3 mt-1">
    //             {getEventIcon(event.type)}
    //           </div>
    //           <div className="flex-1">
    //             <div className="font-medium">{event.message}</div>
    //             <div className="text-xs text-gray-500">{formatTime(event.timestamp)}</div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   )}
    //     <div className="flex items-center">
    //       <span className={`w-2 h-2 rounded-full mr-2 ${isListening ? 'bg-green-500' : 'bg-red-500'}`}></span>
    //       <span className="text-sm text-gray-600">{isListening ? 'Listening' : 'Disconnected'}</span>
    //     </div>
        
    //   </div>
      
    
    // </div>
    <div className="w-full bg-gray-100 border-b border-gray-200 shadow-sm">
    <div className={`container mx-auto px-4 py-2 ${ isListening ? "bg-green-100": "bg-gray-100"}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h3 className="text-sm font-medium">Contract Events</h3>
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
            isListening ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {isListening ? 'Listening' : 'Disconnected'}
          </span>
        </div>
        
        <div className="flex-1 overflow-x-auto ml-4">
          {events.length === 0 ? (
            <p className="text-sm text-gray-500 italic">No events received yet. Actions on the contract will appear here.</p>
          ) : (
            <div className="flex space-x-4 overflow-x-auto">
              {events.map((event, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white px-3 py-1 rounded-md shadow-sm border border-gray-200 flex-shrink-0">
                  <span className="flex-shrink-0">{getEventIcon(event.type)}</span>
                  <span className="text-sm whitespace-nowrap">{event.message}</span>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{formatTime(event.timestamp)}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  );
}