import { useState } from 'react'
import { Form } from "react-bootstrap"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Register() {

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
                <Form onSubmit={handleSubmit} style={{width : "500px", margin : "auto", backgroundColor : "#fff", paddingLeft : "2%", marginTop : "100px", paddingRight : "3%", paddingTop : "50px", paddingBottom : "50px", borderRadius : "5px"}}>
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

                    <div className="button" style={{display : "flex", width : "100%", justifyContent : "space-evenly"}}>
                        <Button type='submit' variant='contained' color='inherit' style={{display : "flex"}}>Register</Button>
                        <p>Or Already Have An Account?</p><Link to='/' style={{textDecoration : "none", marginLeft : "-30px"}}>Login</Link>
                    </div>  

                    </Box>
                </Form>
        </div>
    </div>
  )
}

export default Register