import React from 'react';
import Sidebar from '../components/Sidebar';
import Tracker from '../components/Tracker';
import Calendar from '../components/Calendar';

const Home: React.FC = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-4">
                <h1 className="text-2xl font-bold mb-4">Cycle Tracker</h1>
                <Tracker />
                <Calendar />
            </main>
        </div>
    );
};

export default Home;