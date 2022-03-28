import React from 'react'
import styled from 'styled-components'
import { Paper, Box } from '@mui/material'
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
                        height: "100%",
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