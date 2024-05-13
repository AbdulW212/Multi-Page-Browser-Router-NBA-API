import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import FieldGoal from "./pages/FieldGoal";
import Scorer from "./pages/Scorer"; 
import Nav from "./components/Nav";
import FieldGoal2 from "./pages/FieldGoal2";
import Scorer2 from "./pages/Scorer2"; 
import Scorer3 from "./pages/Scorer3"; 
import FieldGoal3 from "./pages/FieldGoal3";


export default function App() {
  return (
    <div className="App">
      <Nav />
      <div className="appImage1"><img src="https://i.pinimg.com/736x/22/7e/a5/227ea58c37db0c5e1dc24b14c452eb87.jpg" className="image1"/> </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/scorer" element={<Scorer />} /> 
        <Route path="/scorer2" element={<Scorer2 />} /> 
        <Route path="/scorer3" element={<Scorer3 />} /> 
        <Route path="/fieldGoal/:player_name" element={<FieldGoal />} />
        <Route path="/fieldGoal2/:player_name" element={<FieldGoal2 />} />
        <Route path="/fieldGoal3/:player_name" element={<FieldGoal3 />} />
      </Routes>
      <div 
      className="appImage2"><img src="https://tse2.mm.bing.net/th?id=OIP.TX9ENyxvuQ5USCq3C-zK4QAAAA&pid=Api&P=0&h=220" className="image2"/>
     <img src="https://tse1.mm.bing.net/th?id=OIP.J71uQy07REqPNzlPG_4HigAAAA&pid=Api&P=0&h=220" className="image3"/>
     <img src="https://tse4.mm.bing.net/th?id=OIP.bFfW7vwxoL6BUiYWfYH9pgAAAA&pid=Api&P=0&h=220" className="image4"/>
       </div>
      <Nav />

    </div>
  );
}