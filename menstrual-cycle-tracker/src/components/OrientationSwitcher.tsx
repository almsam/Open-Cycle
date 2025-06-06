import React, { useState } from 'react';

type OrientationSwitcherProps = {
  setOrientation: React.Dispatch<React.SetStateAction<string>>;
};

const OrientationSwitcher: React.FC<OrientationSwitcherProps> = ({ setOrientation }) => {
  const [orientation, updateOrientation] = useState<string>('default');

  const handleOrientationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newOrientation = event.target.value;
    updateOrientation(newOrientation);
    setOrientation(newOrientation);
  };

  return (
    <div className="orientation-switcher">
      <label htmlFor="orientation-select">Select Orientation:</label>
      <select id="orientation-select" value={orientation} onChange={handleOrientationChange}>
        <option value="default">Default View</option>
        <option value="detailed">Detailed View</option>
        <option value="summary">Summary View</option>
      </select>
    </div>
  );
};

export default OrientationSwitcher;