import React, { useState } from 'react';

const CycleTracker: React.FC = () => {
    const [cycleLength, setCycleLength] = useState<number>(28);
    const [lastPeriodDate, setLastPeriodDate] = useState<string>('');
    const [ovulationDate, setOvulationDate] = useState<string>('');

    const calculateOvulationDate = () => {
        if (lastPeriodDate) {
            const lastDate = new Date(lastPeriodDate);
            const ovulation = new Date(lastDate);
            ovulation.setDate(lastDate.getDate() + cycleLength - 14);
            setOvulationDate(ovulation.toDateString());
        }
    };

    return (
        <div>
            <h1>Menstrual Cycle Tracker</h1>
            <form onSubmit={(e) => { e.preventDefault(); calculateOvulationDate(); }}>
                <div>
                    <label>
                        Cycle Length (days):
                        <input
                            type="number"
                            value={cycleLength}
                            onChange={(e) => setCycleLength(Number(e.target.value))}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Last Period Date:
                        <input
                            type="date"
                            value={lastPeriodDate}
                            onChange={(e) => setLastPeriodDate(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Calculate Ovulation Date</button>
            </form>
            {ovulationDate && (
                <div>
                    <h2>Estimated Ovulation Date: {ovulationDate}</h2>
                </div>
            )}
        </div>
    );
};

export default CycleTracker;