import { Link } from "react-router-dom";

export default function Nav (props) {
  return (
    <div className="nav">
       <Link to="/">
        <div>Home Page</div>
      </Link>   
      <Link to="/scorer">
        <div>NBA Top Scorers 2023 <br></br> Regular Reason </div>
      </Link>
      <Link to="/scorer2">
        <div>NBA Top Scorers 2023 <br></br> PlayOffs</div>
      </Link>
      <Link to="/scorer3">
        <div> Top 3 players to Look <br></br> Out for Next 5 Years</div>
      </Link>
    </div>
  );
}