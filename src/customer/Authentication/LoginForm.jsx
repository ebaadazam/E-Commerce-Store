import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import { login } from '../../State/Authentication/Action';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            email:data.get("email"),
            password:data.get("password")
        }
        dispatch(login(userData))

        console.log("userData", userData);

    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto', padding: '2rem', background: '#f5f5f5', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant='h4' align='center' gutterBottom>
        Login
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id='email'
            name='email'
            label='Email'
            fullWidth
            autoComplete='email'
            variant='outlined'
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id='password'
            name='password'
            label='Password'
            type='password'
            fullWidth
            autoComplete='current-password'
            variant='outlined'
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            className='bg-[#9155FD] w-full'
            type='submit'
            variant='contained'
            size='large'
            sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
          >
            Login
          </Button>
        </Grid>
      </Grid>

      <div className='flex justify-center flex-col items-center mt-4'>
        <div className='py-3 flex items-center'>
          <p>Don't have an account?</p>
          <Button onClick={() => navigate("/register")} className='ml-2' size='small' color='primary'>
            Register
          </Button>
        </div>
      </div>
    </form>
        </div>
    )
}

export default LoginForm