import React from 'react'
import IMG from "../../assets/img/outlast.png"
import { Button } from '@mui/material'

function CardDetail() {

    const Screenshoot = [ 
        {
            img : IMG,
            img2 : IMG,
        },

    ]
    
  return (
        <div className="Card" style={{height : "100%", backgroundColor : "#fff", padding : "5%", width : "850px", margin : "auto"}}>
            <div className="header" style={{display : "flex", flex : "33.3%"}}>
                <div className="left" style={{display : "flex"}}>
                    <img src={IMG} alt="" style={{width : "140px"}}/>
                 </div>
                 
                 <div className="center" style={{display : "flex", flexDirection : "column"}}>
                    <div className="top" style={{display : 'flex', flexDirection : "row"}}>
                        <div className="gameTitle"  style={{marginLeft : "20px"}}>
                            <h4>Game Title</h4>
                        </div>

                        <div className="ByUserName" style={{marginLeft : "20px", marginTop : "3px"}}>
                            <h5>by Username</h5>  
                        </div>
                    </div>
                    
                    <div className="center" style={{display : 'flex', flexDirection : "row", marginTop : "10px", marginLeft : "20px"}}>
                        <h6 >Platform</h6>
                        <h6 style={{marginLeft : "20px"}}>Games</h6>
                    </div>

                    <div className="Bottom" style={{marginTop : "10px", marginLeft : "20px"}}>
                        <Button variant="contained" color="inherit">Download</Button>
                    </div>
                 </div>

            </div> 

            <div className="body" style={{marginTop : "50px"}}>
                <div className="desc">
                    <h4>Description</h4>
                </div>

                <div className="page" >
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi neque possimus, praesentium omnis eaque quos rem dolorum aut perspiciatis cum fugit amet aliquid eligendi assumenda sunt vero laboriosam. Necessitatibus, consequatur.</p>
                </div>
            </div> 

            <div className="footer" style={{marginTop : "50px"}}>
                <div className="title">
                    <h4>Screenshoot</h4>
                </div>
                
                {Screenshoot.map((value) => {
                    return <div className='img' style={{display : "flex", flexDirection : "row", marginTop : "30px"}}>
                             <img src={value.img} alt="" style={{width : "200px"}}/>
                             <img src={value.img2} alt="" style={{width : "200px", marginLeft : "10px"}}/>
                        </div>
                })}
            </div>  
        </div>
  )
}

export default CardDetail