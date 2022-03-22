import React from 'react'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebase'
import { login } from '../../features/User/user'
import { useNavigate } from "react-router-dom";



const GoogleButton = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate();


    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((res) => {

                dispatch(login({ user: res.user }))
                navigate('/profile')

            })
            .catch((err) => {
                alert(err.message)
            })
    }


    return (
        <Button sx={{ m: "10px auto", width: '80%' }} color='inherit' variant="outlined" onClick={signInWithGoogle} >  <img src='/assets/google.svg' alt='google' /> </Button>
    )
}

export default GoogleButton