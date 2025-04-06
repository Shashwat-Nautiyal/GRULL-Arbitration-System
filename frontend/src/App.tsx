import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stake from './pages/Stake';
import Disputes from './pages/Disputes';
import Tokens from './pages/Tokens';
import { useAuth } from './components/AuthContext';
import EventListener from './components/EventListener';

function App() {

  const { provider, account, isConnected, connectToMetamask } = useAuth();
  const contractAddress = "0x3182c0ADEb8fc07029a7C6162B4a895694718122";

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar  address={account} isConnected = {isConnected} connectWallet= {connectToMetamask} />
        <EventListener provider={provider} contractAddress={contractAddress} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stake" element={<Stake provider = {provider}/>} />
          <Route path="/disputes" element={<Disputes provider = {provider} />} />
          <Route path="/tokens" element={<Tokens provider = {provider} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;