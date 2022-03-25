import React, { useEffect, useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

import { db } from '../../firebase'

import { doc, getDoc, getDocs, collection, setDoc } from "firebase/firestore";





const EventButton = () => {

    const [open, setOpen] = useState(false);
    const [eventName, setEventName] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEventChange = e => {
        setEventName(e.target.value)
    }

    const handleAddEvent = async (e) => {
        e.preventDefault()

        let eventID = eventName.split(' ').join('-').replace(':', "").replace('.', '')

        try {
            await setDoc(doc(db, 'events', eventID), { eventName })

        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <Button variant='contained' onClick={handleClickOpen} sx={{ m: 2, p: 2 }}>Add Event</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ m: '0 auto' }}>Add Event</DialogTitle>
                <DialogContent>
                    <TextField
                        sx={{ width: '50ch' }}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Event Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={handleEventChange}
                    />

                </DialogContent>
                <DialogActions sx={{ width: '50%', m: '10px auto' }}>
                    <Button sx={{ width: '100%' }} variant='outlined' onClick={handleAddEvent} >ADD EVENT</Button>
                </DialogActions>
            </Dialog>
        </ >
    )


}

export default EventButton

