import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register";
import Navbar from "./components/navbar/navbar"
import BrowsePage from "./pages/BrowsePage";
import DetailGames from "./pages/DetailGames";
import { useContext } from "react";
import { UserContext } from "./context/userContext"

function App() {


  return (
    <Routes>
      <Route path='/' element={<BrowsePage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path='/navbar' element={<Navbar/>} />
      <Route path="/games" element={<DetailGames/>} />
    </Routes>
  );
}

export default App;
