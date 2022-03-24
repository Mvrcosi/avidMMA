
import React from 'react'

import { Avatar, Button, Container, Divider, Paper, Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


import useAuth from '../../Context/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';


const ProfileSideBar = () => {


    const { user, logOut } = useAuth()

    let userInfo = { ...user }


    const handleSignOut = e => {
        logOut()
    }


    return (
        <Container sx={{ flex: '0.3' }}>
            <Paper elevation={0} sx={{ m: 2, display: 'flex', flexDirection: 'column' }}>
                <Paper elevation={10} sx={{ width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', m: "0px auto", mt: 3, pt: 5, pb: 5 }}>


                    {user && userInfo.photoURL ? <Avatar sx={{ p: 1, border: '.1px solid grey' }} src={user.photoURL} /> : <Avatar sx={{ p: 1 }} src='https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg' />}

                    {user && user.displayName ? <Typography variant="h6" >
                        {user.displayName}
                    </Typography> : <Typography>UNDEFINED</Typography>}

                    <Typography variant='caption' >@mvrcosi</Typography>

                </Paper>


                <Paper elevation={0} sx={{ m: 3 }}>
                    <Divider />

                    <Paper elevation={0} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='overline' sx={{ textAlign: "center" }} > Showcase your top fighters</Typography>
                        <AddCircleIcon sx={{ m: '15px auto', cursor: 'pointer' }} />

                    </Paper>

                    <Avatar />

                    <Divider />

                </Paper>

                <Button sx={{ p: 2, color: 'black' }}>  <HomeIcon sx={{ mr: 1 }} /> Home</Button>
                <Button sx={{ p: 2, color: 'black' }}> <MailOutlineIcon sx={{ mr: 1 }} /> Messages</Button>
                <Button sx={{ p: 2, color: 'black' }}> <SportsMmaIcon sx={{ mr: 1 }} /> My Picks</Button>
                <Button sx={{ p: 2, color: 'black' }}> <PersonIcon sx={{ mr: 1 }} /> Profile</Button>
                <Button sx={{ p: 2, color: 'black' }} onClick={handleSignOut}> <ArrowBackIcon /> Sign out</Button>
                <Divider sx={{ m: 1, ml: 3, mr: 3 }} />
                <Typography variant='overline' sx={{ textAlign: 'center', mt: 0, mb: 1 }}>joined Mar, 2022</Typography>

            </Paper>
        </Container >

    )
}

export default ProfileSideBar