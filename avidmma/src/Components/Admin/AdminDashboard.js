import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Paper, Box, Button, Avatar, Typography } from '@mui/material'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { doc, getDoc, getDocs, collection, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from '../../firebase'


const AdminDashboard = () => {
    const [value, setValue] = useState("UFC-273");
    const [events, setEvents] = useState([])
    const [fight, setFight] = useState([])
    const [addFighterRed, setAddFighterRed] = useState('')
    const [fighterRedInfo, setFighterRedInfo] = useState('')
    const [fighterBlueInfo, setFighterBlueInfo] = useState('')
    const [addFighterBlue, setAddFighterBlue] = useState('')
    const [open, setOpen] = React.useState(false);
    const [weightClass, setWeightClass] = useState('')



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = async (event, newValue) => {
        setValue(newValue)

        const docRef = doc(db, 'events', newValue)

        getDoc(docRef).then((doc) => {
            setFight(doc.data().fightCard, doc.id)
        })
    };

    useEffect(() => {
        const events = async () => {
            const data = await getDocs(collection(db, 'events'))
            setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        events()
    }, [])


    useEffect(() => {
        const docRef = doc(db, 'events', value)
        getDoc(docRef).then((doc) => {
            setFight(doc.data().fightCard, doc.id)
        })
        return () => {
            setFight([])
        }
    }, [])



    const renderTab = events.map((el, idx) => {
        return <Tab key={el.id} label={el.id.split('-').join(' ')} value={el.id} />
    })

    const renderFights = fight.map((element, idx) => {

        return (
            <Paper key={idx} sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-evenly', m: 2, backgroundColor: 'rgb(218,224,230)' }} >
                <Paper key={element.fighterRed} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', m: 3 }}>
                    <Avatar sx={{ mt: 3 }} src={element.fighterRedImage} />
                    <Typography> {element.fighterRed} </Typography>
                    <Typography> {element.fighterRedRecord} </Typography>
                    <Typography> {element.fighterRedFavoriteCount}</Typography>
                </Paper>
                <Paper key={element.fighterBlue} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', m: 3 }}>
                    <Avatar sx={{ mt: 3 }} src={element.fighterBlueImage} />
                    <Typography> {element.fighterBlue} </Typography>
                    <Typography> {element.fighterBlueRecord} </Typography>
                    <Typography> {element.fighterBlueFavoriteCount}</Typography>
                </Paper>
            </Paper >
        )
    })




    const handleAddFighter = async (e) => {
        const docRefRed = doc(db, 'fighters', addFighterRed)
        const docSnapRed = await getDoc(docRefRed)

        const docRefBlue = doc(db, 'fighters', addFighterBlue)
        const docSnapBlue = await getDoc(docRefBlue)

        setFighterRedInfo(docSnapRed.data())
        setFighterBlueInfo(docSnapBlue.data())

        const { name: fighterRed, avatar: fighterRedImage, record: fighterRedRecord, rank: fighterRedRank } = fighterRedInfo
        const { name: fighterBlue, avatar: fighterBlueImage, record: fighterBlueRecord, rank: fighterBlueRank } = fighterBlueInfo

        let fightID = `${fighterRed.replace(' ', '-').replace(' ', '-')}-${fighterBlue.replace(' ', '-').replace(' ', '-')}`
        fightID.toLowerCase()

        const newInfo = { weightClass: weightClass, fightID, fighterRed, fighterRedImage, fighterRedRank, fighterRedRecord, fighterBlue, fighterBlueImage, fighterBlueRank, fighterBlueRecord }

        const eventRef = doc(db, 'events', value)


        await updateDoc(eventRef, { fightCard: arrayUnion(newInfo) })
        handleClose()
        window.location.reload()
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

    return (
        <Container >
            <Paper sx={{ m: 2, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                {renderTab}
                            </TabList>
                        </Box>
                        <TabPanel value={value}>
                            {renderFights}

                            <Paper sx={{ width: '50%', m: "0 auto" }}>
                                <Button variant='contained' onClick={handleClickOpen} sx={{ width: '100%' }}>ADD FIGHT</Button>
                            </Paper>
                        </TabPanel >
                    </TabContext>
                </Box>
            </Paper>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="fighterLeft"
                        label="Fighter Left"
                        type="text"
                        variant="outlined"
                        sx={{ mr: 2 }}
                        onChange={handleChangeRed}
                    />
                    <TextField
                        margin="dense"
                        id="fighterRight"
                        label="Fighter Right"
                        type="text"
                        variant="outlined"
                        sx={{ ml: 2 }}
                        onChange={handleChangeBlue}
                    />


                </DialogContent>

                <DialogContent>
                    <TextField
                        margin="dense"
                        id="weightClass"
                        label="Weight Class"
                        type="text"
                        variant="outlined"
                        fullWidth
                        onChange={handleChangeWeightClass}
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleAddFighter}>Add Card</Button>
                </DialogActions>
            </Dialog>
        </Container>

    )
}


const Container = styled.div`
flex: 0.8;

`

export default AdminDashboard



