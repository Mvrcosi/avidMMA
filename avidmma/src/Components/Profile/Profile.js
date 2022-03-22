import styled from 'styled-components'
import React, { useEffect } from 'react'
import EventContent from '../Events/EventContent'
import ProfileSideBar from './ProfileSideBar'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

import { selectUser } from '../../features/User/user'


const Profile = () => {

  const user = useSelector(selectUser)
  let navigate = useNavigate();




  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [])


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