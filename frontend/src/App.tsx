import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stake from './pages/Stake';
import Disputes from './pages/Disputes';
import Tokens from './pages/Tokens';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
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