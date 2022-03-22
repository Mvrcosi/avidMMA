import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import { Paper } from '@mui/material'

const Logo = () => {
    return (
        <>
            < Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: "100%",
                        height: 128,
                    },
                }
                }
            >
                <Paper elevation={4} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ width: '150px', }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/UFC_logo.svg/2560px-UFC_logo.svg.png' />
                </Paper>

            </Box >
        </>
    )
}

export default Logo