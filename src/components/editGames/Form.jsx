import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from 'react-query'
import { TextField, Box } from '@mui/material'
import { Row, Col, Button } from 'react-bootstrap'
import cssModule from "../../assets/css/addGames.module.css";

function Forms() {

    const navigate = useNavigate()

    const [cekPdf, setCekPdf] = useState(false);
    
    const [form, setForm] = useState({
        title : '',
        description : '',
        platform : '',
        genre : '',
        url : '',
        screenShoot : '',
        cover : ''
    })

    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form);
    }


  return (
    <div >
        <form action="" onSubmit={handleSubmit} style={{width : "800px", margin : "auto", backgroundColor : "#fff", padding : "5%", display : "flex"}}>

        <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                
                >

                <h4>Edit Games</h4>

                <TextField  id="outlined-basic" label="Tittle" variant="outlined" style={{width : "96%"}}/>

                <textarea  style={{width : "96%", height : "200px", resize : "none"}} placeholder="About This Book"></textarea>

                <label htmlFor="">Platform</label>
                <select name="" id="" style={{width : "96%", height : "50px"}}>
                    <option value=""></option>
                </select>

                <label htmlFor="">Genre</label>
                <select name="" id="" style={{width : "96%", height : "50px"}}>
                    <option value=""></option>
                </select>

                <label htmlFor="">Game URL / Download URL</label>
                <input type="url" style={{width : "96%", height : "50px"}}/>

                <Row
                className={cssModule.uploadSection}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Col>
                  <label htmlFor="bookPdf">
                    <div>
                      <span>Add New Game</span>
                      <img src="" alt="" />
                    </div>
                  </label>
                  <input
                    type="file"
                    name="bookPdf"
                    id="bookPdf"
                    
                    hidden
                  />
                </Col>
                <Col>
                  {cekPdf ? (
                    <img src="" alt="" />
                  ) : (
                    <p>No PDF Uploaded</p>
                  )}
                </Col>
              </Row>

                
                </Box>

                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                
                >

<Row
                className={cssModule.uploadSection}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Col>
                  <label htmlFor="bookPdf">
                    <div>
                      <span>Add New Game</span>
                      <img src="" alt="" />
                    </div>
                  </label>
                  <input
                    type="file"
                    name="bookPdf"
                    id="bookPdf"
                    
                    hidden
                  />
                </Col>
                <Col>
                  {cekPdf ? (
                    <img src="" alt="" />
                  ) : (
                    <p>No PDF Uploaded</p>
                  )}
                </Col>
              </Row>

                <Button type="submit" variant='danger' style={{marginTop : "600px"}}>Submit</Button>
                </Box>
        </form>
    </div>
  )
}

export default Forms