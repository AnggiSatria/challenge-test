import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register";
import Navbar from "./components/navbar/navbar"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path='/navbar' element={<Navbar/>} />
    </Routes>
  );
}

export default App;
