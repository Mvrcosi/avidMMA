import React, { useEffect } from 'react'
import styled from 'styled-components'
import EventContent from '../Events/EventContent'
import AdminDashboard from './AdminDashboard'
import AdminSideBar from './AdminSideBar'
import useAuth from '../../Context/useAuth'
import { useNavigate } from 'react-router-dom'

const Admin = () => {

    const navigate = useNavigate()

    const { user } = useAuth()

    setTimeout(() => {
        if (!user) {
            return
        }

        if (user.uid !== "yOrlg8xrQMMAuHiu5SuwCzyQwdu1") {
            navigate('/')
        }

    }, (2000));

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