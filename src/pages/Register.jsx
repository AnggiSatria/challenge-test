import { useState } from 'react'
import { Form } from "react-bootstrap"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate()

    document.body.style.backgroundColor="rgba(206, 197, 202, 0.8)"

    const [form, setForm] = useState({
        username : '',
        password : '',
        rePassword : '',
        enail : ""
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
                <form action="" onSubmit={handleSubmit} style={{width : "500px", margin : "auto", backgroundColor : "#fff", paddingLeft : "2%", marginTop : "100px", paddingRight : "3%", paddingTop : "50px", paddingBottom : "50px", borderRadius : "5px"}}>

                    <h4 style={{marginLeft : "1%", marginRight : "1%"}}>Register</h4>

                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off" 
                    style={{display : "flex", flexDirection : "column"}} 
                    >
                        <TextField name="username" value={form.username} onChange={handleChange} id="outlined-basic" label="username" variant="outlined" style={{width : "100%"}}/>
                        <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        style={{width : "100%"}}
                        name='password'
                        value={form.password}
                        onChange={handleChange}
                        />
                        <TextField
                        id="outlined-password-input"
                        label="Repeat Password"
                        type="password"
                        autoComplete="current-password"
                        style={{width : "100%"}}
                        name='rePassword'
                        value={form.rePassword}
                        onChange={handleChange}
                        />
                        <TextField name="Your Email" value={form.email} onChange={handleChange} id="outlined-basic" label="email" variant="outlined" style={{width : "100%"}}/>

                    <div className="button" style={{display : "flex", width : "100%", flex : "50%"}}>
                        <Button type='submit' variant='contained' color='inherit' style={{display : "flex", justifyContent : "flex-start", width : "25%"}}>Register</Button>

                        <div className="right" style={{display : "flex", width : "75%", justifyContent : "center", marginTop : "10px"}}>
                            <p>Or Already Have An Account?</p><Link to='/login' style={{textDecoration : "none", marginLeft : "10px"}}>Login</Link>
                        </div>
                        
                    </div>  

                    </Box>
                </form>
        </div>
    </div>
  )
}

export default Register