import { useState } from 'react'
import { Form } from "react-bootstrap"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate()

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
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form);
    }

  return (
    <div>
        <div className="login" style={{width : "100%"}}>
                <Form onSubmit={handleSubmit} style={{width : "500px", margin : "auto", backgroundColor : "#fff", paddingLeft : "2%", marginTop : "150px", padding : "30px", borderRadius : "5px"}}>
                    
                    <h4 style={{marginLeft : "1%", marginRight : "1%"}}>Login</h4>
                    
                    <Box
                    component="form"
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