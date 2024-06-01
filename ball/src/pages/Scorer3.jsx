import React from "react";
import { Link } from "react-router-dom";

export default function Scorer3(props) {
  // Array of player objects containing player names
  const players = [
    { player_name: "Jalen Brunson" },
    { player_name: "Tyrese Maxey" },
    { player_name: "Scottie Barnes" }
  ];

  // Render the component
  return (
    <div className="scorer3"> 
      <p>Click on a name below to check out stats</p>

      {/* Map through the players array and render a Link for each player */}
      {players.map((player, index) => (
        <Link key={index} to={`/fieldGoal3/${encodeURIComponent(player.player_name)}`}>
          <h2>{player.player_name}</h2>
        </Link>
      ))}

      <div className="nextUpSzn">
        <img src= "https://tse1.mm.bing.net/th?id=OIP.EUDogiB9Fv5dbKP0pIlwXgHaGA&pid=Api&P=0&h=220" className="nextUpSzn1" />
        <img src= "https://tse4.mm.bing.net/th?id=OIP.8XuxtloyY5Szz-AWif7tewHaHa&pid=Api&P=0&h=220" className="nextUpSzn2" />
        <img src= "https://tse3.mm.bing.net/th?id=OIP.6kr8CVAujAqJomH1M0WLdAAAAA&pid=Api&P=0&h=220" className="nextUpSzn3" />
      </div>

      <p>
        In the NBA landscape, Jalen Brunson, Tyrese Maxey, and Scottie Barnes are emerging as rising stars worth keeping a keen 
        eye on. With their electrifying performances, they showcase glimpses of immense potential, signaling promising futures in 
        the league. Whether it's Brunson's dynamic playmaking, Maxey's explosive scoring ability, or Barnes' versatile skill set, 
        these young talents are making significant impacts on their teams and capturing the attention of fans and analysts alike. 
        As they continue to develop and refine their game, they are poised to become key figures in the NBA's next generation of stars.
      </p>
    </div>
  );
}