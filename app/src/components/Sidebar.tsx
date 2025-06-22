import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <div className="w-64 h-full bg-gray-800 text-white">
            <h2 className="text-xl font-bold p-4">Cycle Tracker</h2>
            <nav className="flex flex-col p-4">
                <Link to="/" className="py-2 hover:bg-gray-700 rounded">Home</Link>
                <Link to="/tracker" className="py-2 hover:bg-gray-700 rounded">Tracker</Link>
                <Link to="/calendar" className="py-2 hover:bg-gray-700 rounded">Calendar</Link>
                <Link to="/settings" className="py-2 hover:bg-gray-700 rounded">Settings</Link>
            </nav>
        </div>
    );
};

export default Sidebar;