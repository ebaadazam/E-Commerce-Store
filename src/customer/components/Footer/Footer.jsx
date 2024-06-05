import React from 'react'
import { Button, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
    return (
        <div>
            <Grid className="bg-black text-white text-center mt-10" container sx={{ bgcolor: "black", color: "white", py: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Company </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterbutton> About </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterbutton> Blog </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterbutton> Press </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterbutton> Job </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterbutton> Partners </Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Solutions </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterbutton> Marketing </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterbutton> Analytics </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterbutton> Commerce </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterbutton> Insights </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterbutton> Support </Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Documentation </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterbutton> Guides </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterbutton> API Status </Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'> Legal </Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterbutton> Claim </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterbutton> Privacy </Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterbutton> Terms </Button>
                    </div>
                </Grid>

                <Grid className="pt-20" item xs={12}>
                    <Typography variant='body2' component='p' align='center'>
                        &copy; 2024 My Company. All rights reserved
                    </Typography>
                    <Typography variant='body2' component='p' align='center'>
                        Made for business purpose.
                    </Typography>
                    <Typography variant='body2' component='p' align='center'>
                        Icons made by {' '}
                        <Link href='https://www.freepik.com' color='inherit' underline='always'>
                            Freepik
                        </Link>{' '}
                        from {' '}
                        <Link href='https://www.flaticon.com/' color='inherit' underline='always'>
                            www.flaticon.com
                        </Link>
                    </Typography>
                </Grid>

            </Grid>
        </div>
    );
};

export default Footer;
