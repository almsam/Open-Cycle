import React, { useState, useEffect } from 'react';

const Tracker: React.FC = () => {
    const [cycleData, setCycleData] = useState<any[]>([]);
    const [startDate, setStartDate] = useState<string>('');
    const [cycleLength, setCycleLength] = useState<number>(28);
    const [ovulationDay, setOvulationDay] = useState<number>(14);

    useEffect(() => {
        // Fetch existing cycle data from localForage or API
        const fetchCycleData = async () => {
            // Implement API call or localForage retrieval here
        };
        fetchCycleData();
    }, []);

    const handleAddCycle = () => {
        const newCycle = {
            startDate,
            cycleLength,
            ovulationDay,
        };
        setCycleData([...cycleData, newCycle]);
        // Save new cycle data to localForage or API
    };

    return (
        <div className="tracker">
            <h2>Cycle Tracker</h2>
            <div className="input-group">
                <label htmlFor="startDate">Start Date:</label>
                <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="cycleLength">Cycle Length (days):</label>
                <input
                    type="number"
                    id="cycleLength"
                    value={cycleLength}
                    onChange={(e) => setCycleLength(Number(e.target.value))}
                />
            </div>
            <div className="input-group">
                <label htmlFor="ovulationDay">Ovulation Day:</label>
                <input
                    type="number"
                    id="ovulationDay"
                    value={ovulationDay}
                    onChange={(e) => setOvulationDay(Number(e.target.value))}
                />
            </div>
            <button onClick={handleAddCycle}>Add Cycle</button>
            <div className="cycle-list">
                <h3>Cycle History</h3>
                <ul>
                    {cycleData.map((cycle, index) => (
                        <li key={index}>
                            Start Date: {cycle.startDate}, Cycle Length: {cycle.cycleLength} days, Ovulation Day: {cycle.ovulationDay}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Tracker;