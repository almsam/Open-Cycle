import React, { useState } from 'react';

const Profile: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cycleLength, setCycleLength] = useState(28);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to save user profile information
        console.log('Profile updated:', { name, email, cycleLength });
    };

    return (
        <div className="profile-container">
            <h1>User Profile</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="cycleLength">Cycle Length (days):</label>
                    <input
                        type="number"
                        id="cycleLength"
                        value={cycleLength}
                        onChange={(e) => setCycleLength(Number(e.target.value))}
                        required
                    />
                </div>
                <button type="submit">Save Profile</button>
            </form>
        </div>
    );
};

export default Profile;