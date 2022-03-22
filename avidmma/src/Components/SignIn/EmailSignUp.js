import React from 'react'
import { Button } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';

const EmailSignUp = () => {
    return (
        <Button sx={{ m: "10px auto", width: '80%' }} color='inherit' variant="outlined">  <MailIcon sx={{ color: '#657786' }} /> </Button>
    )
}

export default EmailSignUp