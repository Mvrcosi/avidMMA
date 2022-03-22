import React from 'react'


import styled from 'styled-components'
import Box from '@mui/material/Box';
import { Paper } from '@mui/material'
import Logo from './Logo';
import EventTabs from './EventTabs';



const EventContent = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 2,
                        width: "100%",
                        height: "100vh",
                    },
                }}
            >
                <Paper elevation={0} >
                    <Logo />
                    <EventTabs />

                </Paper>

            </Box>


        </Container>
    )
}


const Container = styled.div`
flex: 0.7;

`
export default EventContent