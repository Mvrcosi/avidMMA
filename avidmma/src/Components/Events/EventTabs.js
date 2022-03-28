import React, { useEffect, useState } from 'react'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FightCard from './FightCard';
import { doc, getDoc, getDocs, collection, setDoc } from "firebase/firestore";
import { db } from '../../firebase'
import { Paper, Box, B55, Avatar, Typography, Tab, Divider, Chip } from '@mui/material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';



const EventTabs = () => {

    const [value, setValue] = useState("UFC-273");
    const [fight, setFight] = useState([])
    const [events, setEvents] = useState([])
    const [likes, setLikes] = useState([])

    const handleChange = async (event, newValue) => {
        setValue(newValue)
        const docRef = doc(db, 'events', newValue)
        getDoc(docRef).then((doc) => {
            setFight(doc.data().fightCard, doc.id)
        })
    };



    const likedPost = async () => {
        await setDoc()
    }

    const renderTab = events.map((el, idx) => {
        return <Tab key={el.id} label={el.id.split('-').join(' ')} value={el.id} />
    })

    const renderFights = fight.map((element, idx) => {
        return (

            <Paper elevation={0} key={idx} sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-evenly' }} >
                <Paper elevation={1} key={element.fighterRed} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', m: 3 }}>
                    <Avatar sx={{ mt: 1 }} src={element.fighterRedImage} />
                    <Typography variant='body1'> {element.fighterRed} </Typography>
                    <Typography variant='overline' sx={{ fontSize: '14px' }}> {element.fighterRedRecord} </Typography>
                    <Paper sx={{ display: 'flex' }} elevation={0}>
                        <FavoriteBorder sx={{ cursor: 'pointer' }} />
                        <Typography>0</Typography>
                    </Paper>
                </Paper>
                <Paper elevation={0} sx={{ width: '10%', display: 'flex', flexDirection: 'column', mt: 3, mb: 3, justifyContent: 'space-evenly', alignItems: 'center' }} >
                    <Typography sx={{ fontSize: '10px', textAlign: 'center' }} variant='overline'> {element.weightClass}</Typography>
                    <Typography sx={{ fontSize: '10px', textAlign: 'center' }} variant='overline'>vs</Typography>
                    <Chip label="FINAL U DEC" sx={{ fontSize: '8px' }} />
                </Paper>

                <Paper elevation={1} key={element.fighterBlue} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', m: 3 }}>
                    <Avatar sx={{ mt: 1 }} src={element.fighterBlueImage} />
                    <Typography variant='body1'> {element.fighterBlue} </Typography>
                    <Typography variant='overline' sx={{ fontSize: '14px' }}> {element.fighterBlueRecord} </Typography>
                    <Paper sx={{ display: 'flex' }} elevation={0}>
                        <FavoriteBorder sx={{ cursor: 'pointer' }} />
                        <Typography >0</Typography>
                    </Paper>
                </Paper>
            </Paper>
        )
    })


    useEffect(() => {
        const events = async () => {
            const data = await getDocs(collection(db, 'events'))
            setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        events()

        return () => {
            setEvents([])
        }
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

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', m: 1, borderRadius: '5px', maxWidth: 850 }}>
                    <TabList onChange={handleChange} scrollButtons variant='scrollable'>
                        {renderTab}
                    </TabList>
                </Box>
                <TabPanel value={value}>
                    {renderFights}
                </TabPanel>
            </TabContext>
        </Box>
    )
}
export default EventTabs