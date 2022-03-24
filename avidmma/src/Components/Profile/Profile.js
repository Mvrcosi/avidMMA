import styled from 'styled-components'
import React, { useEffect } from 'react'
import EventContent from '../Events/EventContent'
import ProfileSideBar from './ProfileSideBar'
import { useNavigate } from "react-router-dom";

import useAuth from '../../Context/useAuth';

const Profile = () => {
  const navigate = useNavigate()
  const { user, logIn } = useAuth()


  useEffect(() => {
    if (!user) {
      return navigate('/')
    }
  })

  return (
    <Container >
      <ProfileSideBar />
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

export default Profile