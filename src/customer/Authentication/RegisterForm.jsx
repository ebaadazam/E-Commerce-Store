import { Button, Grid, TextField, Typography, Snackbar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../State/Authentication/Action';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const RegisterForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [openSnackbar, setOpenSnackbar] = useState(false);

    // Close Snackbar
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password")
        };

        dispatch(register(userData));

        // Show Snackbar on successful registration
        setOpenSnackbar(true);

        console.log("userData(register)", userData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto', padding: '2rem', background: '#f5f5f5', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>

                <Typography variant='h4' align='center' gutterBottom>
                    Register
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='firstName'
                            name='firstName'
                            label='First Name'
                            fullWidth
                            autoComplete='given-name'
                            variant='outlined'
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='lastName'
                            name='lastName'
                            label='Last Name'
                            fullWidth
                            autoComplete='family-name'
                            variant='outlined'
                        />
                    </Grid>

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
                            autoComplete='new-password'
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
                            Register
                        </Button>
                    </Grid>
                </Grid>

                <div className='flex justify-center flex-col items-center mt-4'>
                    <div className='py-3 flex items-center'>
                        <p>Hey! Already have an account?</p>
                        <Button onClick={() => navigate("/login")} className='ml-2' size='small' color='primary'>
                            Login
                        </Button>
                    </div>
                </div>
            </form>

            {/* Snackbar for success message with green tick */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                message={
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleIcon style={{ marginRight: '8px', color: 'green' }} />
                        You are registered successfully!
                    </span>
                }
            />
        </div>
    )
}

export default RegisterForm;
