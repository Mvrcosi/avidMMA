import { Button, Paper, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../Context/useAuth'
import styled from 'styled-components'


const ErrorPage = () => {


  const user = useAuth()


  const navigate = useNavigate()
  const [count, setcount] = useState(5)


  useEffect(() => {

    setTimeout(() => {
      navigate('/')
    }, (5000));

  }, [user])


  useEffect(() => {

    const countDown = setInterval(() => {
      setcount(count - 1)
    }, (1000));

    return () => {
      clearInterval(countDown)
    }

  }, [count])

  return (
    <Container>
      <Error >
        <Paper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Typography variant='h2' sx={{ textAlign: 'center', fontFamily: 'Courgette', m: 3 }}>
            AvidMMA
          </Typography>
          <Typography variant='h5'>
            Oops, looks like you were placed in a rear naked choke and lost yourself for a second there..
          </Typography>

          <Button sx={{ textDecoration: 'underline' }} variant='text' href='/'>home</Button>

          <Typography variant='h5'>
            Redirecting in ... {count}
          </Typography>

        </Paper>
      </Error>

    </Container >
  )
}

const Error = styled.div`



`

const Container = styled.div`

max-width: 1300px;
margin-right: auto;
margin-left: auto;


`

export default ErrorPage