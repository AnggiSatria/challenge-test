import React, { useState } from 'react'


function Login() {

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
        <div className="login">
            
        </div>
    </div>
  )
}

export default Login