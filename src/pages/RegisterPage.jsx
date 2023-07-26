import React from 'react'
import { TextField, FormControl, Button } from '@mui/material';


const RegisterPage = () => {
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-form">
          <h1>Sign Up</h1>
          <FormControl fullWidth>
            <TextField id="filled-basic" label="Full Name" variant="filled" />
            <TextField id="filled-basic" label="Email" variant="filled" />
            <TextField id="filled-basic" label="Phone" type='number' variant="filled" />
            <TextField id="filled-basic" label="Username" variant="filled" />
            <TextField id="filled-basic" label="Password" type='password' variant="filled" />
            <Button sx={{marginTop: '20px'}} variant="contained">Submit</Button>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
