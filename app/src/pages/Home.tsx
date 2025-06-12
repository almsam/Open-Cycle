import React, { useState } from 'react';
import OrientationSwitcher from '../components/OrientationSwitcher';
import CycleTracker from '../components/CycleTracker';

const Home: React.FC = () => {
  const [orientation, setOrientation] = useState<string>('default');

  return (
    <div>
      <h1>Menstrual Cycle Tracker</h1>
      <p>Welcome to your menstrual cycle tracking application. Here you can track your cycles, view your history, and manage your settings.</p>
      <OrientationSwitcher setOrientation={setOrientation} />
      <CycleTracker />
    </div>
  );
};

export default Home;