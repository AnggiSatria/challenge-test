import { Routes, Route, useNavigate } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register";
import Navbar from "./components/navbar/navbar"
import BrowsePage from "./pages/BrowsePage";
import DetailGames from "./pages/DetailGames";
import DetailGamesOtherUser from "./pages/DetailGamesOtherUser";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext"
import CreateGames from "./pages/CreateGames";
import EditGames from "./pages/EditGames";
import MyGames from "./pages/MyGames";
import { API } from "./config/api"
import { useState } from "react";

function App() {

  const navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    // Redirect Auth
    if (state.isLogin == false) {
      navigate('/login');
    } else {
      navigate('/')
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');
  
      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: 'AUTH_ERROR',
        });
      }
  
      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;
  
      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    checkUser();
  }, []);


  

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
