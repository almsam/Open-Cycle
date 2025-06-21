import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import History from './pages/History';
import Profile from './pages/Profile';
import CycleTracker from './components/CycleTracker';
import Settings from './components/Settings';
import OrientationSwitcher from './components/OrientationSwitcher';

const App: React.FC = () => {
  const [orientation, setOrientation] = useState('default');

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ marginLeft: '200px', padding: '20px' }}>
          <OrientationSwitcher setOrientation={setOrientation} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/history" component={History} />
            <Route path="/profile" component={Profile} />
            <Route path="/cycle-tracker" component={CycleTracker} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;