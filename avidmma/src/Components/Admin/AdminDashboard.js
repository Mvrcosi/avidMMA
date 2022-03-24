import React from 'react'
import styled from 'styled-components'
import { Paper } from '@mui/material'
const AdminDashboard = () => {
    return (
        <Container sx={{}}>
            <Paper sx={{ m: 2, display: 'flex', flexDirection: 'column' }}>
                <h1>stuff</h1>
            </Paper>
        </Container>
    )
}


const Container = styled.div`
flex: 0.8;

`

export default AdminDashboard