import { useState } from 'react'
import { Alert, Form } from "react-bootstrap"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { API } from "../config/api"
import { UserContext } from "../context/userContext"


function Login() {

    

    const navigate = useNavigate()

    const [state, dispatch] = React.useContext(UserContext)
    const [message, setMessage] = useState()

    document.body.style.backgroundColor="rgba(206, 197, 202, 0.8)"

    const [form, setForm] = useState({
        username : '',
        password : ''
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    

    const handleSubmit = useMutation(async(e) => {
        try {
            e.preventDefault();
        
            // Configuration Content-type
            const config = {
              headers: {
                'Content-type': 'application/json',
              },
            };
        
            // Data body
            const body = JSON.stringify(form);
        
            // Insert data user to database
            const response = await API.post('/auth/login', body, config);
  
            const alert = (
              <Alert variant="success" className="py-1">
                Login Success!
              </Alert>
            );
            setMessage(alert);
  
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: { 
                    token : response.data.token,
                    ...response.data.user
                }
              });
            
        
            // Handling response here
          } catch (error) {
            const alert = (
              <Alert variant="danger" className="py-1">
                Login Failed!
              </Alert>
            );
            setMessage(alert);
            console.log(error);
          }
    })

  return (
    <div>
        <div className="login" style={{width : "100%"}}>
                <Form onSubmit={(e) => handleSubmit.mutate(e)} style={{width : "500px", margin : "auto", backgroundColor : "#fff", paddingLeft : "2%", marginTop : "150px", padding : "30px", borderRadius : "5px"}}>
                    
                    <h4 style={{marginLeft : "1%", marginRight : "1%"}}>Login</h4>
                    
                    <Box

                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off" 
                    style={{display : "flex", flexDirection : "column"}} 
                    >
                        <TextField name="username" value={form?.username} onChange={handleChange} id="outlined-basic" label="username" variant="outlined" style={{width : "96%"}}/>
                        <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        style={{width : "96%"}}
                        name='password'
                        value={form?.password}
                        onChange={handleChange}
                        />

                    <div className="button" style={{display : "flex", width : "100%", flex : "50%"}}>
                        <Button type='submit' variant='contained' color='inherit' style={{display : "flex", width : "25%"}}>Login</Button>
                        <div className="right" style={{ marginLeft : "5%", marginTop : "10px", display : "flex"}}>
                            <p>Or</p><Link to='/register' style={{textDecoration : "none", flex : "70", marginLeft : "10px"}}>Create Account</Link>
                        </div>
                       
                    </div>  

                    </Box>
                </Form>
        </div>
    </div>
  )
}

export default Login