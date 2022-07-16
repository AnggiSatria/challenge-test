import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register";
import Navbar from "./components/navbar/navbar"
import BrowsePage from "./pages/BrowsePage";
import DetailGames from "./pages/DetailGames";
import DetailGamesOtherUser from "./pages/DetailGamesOtherUser";
import { useContext } from "react";
import { UserContext } from "./context/userContext"
import CreateGames from "./pages/CreateGames";
import EditGames from "./pages/EditGames";
import MyGames from "./pages/MyGames";

function App() {


  return (
    <Routes>
      <Route path='/' element={<BrowsePage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path='/navbar' element={<Navbar/>} />
      <Route path="/games" element={<DetailGames/>} />
      <Route path="/games2" element={<DetailGamesOtherUser/>} />
      <Route path="/games/create" element={<CreateGames/>}/>
      <Route path="/games/edit" element={<EditGames/>} />
      <Route path="/my-games" element={<MyGames/>}/>
    </Routes>
  );
}

export default App;
