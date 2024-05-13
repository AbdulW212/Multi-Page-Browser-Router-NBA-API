import React from "react";
import { Link } from "react-router-dom";

export default function Scorer2(props) {
  const players = [
    { player_name: "Nikola Jokić" },
    { player_name: "Jimmy Butler" },
    { player_name: "Jayson Tatum" }
  ];

  return (
    <div className="scorer2">
        <p>Click on a name below to check out stats</p>
      {players.map((player, index) => (
        <Link key={index} to={`/fieldGoal2/${encodeURIComponent(player.player_name)}`}>
          <h2>{player.player_name}</h2>
        </Link>
      ))}
         <div className="playOffSzn">
         <img src= "https://tse4.mm.bing.net/th?id=OIP.nalxiQ250i3InwRZB0dG2gHaEK&pid=Api&P=0&h=220" className="playOffSzn1" />
         <img src= "https://tse1.mm.bing.net/th?id=OIP.x7k2kaq0bgH31fwdBO5IbAHaEK&pid=Api&P=0&h=220" className="playOffSzn2" />
         <img src= "https://tse2.mm.bing.net/th?id=OIP.rKYUMERHVArlsCJGACvFrgHaE7&pid=Api&P=0&h=220" className="playOffSzn3" />

      </div>
      <p>In the NBA 2023 playoffs, Nikola Jokic showcased his scoring prowess, outshining competitors like Jimmy Butler and 
        Jayson Tatum with his remarkable offensive skill set. Despite a closely contested race, Jokic's ability to consistently 
        deliver high-scoring performances, coupled with his versatility and efficiency on the court, distinguished him as the 
        superior scorer in the postseason. His impact in critical moments solidified his status as a dominant force in the playoffs,
         elevating his team's chances for success.</p>
    </div>
  );
}

