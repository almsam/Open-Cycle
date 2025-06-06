import React from 'react';

const History: React.FC = () => {
    // Sample data for demonstration purposes
    const cycleHistory = [
        { date: '2023-01-01', length: 28, notes: 'Regular cycle' },
        { date: '2023-01-29', length: 30, notes: 'Slightly longer cycle' },
        { date: '2023-02-28', length: 27, notes: 'Regular cycle' },
    ];

    return (
        <div>
            <h1>Cycle History</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Cycle Length (days)</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {cycleHistory.map((cycle, index) => (
                        <tr key={index}>
                            <td>{cycle.date}</td>
                            <td>{cycle.length}</td>
                            <td>{cycle.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default History;