import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function FieldGoal2(props) {
  // Extracting the player_name from URL params
  const { player_name } = useParams();

  // State variables for player stats, loading status, and error handling
  const [playerStats, setPlayerStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch player data from API when component mounts or player_name changes
  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        // Fetch player data from API for playoffs in 2023
        const response = await fetch(`https://nba-stats-db.herokuapp.com/api/playerdata/topscorers/playoffs/2023/?format=json`);
        
        // Check if response is successful
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        // Extract JSON data from response
        const data = await response.json();

        // Find player stats from fetched data
        const player = data.results.find(player => player.player_name === player_name);
        
        // If player not found, throw an error
        if (!player) {
          throw new Error('Player not found');
        }

        // Set player stats to state
        setPlayerStats(player);
        
        // Set loading status to false
        setLoading(false);
      } catch (error) {
        // If an error occurs during fetch, set error message and loading status to false
        setError(error.message);
        setLoading(false);
      }
    };

    // Call the fetchPlayerData function
    fetchPlayerData();
  }, [player_name]); // Depend on player_name to re-fetch data when it changes

  // If loading, display a loading message
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // If an error occurred, display the error message
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  // Display player stats if available
  return (
    <div>
      {playerStats && ( 
        <div className='stat'>
          <h1>{playerStats.player_name}</h1>
          <h2>Team: {playerStats.team}</h2>
          <h2>Points Scored: {playerStats.PTS}</h2>
          <h2>Field Goals Made: {playerStats.field_goals}</h2>
        </div>
      )}
    </div>
  );
}