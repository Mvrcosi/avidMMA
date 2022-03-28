import React, { useEffect, useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

import { db } from '../../firebase'

import { doc, getDoc, getDocs, collection, setDoc } from "firebase/firestore";





const EventButton = () => {

    const [open, setOpen] = useState(false);
    const [eventName, setEventName] = useState('')
    const [addFighterRed, setAddFighterRed] = useState('')
    const [fighterRedInfo, setFighterRedInfo] = useState('')
    const [fighterBlueInfo, setFighterBlueInfo] = useState('')
    const [addFighterBlue, setAddFighterBlue] = useState('')
    const [weightClass, setWeightClass] = useState('')


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEventChange = e => {
        setEventName(e.target.value)
    }


    const handleChangeRed = (e) => {
        setAddFighterRed(e.target.value)
    }

    const handleChangeBlue = async (e) => {
        setAddFighterBlue(e.target.value)
    }

    const handleChangeWeightClass = e => {

        setWeightClass(e.target.value)
    }

    const handleAddEvent = async (e) => {
        e.preventDefault()

        let eventID = eventName.split(' ').join('-').replace(':', "").replace('.', '')
        const docRefRed = doc(db, 'fighters', addFighterRed)
        const docSnapRed = await getDoc(docRefRed)

        const docRefBlue = doc(db, 'fighters', addFighterBlue)
        const docSnapBlue = await getDoc(docRefBlue)

        setFighterRedInfo(docSnapRed.data())
        setFighterBlueInfo(docSnapBlue.data())


        const { name: fighterRed, avatar: fighterRedImage, record: fighterRedRecord, rank: fighterRedRank } = fighterRedInfo
        const { name: fighterBlue, avatar: fighterBlueImage, record: fighterBlueRecord, rank: fighterBlueRank } = fighterBlueInfo


        const fightCard = [{
            fightID: `${fighterBlue.replace(' ', '-').replace(' ', '-').toLowerCase()}-${fighterRed.replace(' ', '-').replace(' ', '-').toLowerCase()}`,
            weightClass: weightClass,
            fighterBlue,
            fighterRed,
            fighterRedImage,
            fighterBlueImage,
            fighterRedRecord,
            fighterBlueRecord,
            fighterRedRank,
            fighterBlueRank
        }]

        try {
            await setDoc(doc(db, 'events', eventID), { eventName, fightCard })

        }
        catch (err) {
            console.log(err)
        }

        handleClose()
    }



    return (
        <>
            <Button variant='contained' onClick={handleClickOpen} sx={{ m: 2, p: 2 }}>Add Event</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ m: '0 auto' }}>Add Event</DialogTitle>
                <DialogContent>
                    <TextField
                        sx={{}}
                        margin="dense"
                        id="name"
                        label="Event Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={handleEventChange}
                    />
                    <TextField
                        sx={{}}
                        margin="dense"
                        id="name"
                        label="Weight Class"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={handleChangeWeightClass}

                    />
                    <TextField
                        sx={{}}
                        margin="dense"
                        id="name"
                        label="Main Event Fighter Red"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={handleChangeRed}

                    />
                    <TextField
                        sx={{}}
                        margin="dense"
                        id="name"
                        label="Main Event Fighter Blue"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={handleChangeBlue}

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

