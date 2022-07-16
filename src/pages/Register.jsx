import { useState } from 'react'
import { Alert, Form } from "react-bootstrap"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { API } from "../config/api"
import { useMutation } from 'react-query';
import { UserContext } from '../context/userContext';

function Register() {

    const navigate = useNavigate()

    const [state, dispatch] = React.useContext(UserContext)

    const [message, setMessage] = useState()

    document.body.style.backgroundColor="rgba(206, 197, 202, 0.8)"

    const [form, setForm] = useState({
        username : '',
        password : '',
        rePassword : '',
        email : ""
    })

    const { username, password, rePassword, email } = form;

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };

    const handleSubmit = useMutation(async (e) => {
        try {
          e.preventDefault();
      
          // Configuration Content-type
          const config = {
            headers: {
              'Content-type': 'application/json',
            },
          };

          if(form.rePassword != form.password){
            const alert = (
                <Alert variant="danger" className="py-1">
                  Register Failed
                </Alert>
              );
            setMessage(alert)

            return;
          }
      
          // Data body
          const body = JSON.stringify({
            username : form.username,
            password : form.password,
            email : form.email 
          });

          
      
          // Insert data user to database
          const response = await API.post('/auth/register', body, config);

          const alert = (
            <Alert variant="success" className="py-1">
              Register Success
            </Alert>
          );
          setMessage(alert);
          console.log(response.data);

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
              Register Failed
            </Alert>
          );
          setMessage(alert);
          console.log(error);
        }
    });

  return (
    <div>
        <div className="login" style={{width : "100%"}}>
                <form action="" onSubmit={(e) => handleSubmit.mutate(e)} style={{width : "500px", margin : "auto", backgroundColor : "#fff", paddingLeft : "2%", marginTop : "100px", paddingRight : "3%", paddingTop : "50px", paddingBottom : "50px", borderRadius : "5px"}}>

                    <h4 style={{marginLeft : "1%", marginRight : "1%"}}>Register</h4>

                    <Box
                    
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off" 
                    style={{display : "flex", flexDirection : "column"}} 
                    >
                        <TextField name="username" value={form?.username} onChange={handleChange} id="outlined-basic" label="username" variant="outlined" style={{width : "100%"}}/>
                        <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        style={{width : "100%"}}
                        name='password'
                        value={form?.password}
                        onChange={handleChange}
                        />
                        <TextField
                        id="outlined-password-input"
                        label="Repeat Password"
                        type="password"
                        autoComplete="current-password"
                        style={{width : "100%"}}
                        name='rePassword'
                        value={form?.rePassword}
                        onChange={handleChange}
                        />
                        <TextField name="email" value={form?.email} onChange={handleChange} id="outlined-basic" label="email" variant="outlined" style={{width : "100%"}}/>

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