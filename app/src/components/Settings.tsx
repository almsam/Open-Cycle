import React, { useState } from 'react';

const Settings: React.FC = () => {
    const [notificationEnabled, setNotificationEnabled] = useState<boolean>(false);
    const [cycleLength, setCycleLength] = useState<number>(28);

    const handleNotificationChange = () => {
        setNotificationEnabled(!notificationEnabled);
    };

    const handleCycleLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCycleLength(Number(event.target.value));
    };

    const saveSettings = () => {
        // Logic to save settings using localForage or any other method
        console.log('Settings saved:', { notificationEnabled, cycleLength });
    };

    return (
        <div>
            <h2>Settings</h2>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={notificationEnabled}
                        onChange={handleNotificationChange}
                    />
                    Enable Notifications
                </label>
            </div>
            <div>
                <label>
                    Cycle Length (days):
                    <input
                        type="number"
                        value={cycleLength}
                        onChange={handleCycleLengthChange}
                        min="1"
                    />
                </label>
            </div>
            <button onClick={saveSettings}>Save Settings</button>
        </div>
    );
};

export default Settings;