import React, { useEffect, useState } from 'react'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { doc, getDoc, getDocs, collection, setDoc, query, where, snapshotEqual, onSnapshot, updateDoc, arrayUnion, deleteDoc } from "firebase/firestore";
import { db } from '../../firebase'
import { Paper, Box, Avatar, Typography, Tab, Chip } from '@mui/material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


import useAuth from '../../Context/useAuth';


const EventTabs = () => {

    const { user } = useAuth()
    let userInfo = { ...user }

    const [value, setValue] = useState("UFC-273");
    const [fight, setFight] = useState([])
    const [events, setEvents] = useState([])
    const [likes, setLikes] = useState([])
    const [liked, setLiked] = useState(false)

    const handleChange = async (event, newValue) => {
        setValue(newValue)
        const docRef = doc(db, 'events', newValue)
        getDoc(docRef).then((doc) => {
            setFight(doc.data().fightCard, doc.id)
        })
    };


    const likePost = async (e) => {

        if (liked) {
            await deleteDoc(doc(db, 'picks', value, 'likes', userInfo.uid))
        }
        else {
            await setDoc(doc(db, 'picks', value, "likes", userInfo.uid), {
                fighter: e.target.id
            })
        }
    }



    useEffect(
        () => onSnapshot(collection(db, 'picks', value, 'likes'), (snapshot) =>
            setLikes(snapshot.docs)
        ),
        [db, value]
    )

    useEffect(
        () =>
            setLiked(
                (likes.findIndex((like) => like.id === userInfo.uid) !== -1)
            ), [likes]
    )

    // const handleLikeFighter = async (e) => {

    //     const docRef = doc(db, 'userpicks', value)
    //     const docSnap = await getDoc(docRef)

    //     const picksRef = doc(db, 'pick', value)
    //     const pickSnap = await getDoc(picksRef)

    //     let fighter = e.target.id

    //     let pick = [
    //         { fighterID: fighter.toLowerCase().replace(' ', '-').replace(' ', '-') }
    //     ]

    //     let picks = [

    //     ]


    //     if (!docSnap.exists()) {
    //         await setDoc(doc(db, 'userpicks', value), { pick })
    //         await setDoc(doc(db, 'picks', value), {})
    //     }
    //     else {
    //         if (fighter !== '') {
    //             await updateDoc(doc(db, 'userpicks', value), { pick: arrayUnion({ fighterID: fighter.toLowerCase().replace(' ', '-').replace(' ', '-') }) })
    //         }
    //     }
    // }
    const renderTab = events.map((el, idx) => {
        return <Tab key={el.id} label={el.id.split('-').join(' ')} value={el.id} />
    })



    const renderFights = fight.map((element, idx) => {
        return (

            <Paper elevation={0} id={element.fightID} key={idx} sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-evenly' }} >
                <Paper elevation={1} key={element.fighterRed} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', m: 3 }}>
                    <Avatar sx={{ mt: 1 }} src={element.fighterRedImage} />
                    <Typography variant='body1'> {element.fighterRed} </Typography>
                    <Typography variant='overline' sx={{ fontSize: '14px' }}> {element.fighterRedRecord} </Typography>
                    <Paper sx={{ display: 'flex' }} elevation={0} name={element.fightID}>

                        {liked ? (
                            <FavoriteIcon onClick={likePost} id={element.fighterRed} className={element.fightID} name={element.fightID} sx={{ cursor: 'pointer', color: 'red' }} />
                        ) : (
                            <FavoriteBorder onClick={likePost} id={element.fighterRed} className={element.fightID} name={element.fightID} sx={{ cursor: 'pointer' }} />

                        )}

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
                        {liked ? (
                            <FavoriteIcon onClick={likePost} id={element.fighterRed} className={element.fightID} name={element.fightID} sx={{ cursor: 'pointer', color: 'red' }} />
                        ) : (
                            <FavoriteBorder onClick={likePost} id={element.fighterRed} className={element.fightID} name={element.fightID} sx={{ cursor: 'pointer' }} />

                        )}

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