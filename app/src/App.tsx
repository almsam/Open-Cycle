import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import History from './pages/History';
import Profile from './pages/Profile';
import CycleTracker from './components/CycleTracker';
import Settings from './components/Settings';
import OrientationSwitcher from './components/OrientationSwitcher';
import Login from './pages/Login';

const App: React.FC = () => {
  const [orientation, setOrientation] = useState('default');

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ marginLeft: '200px', padding: '20px' }}>
          <OrientationSwitcher setOrientation={setOrientation} />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cycle-tracker" element={<CycleTracker />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;