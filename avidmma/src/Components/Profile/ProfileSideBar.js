
import React, { useEffect, useState } from 'react'

import { Avatar, Button, Container, Divider, Paper, Typography, Input } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useAuth from '../../Context/useAuth';

import { db } from '../../firebase';

import { setDoc, doc } from 'firebase/firestore';

const ProfileSideBar = () => {

    const { user, logOut } = useAuth()
    let userInfo = { ...user }

    const [open, setOpen] = React.useState(false);
    const [userName, setUserName] = useState('')
    const [displayName, setDisplayName] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUserNameChange = e => {
        setUserName(e.target.value)
    }

    const handleDisplayNameChange = e => {
        if (displayName === '') {
            setDisplayName(userInfo.displayName)
        }
        else {
            setDisplayName(e.target.value)
        }
    }

    const handleProfileUpdate = async (e) => {

        try {
            await setDoc(doc(db, 'users', userInfo.uid), { username: userName, name: userInfo.displayName, avatar: userInfo.photoURL, email: userInfo.email })
            await setDoc(doc(db, 'usernames', userName), { userID: userInfo.uid })
        }
        catch (err) {
            console.log(err)
        }
        handleClose()
    }




    return (
        <Container sx={{ flex: '0.3', }} >
            <Paper elevation={0} sx={{ m: 2, display: 'flex', flexDirection: 'column', }}>

                <Paper elevation={0} sx={{ width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center', m: "0px auto", mt: 3, pt: 5, pb: 5, backgroundColor: 'rgb(218, 224, 230)' }}>

                    {user && userInfo.photoURL ? <Avatar onClick={handleClickOpen} sx={{ p: 1, backgroundColor: 'white', cursor: 'pointer' }} src={user.photoURL} /> : <Avatar sx={{ p: 1 }} src='https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg' />}

                    {user && user.displayName ? <Typography variant="h6" >
                        {user.displayName}
                    </Typography> : <Typography>UNDEFINED</Typography>}

                    {user && user.userName ? <Typography variant='caption' > @{user.userName} </Typography> : <Typography> USERNAME</Typography>}


                </Paper>


                <Button sx={{ p: 2, color: 'black' }}> <SportsMmaIcon sx={{ mr: 1 }} />Picks</Button>


                <Button sx={{ p: 2, color: 'black' }} onClick={logOut}> <ArrowBackIcon /> Sign out</Button>
                <Divider sx={{ m: 1, ml: 3, mr: 3 }} />
                <Typography variant='overline' sx={{ textAlign: 'center', mt: 0, mb: 1 }}>joined Mar, 2022</Typography>

            </Paper>


            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogContent sx={{ width: '300px' }}>

                    <label>Click to change image</label>
                    <Avatar src={userInfo.photoURL} sx={{ m: '0 auto' }} />

                    <label>Change Display Name</label>
                    <TextField
                        margin="dense"
                        id="name"
                        label={userInfo.displayName}
                        type="text"
                        fullWidth
                        onChange={handleDisplayNameChange}
                        variant="outlined"
                    />
                    <label>Add/Change Username</label>
                    <TextField
                        margin="dense"
                        id="name"
                        fullWidth
                        label="Username"
                        type="text"
                        variant="outlined"
                        onChange={handleUserNameChange}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleProfileUpdate}>Update</Button>
                </DialogActions>
            </Dialog>
        </Container >

    )
}

export default ProfileSideBar


{/* <Paper elevation={0} sx={{ m: 3 }}>
                    <Divider />

                    <Paper elevation={0} sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='overline' sx={{ textAlign: "center" }} > Showcase your top fighters</Typography>
                        <AddCircleIcon sx={{ m: '15px auto', cursor: 'pointer' }} />

                    </Paper>

                    <Avatar />

                    <Divider />

                </Paper> */}

{/* <Button sx={{ p: 2, color: 'black' }}>  <HomeIcon sx={{ mr: 1 }} /> Home</Button> */ }
{/* <Button sx={{ p: 2, color: 'black' }}> <MailOutlineIcon sx={{ mr: 1 }} /> Messages</Button> */ }
{/* <Button sx={{ p: 2, color: 'black' }}> <PersonIcon sx={{ mr: 1 }} /> Profile</Button> */ }
