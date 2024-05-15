import React, { useEffect, useState } from 'react';

const LeaderboardN = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch leaderboard data from the API endpoint
        fetch('http://127.0.0.1:5000/leaderboard')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch leaderboard data');
                }
                return response.json();
            })
            .then(data => {
                setLeaderboardData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching leaderboard data:', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div className="space-y-4">
                    {leaderboardData.length > 0 ? (
                        leaderboardData.map((participant, index) => (
                            <p key={index} className="text-lg">{index + 1}. {participant[0]} - Score: {participant[1]}</p>
                        ))
                    ) : (
                        <p>No participants found in the database.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default LeaderboardN;