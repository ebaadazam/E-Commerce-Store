import { Button, Grid, TextField, Typography, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../State/Authentication/Action';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // State for Snackbar control
    const [openSnackbar, setOpenSnackbar] = useState(false);

    // Close Snackbar function
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            email: data.get("email"),
            password: data.get("password")
        }

        dispatch(login(userData));

        // Open Snackbar after login
        setOpenSnackbar(true);

        console.log("userData (login)", userData);
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

             {/* Snackbar for success message with green tick */}
             <Snackbar
                open={openSnackbar}
                autoHideDuration={9000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                message={
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon style={{ marginRight: '8px', color: 'green' }} />
                        You are logged in successfully!
                    </span>
                }
            />
        </div>
    )
}

export default LoginForm;
