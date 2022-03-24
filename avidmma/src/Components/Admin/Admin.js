import React from 'react'
import styled from 'styled-components'

import EventContent from '../Events/EventContent'
import AdminDashboard from './AdminDashboard'
import AdminSideBar from './AdminSideBar'

const Admin = () => {
    return (
        <Container >
            <AdminSideBar />
            <AdminDashboard />

        </Container>
    )
}


const Container = styled.div`
display: flex;
margin-left: auto;
margin-right: auto;
`


export default Admin