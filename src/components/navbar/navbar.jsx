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


function Navbar() {

//     const [state, dispatch] = useContext(UserContext)

//   const navigate = useNavigate();

//   const profile = () => {
//     navigate('/profile')
//   }

//   const complain = () => {
//     navigate('/complain')
//   }

//   const logout = () => {
//     console.log(state);
//     dispatch({
//         type : "LOGOUT",
//     })
//     navigate('/')
//   }

//   const [carts, setCarts] = useState([]);


  return (
    <div style={{display : "flex", width : "100%", backgroundColor : "grey"}}>
            <div className="left" style={{marginLeft : "50px", flex : "50%", alignItems : "center", display : "flex", alignItems : "center"}}>
                <Link to="/" style={{textDecoration : "none"}}><h2 style={{color : 'black'}}>Browse</h2></Link>
                <Link to="/" style={{marginLeft : "20px", textDecoration : "none"}}><h2 style={{color : "black"}}>My Page</h2></Link>
            </div>

            <div className="right" style={{display : "flex", flex : "50%", justifyContent : "flex-end", marginRight : "50px", alignItems : "center"}}>

                <div className="avatar">
                    <Nav.Item className='ms-3 avatarIcon'>
                                <div className='dropdown'>
                                    <button
                                        id="dropdownMenu"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        type="button"
                                        className='btnDropDown'
                                        style={{border : 'none', background : "transparent"}}
                                    >
                                        <Avatar
                                            color="#3A3A3A"
                                            name="Anonim"
                                            size="50"
                                            src="https://e7.pngegg.com/pngimages/565/454/png-clipart-user-computer-icons-anonymity-head-miscellaneous-face.png"
                                            round={true}
                                        />
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenu">
                                        <li>
                                            <button className="dropdown-item textTitle fs-5" type="button">
                                                <img src={IconProfile} style={{ width: "25px", height: "25px" }} alt="IconProfile" />
                                                {" "}Profile
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item textTitle fs-5" type="button">
                                                <img src={IconComplain} style={{ width: "25px", height: "25px" }} alt="IconComplain" />
                                                {" "}Complain
                                            </button>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <button className="dropdown-item textTitle fs-5" type="button">
                                                <img src={IconLogout} style={{ width: "25px", height: "25px" }} alt="IconLogout" />
                                                {" "}Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                    </Nav.Item>
                </div>
                </div>
            </div>
  );
}

export default Navbar