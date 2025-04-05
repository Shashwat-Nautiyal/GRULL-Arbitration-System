import React, { useContext, createContext, useState, useEffect, ReactNode } from "react";
import { ethers } from "ethers";

interface AuthContextType {
    provider: ethers.providers.Web3Provider | null;
    account: string | null;
    isConnected: boolean;
    connectToMetamask: () => void;
    handleAccountsChange: (accounts: string[]) => void;
}

// Creating context with default values
const AuthContext = createContext<AuthContextType>({
    provider: null,
    account: null,
    isConnected: false,
    connectToMetamask: () => {},
    handleAccountsChange: () => {}
});

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// Provider Component
interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);
    const [account, setAccount] = useState<string | null>(null);
    const [isConnected, setIsConnected] = useState<boolean>(false);

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', handleAccountsChange);

            return () => {
                window.ethereum.removeListener('accountsChanged', handleAccountsChange);
            };
        }
    }, []);

    function handleAccountsChange(accounts: string[]) {
        if (accounts.length > 0 && account !== accounts[0]) {
            setAccount(accounts[0]);
            setIsConnected(true);
        } else {
            setIsConnected(false);
            setAccount(null);
        }
    }

    async function connectToMetamask() {
        if (window.ethereum) {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum); //This object is injected by MetaMask and indicates that MetaMask (or another Ethereum provider) is installed.
                setProvider(provider);

                await provider.send("eth_requestAccounts", []); //Sends a request to MetaMask to prompt the user to connect their accounts.
                const signer = provider.getSigner(); //  Retrieves a signer object from the provider to sign transactions and messages.
                const address = await signer.getAddress();

                setIsConnected(true);
                setAccount(address); //Retrieves a list of accounts currently connected to the provider. 
            } catch (err) {
                console.log("not connected", err);
            }
        }
    }

    return (
        <AuthContext.Provider value={{ provider, account, isConnected, connectToMetamask, handleAccountsChange }}>
            {children}
        </AuthContext.Provider>
    );
};
