import React from "react";
import { Link } from "react-router-dom";

export default function Scorer(props) {
  // Array of player objects containing player names
  const players = [
    { player_name: "Jayson Tatum" },
    { player_name: "Joel Embiid" },
    { player_name: "Luka Dončić" }
  ];

  //Render the component
  return (
    <div className="scorer"> {/* Render a div with class name 'scorer' */}
      <p>Click on a name below to check out stats</p> {/* Render a paragraph as instruction */}

      {/* Map through the players array and render a Link for each player */}
      {players.map((player, index) => (
        <Link key={index} to={`/fieldGoal/${encodeURIComponent(player.player_name)}`}>
          {/* Render a Link component with player's name as text */}
          <h2>{player.player_name}</h2>
        </Link>
      ))}

      <div className="regSzn">
        <img src= "https://tse2.mm.bing.net/th?id=OIP.p4XBAFurPA_d2K3rxNHrMQHaE5&pid=Api&P=0&h=220" className="regSzn1" />
        <img src= "https://tse3.mm.bing.net/th?id=OIP.z8caH6yiFyEAb-wlpFRO0AHaEK&pid=Api&P=0&h=220" className="regSzn2" />
        <img src= "https://tse3.mm.bing.net/th?id=OIP.vM5rqzXMj5LqWsaX2zy-rwHaF7&pid=Api&P=0&h=220" className="regSzn3" />
      </div>

      <p>
        In the NBA 2023 regular season, Jayson Tatum emerged as a standout scorer, showcasing remarkable versatility and consistency on the court. 
        While the competition was fierce with talents like Luka Doncic and Joel Embiid, Tatum's ability to elevate his scoring game in 
        crucial moments, coupled with his impressive offensive repertoire, distinguished him as the superior scorer. Despite a close race, Tatum's 
        knack for delivering impactful performances ultimately solidified his status as one of the premier scorers in the league.
      </p>
    </div>
  );
}