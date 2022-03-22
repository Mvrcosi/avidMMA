import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import FighterLeft from './FighterLeft';



const FighterCard = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                },
            }}
        >
            <Paper elevation={20} >

                <FighterLeft />

            </Paper>

        </Box>
    )
}

export default FighterCard