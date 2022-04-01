import React from 'react'
import { Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { auth } from '../../firebase';
import useAuth from '../../Context/useAuth';
import { useNavigate } from "react-router-dom";


const TwitterButton = () => {

    const navigate = useNavigate()
    const { twitterSignIn } = useAuth()

    const handleSignIn = e => {
        twitterSignIn()
        navigate('/profile')

    }

    return (
        <Button onClick={handleSignIn} sx={{ m: "10px auto", width: '80%' }} color='inherit' variant="outlined"> <TwitterIcon sx={{ color: '#1DA1F2' }} /></Button>
    )
}

export default TwitterButton