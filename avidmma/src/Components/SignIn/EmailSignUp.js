import React, { useState } from 'react'
import { Button, Alert, Stack, Typography, Dialog, DialogActions, DialogContent, TextField, Box, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import useAuth from '../../Context/useAuth';

const EmailSignUp = () => {

    const { user, emailSignUp } = useAuth()


    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [open, setOpen] = useState(false);
    const [error, setError] = useState('')

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };


    const register = async (e) => {

        e.preventDefault()
        if (!fullName) {
            return alert('please enter full name')
        }

        try {

            await emailSignUp(email, password)

        }
        catch (err) {

            setError(err.message)
        }
        console.log(fullName, username, email, password)

    }



    return (
        <>
            <Button sx={{ m: "10px auto", width: '80%' }} onClick={handleClickOpen} color='inherit' variant="outlined">  <MailIcon sx={{ color: '#657786' }} /> </Button>

            <form>
                <Dialog
                    open={open}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <img style={{ width: '100px', margin: '0 auto' }} src='https://www.posenfoundation.co.il/wp-content/uploads/2019/02/logo-placeholder-png-3.png' />

                    <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: '800' }}>
                        Create your account
                    </Typography>

                    {error && <Stack sx={{ width: '90%', m: "0 auto" }} spacing={2}>
                        <Alert variant="filled" severity="error">
                            {error}
                        </Alert>
                    </Stack>}


                    <DialogContent>

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >

                            <TextField id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} autoFocus type="text" label="Full Name" variant="outlined" />

                            <TextField id="username" value={username} onChange={(e) => setUsername(e.target.value)} label="username"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AlternateEmailIcon sx={{ width: '15px' }} />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                            />
                            <TextField id="registerEmail" value={email} onChange={(e) => setEmail(e.target.value)} type="email" label="Email" variant="outlined" />

                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel value={password} onChange={(e) => setPassword(e.target.value)}>Password</InputLabel>
                                <OutlinedInput
                                    id="registerPassword"
                                    autoComplete="on"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </Box>

                    </DialogContent>
                    <DialogActions>
                        <Button sx={{ m: "0 auto", mb: 4 }} type='submit' onClick={register} >Continue</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </>
    )
}

export default EmailSignUp