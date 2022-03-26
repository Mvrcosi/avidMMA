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

import { doc, getDoc, getDocs, collection, orderBy, onSnapshot, query, where, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from '../../firebase'


const AdminDashboard = () => {
    const [value, setValue] = useState("UFC-273");
    const [events, setEvents] = useState([])
    const [fight, setFight] = useState([])
    const [addFighterLeft, setAddFighterLeft] = useState('')
    const [fighterLeftInfo, setFighterLeftInfo] = useState('')
    const [fighterRightInfo, setFighterRightInfo] = useState('')
    const [addFighterRight, setAddFighterRight] = useState('')
    const [open, setOpen] = React.useState(false);



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

    }, [db])



    const renderTab = events.map((el, idx) => {
        return <Tab key={el.id} label={el.id.split('-').join(' ')} value={el.id} />
    })

    const renderFights = fight.map((element, idx) => {

        return (
            <Paper key={idx} sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-evenly', m: 2, backgroundColor: 'rgb(218,224,230)' }} >
                <Paper key={element.fighterLeft} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', m: 3 }}>
                    <Avatar sx={{ mt: 3 }} src={element.fighterLeftImage} />
                    <Typography> {element.fighterLeft} </Typography>
                    <Typography> {element.fighterLeftRecord} </Typography>
                    <Typography> {element.fighterLeftFavoriteCount}</Typography>
                </Paper>
                <Paper key={element.fighterRight} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', m: 3 }}>
                    <Avatar sx={{ mt: 3 }} src={element.fighterRightImage} />
                    <Typography> {element.fighterRight} </Typography>
                    <Typography> {element.fighterRightRecord} </Typography>
                    <Typography> {element.fighterRightFavoriteCount}</Typography>
                </Paper>
            </Paper >
        )
    })




    const handleAddFighter = async (e) => {
        const docRefLeft = doc(db, 'fighters', addFighterLeft)
        const docSnapLeft = await getDoc(docRefLeft)

        const docRefRight = doc(db, 'fighters', addFighterRight)
        const docSnapRight = await getDoc(docRefRight)

        setFighterLeftInfo(docSnapLeft.data())
        setFighterRightInfo(docSnapRight.data())

        const { name: fighterLeft, avatar: fighterLeftImage, record: fighterLeftRecord, rank: fighterLeftRank } = fighterLeftInfo
        const { name: fighterRight, avatar: fighterRightImage, record: fighterRightRecord, rank: fighterRightRank } = fighterRightInfo

        const newInfo = { fighterLeft, fighterLeftImage, fighterLeftRank, fighterLeftRecord, fighterRight, fighterRightImage, fighterLeftRecord, fighterRightRank, fighterRightRecord }

        const eventRef = doc(db, 'events', value)


        await updateDoc(eventRef, { fightCard: arrayUnion(newInfo) })



    }


    const handleChangeLeft = (e) => {
        setAddFighterLeft(e.target.value)
    }

    const handleChangeRight = async (e) => {
        setAddFighterRight(e.target.value)
    }


    return (
        <Container sx={{}}>
            <Paper sx={{ m: 2, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                {renderTab}
                            </TabList>
                        </Box>
                        <TabPanel value={value} sx={{}}>
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
                        onChange={handleChangeLeft}
                    />
                    <TextField
                        margin="dense"
                        id="fighterRight"
                        label="Fighter Right"
                        type="text"
                        variant="outlined"
                        sx={{ ml: 2 }}
                        onChange={handleChangeRight}

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



