import React from 'react'
import { Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';


const TwitterButton = () => {
    return (
        <Button sx={{ m: "10px auto", width: '80%' }} color='inherit' variant="outlined"> <TwitterIcon sx={{ color: '#1DA1F2' }} /></Button>
    )
}

export default TwitterButton