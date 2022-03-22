import styled from 'styled-components'
import React from 'react'
import EventContent from '../Events/EventContent'

const Admin = () => {
    return (
        <Container >
            {/* <SideBar /> */}
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


export default Admin