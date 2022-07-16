import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Avatar from "react-avatar"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
// import { UserContext } from "../../context/userContext";
import IconProfile from "../../assets/img/customer.png"
import IconComplain from "../../assets/img/chatGrey.png"
import IconLogout from "../../assets/img/logoutRed.png"
import { UserContext } from '../../context/userContext';


function Navbar() {

    const [state, dispatch] = useContext(UserContext)
 
    console.log(state);

    const username = state.user.username


  return (
    <div style={{display : "flex", width : "100%", backgroundColor : "#fff", height : "50px"}}>
            <div className="navbarLeft" style={{marginLeft : "50px", flex : "50%", alignItems : "center", display : "flex", alignItems : "center"}}>
                <div className='one'>
                    <Link to="/" style={{textDecoration : "none"}}><h4 style={{color : 'black'}}>Browse</h4></Link>
                </div>
                <div className='second' style={{marginLeft : "20px"}}>
                    <Link to="/" style={{textDecoration : "none"}}><h4 style={{color : "black"}}>My Games</h4></Link>
                </div>
                
            </div>

            <div className="navbarRight" style={{display : "flex", flex : "50%", justifyContent : "flex-end", marginRight : "50px", alignItems : "center"}}>

                <div className="avatar">
                    <div className="username">
                        <Link to='/' style={{textDecoration : 'none'}}><h4>{username}</h4></Link>
                    </div>
                </div>
                </div>
            </div>
  );
}

export default Navbar