import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stake from './pages/Stake';
import Disputes from './pages/Disputes';
import Tokens from './pages/Tokens';
import { useAuth } from './components/AuthContext';

function App() {

  const { provider, account, isConnected, connectToMetamask } = useAuth();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar  address={account} isConnected = {isConnected} connectWallet= {connectToMetamask} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/disputes" element={<Disputes />} />
          <Route path="/tokens" element={<Tokens />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;