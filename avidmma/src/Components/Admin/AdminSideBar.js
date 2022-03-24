import React from 'react'
import styled from 'styled-components'
import { Avatar, Paper, Typography, Button, Box } from '@mui/material'
import FighterButton from './FighterButton'


const AdminSideBar = () => {
    return (
        <Container sx={{}}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: '100%',
                        height: '100vh',
                    },
                }}
            >
                <Paper elevation={0} sx={{}}>
                    <Paper elevation={0} sx={{ textAlign: 'center', p: 5 }}>
                        <Typography variant='h4'>
                            ADMIN PANEL
                        </Typography>
                        <Avatar sx={{ m: '0 auto' }} />
                        <Typography variant='overline'>
                            Welcome, User
                        </Typography>
                    </Paper>

                    <Paper elevation={0} sx={{ display: 'flex', flexDirection: 'column', p: 4 }}>
                        <Button variant='contained' sx={{ m: 2, p: 2 }}>Add Event</Button>
                        <FighterButton />
                    </Paper>
                </Paper>


            </Box>

        </Container>
    )
}


const Container = styled.div`
flex: 0.2;
height: 100vh

`

export default AdminSideBar