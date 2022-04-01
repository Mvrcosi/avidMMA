import React, { useEffect } from 'react'
import styled from 'styled-components'
import EventContent from '../Events/EventContent'
import Sidebar from './SideBar'
import useAuth from '../../Context/useAuth';
import { useNavigate } from "react-router-dom";



const Home = () => {


    const navigate = useNavigate()
    const { user } = useAuth()

    useEffect(() => {

        if (user) {
            navigate('/profile')
        }
    })

    useEffect(() => {

        document.title = 'avidMMA - Home'
    }, [])


    return (
        <Container>

            {/* SIDE BAR */}
            <Sidebar />

            {/* EVENT CONTENT */}
            <EventContent />

        </Container>
    )
}


const Container = styled.div`

display: flex;
max-width: 1300px;
margin-left: auto;
margin-right: auto;

`
export default Home