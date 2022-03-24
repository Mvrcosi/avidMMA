import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebase'
import { useNavigate } from "react-router-dom";
import useAuth from '../../Context/useAuth';



const GoogleButton = () => {

    const navigate = useNavigate()

    const { user, logIn, googleSignIn } = useAuth()


    const signInWithGoogle = async () => {
        googleSignIn()
        navigate('/profile')

    }


    return (
        <Button sx={{ m: "10px auto", width: '80%' }} color='inherit' variant="outlined" onClick={signInWithGoogle} >  <img src='/assets/google.svg' alt='google' /> </Button>
    )
}

export default GoogleButton