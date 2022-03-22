import React from 'react'
import styled from 'styled-components'
import EventContent from '../Events/EventContent'
import Sidebar from './SideBar'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/User/user'


const Home = () => {

    const user = useSelector(selectUser)


    
    return (
        <Container>

            {/* SIDE BAR */}
            <Sidebar
                logo='https://www.posenfoundation.co.il/wp-content/uploads/2019/02/logo-placeholder-png-3.png'
                banner='Start Tracking Your Picks!'
                joinBanner='Join Below'

            />

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