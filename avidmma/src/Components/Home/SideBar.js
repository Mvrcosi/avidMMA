import { Container, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import GoogleButton from '../SignIn/GoogleButton'
import TwitterButton from '../SignIn/TwitterButton'
import EmailSignIn from '../SignIn/EmailSignIn'
import EmailSignUp from '../SignIn/EmailSignUp'






const Sidebar = () => {

    return (
        <Container sx={{ flex: '0.3' }}>
            <Paper sx={{ m: 2, display: 'flex', flexDirection: 'column' }}>
                <img src='https://www.posenfoundation.co.il/wp-content/uploads/2019/02/logo-placeholder-png-3.png' />
                <Typography variant='overline' sx={{ textAlign: 'center', fontSize: '20px' }}>
                    Start Tracking Your Picks!
                </Typography>

                <Divider sx={{ ml: 3, mr: 3 }}> <Typography variant='overline'>Join below</Typography></Divider>
                <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', m: 1 }}>
                    {/* <EmailSignUp /> */}
                    <GoogleButton />
                    <TwitterButton />
                </Paper>
                {/* <Divider sx={{ ml: 3, mr: 3 }}> <Typography variant='overline'>Or</Typography></Divider>
                <EmailSignIn /> */}
            </Paper>


        </Container>
    )
}


export default Sidebar