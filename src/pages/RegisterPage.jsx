import React from 'react'
import { TextField, Button } from '@mui/material';
import alert from '../utility/alert';


const RegisterPage = () => {
  const name = React.useRef()
  const phone = React.useRef()
  const email = React.useRef()
  const username = React.useRef()
  const password = React.useRef()


  const handleSubmit = (e) => {
    e.preventDefault()
    
    const nameVal = name.current.value;
    const phoneVal = Number(phone.current.value);
    const emailVal = email.current.value;
    const usernameVal = username.current.value;
    const passwordVal = password.current.value;

    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const usernameFormat = /^[A-Za-z][A-Za-z0-9_]{1,29}$/
    const passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (nameVal.length < 2 || nameVal.length > 50) {
      alert('Name must be between 2 and 50 characters', 'error')
    }
    if (phoneVal < 1000000000) {
      alert('Enter a valid phone number', 'error')
    }
    if (!mailFormat.test(emailVal)) {
      alert('Invalid email', 'error')
      return
    }
    if (usernameVal.length < 2 || usernameVal.length > 20) {
      alert('Username must be between 2 and 20 characters', 'error')
    }
    if (!usernameFormat.test(usernameVal)) {
      alert('Invalid username! first character should be alphabet [A-Za-z] and other characters can be alphabets, numbers or an underscore so, [A-Za-z0-9_].', 'error')
    }
    if (!passwordFormat.test(passwordVal)) {
      alert('password should have minimum of eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:', 'error')
      return
    }
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-form">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <TextField fullWidth id="filled-basic" label="Full Name" variant="filled" inputRef={name} required/>
            <TextField fullWidth id="filled-basic" label="Email" variant="filled" inputRef={email} required/>
            <TextField fullWidth id="filled-basic" label="Phone" type='number' variant="filled" inputRef={phone} required/>
            <TextField fullWidth id="filled-basic" label="Username" variant="filled" inputRef={username} required/>
            <TextField fullWidth id="filled-basic" label="Password" type='password' variant="filled" inputRef={password} required/>
            <Button sx={{marginTop: '20px', width: '100%'}} variant="contained" type='submit'>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
