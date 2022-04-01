import React, { useEffect, useState } from 'react'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { doc, getDoc, getDocs, collection, setDoc, query, where, onSnapshot, updateDoc, addDoc, arrayUnion, deleteDoc, deleteField, QuerySnapshot, DocumentSnapshot } from "firebase/firestore";
import { db } from '../../firebase'
import { Paper, Box, Avatar, Typography, Tab, Chip, Button } from '@mui/material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import pull from 'lodash/pull';
import countBy from 'lodash/countBy';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useAuth from '../../Context/useAuth';


function getFighterIdFromName(name) {
    return name.toLowerCase().replace(' ', '-').replace(' ', '-')
}

const EventTabs = () => {

    const { user } = useAuth()
    let userInfo = { ...user }

    const [eventName, setEventName] = useState("UFC-273");
    const [fightCards, setFightCards] = useState([])
    const [events, setEvents] = useState([])
    const [openAlert, setOpenAlert] = useState(false);


    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseAlert}
                severity='error'
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );


    /**
     * The DocumentSnapshot containing our likes.
     * @see https://firebase.google.com/docs/reference/js/firestore_.documentsnapshot
     * @type {[DocumentSnapshot, function]}
     */
    const [ownLikes, setOwnLikes] = useState() // TODO: rename to "ownPicks"

    const handleChange = async (event, newValue) => {
        setEventName(newValue)
        const docRef = doc(db, 'events', newValue)
        getDoc(docRef).then((doc) => {
            setFightCards(doc.data().fightCard, doc.id)
        })
    };

    function hasPicked(fighterID) {
        return ownLikes?.data()?.fighterIDs?.includes(fighterID) || false
    }


    const handleClickAlert = () => {
        setOpenAlert(true);
    };


    const likeFighter = async (e) => {

        if (!user) {
            handleClickAlert()

        } else {

            const btn = e.target.closest('.fighterBtn');
            const fighterName = (btn || e.target).getAttribute('data-fighter-name');
            let fighterID = getFighterIdFromName(fighterName)

            if (fighterID) {
                const fight = fightCards.find((fightCard) => fightCard.fighterBlue === fighterName || fightCard.fighterRed === fighterName);

                // Scenarios:
                // 1. pick fighterBlue
                // 2. unpick fighterBlue
                // 3. pick fighterRed
                // 4. unpick fighterRed

                // let pickFighterID, unpickFighterID;
                /** @type {[]} */
                const fighterIDs = ownLikes?.data()?.fighterIDs || [];
                const otherFighterID = getFighterIdFromName(fight.fighterBlue === fighterName ? fight.fighterRed : fight.fighterBlue);
                // console.log('[likeFighter]', fighterIDs, fighterID);
                if (!hasPicked(fighterID)) {
                    // pick fighterID
                    fighterIDs.push(fighterID);
                    pull(fighterIDs, otherFighterID);
                }
                else {
                    // unpick fighterID
                    pull(fighterIDs, fighterID)
                }

                if (!ownLikes) {
                    const pick = {
                        eventName,
                        uid: user.uid,
                        fighterIDs
                    };
                    await addDoc(collection(db, 'userpicks'), pick)
                }
                else {
                    await updateDoc(doc(db, 'userpicks', ownLikes.id), {
                        fighterIDs
                    })
                }
            }
        }

    }



    useEffect(() => {
        if (!user) {
            return;
        }
        const unsub = onSnapshot(
            query(
                collection(db, "userpicks"),
                where("eventName", "==", eventName),
                where("uid", "==", user.uid)
            ),
            /** @param {QuerySnapshot} snapshot */
            (snapshot) => {
                const ourPicks = snapshot.docs[0];
                // console.log('ourPicks', ourPicks);
                setOwnLikes(ourPicks || null);
            });

        const unsub2 = onSnapshot(
            query(
                collection(db, "userpicks"),
                where("eventName", "==", eventName)
            ),
            /** @param {QuerySnapshot} snapshot */
            (snapshot) => {
                const allEventPickDocs = snapshot.docs;
                const userPicks = allEventPickDocs.map(p => p.data());
                const allFighterIDs = userPicks.map(picks => picks.fighterIDs).flat();
                const counts = countBy(allFighterIDs, id => id);
                // console.log('allEventPickDocs', counts);
            });

        return () => {
            unsub()
            unsub2()
        }

    }, [db, user])




    function FighterCard({ fight, fighter: { name, image, rank, record, ID } }) {
        const picked = hasPicked(ID);

        return (<Paper elevation={picked ? 20 : 1} key={name} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', m: 3, border: '1px solid grey' }}>
            <Avatar sx={{ mt: 1 }} src={image} />
            <Typography variant='body1'> {name} </Typography>
            <Typography variant='overline' sx={{ fontSize: '14px' }}> {record} </Typography>
            <Paper sx={{ display: 'flex' }} elevation={0} name={fight.fightID}>
                {picked ?
                    <FavoriteIcon data-fighter-name={name} className="fighterBtn" onClick={likeFighter} sx={{ cursor: 'pointer', color: 'red' }} /> :
                    <FavoriteBorder data-fighter-name={name} className="fighterBtn" onClick={likeFighter} sx={{ cursor: 'pointer' }} />
                }
            </Paper>
        </Paper>
        )
    }



    const renderFights = fightCards.map((element, idx) => {
        const redFighterId = getFighterIdFromName(element.fighterRed);

        const redFighter = {
            name: element.fighterRed,
            ID: redFighterId,
            image: element.fighterRedImage,
            record: element.fighterRedRecord,
            rank: element.fighterRedRank
        };

        const blueFighterId = getFighterIdFromName(element.fighterBlue);

        const blueFighter = {
            name: element.fighterBlue,
            ID: blueFighterId,
            image: element.fighterBlueImage,
            record: element.fighterBlueRecord,
            rank: element.fighterBlueRank
        }
        return (
            <Paper elevation={0} id={element.fightID} key={idx} sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-evenly' }} >

                <FighterCard fight={element} fighter={redFighter} />

                <Paper elevation={0} sx={{ width: '10%', display: 'flex', flexDirection: 'column', mt: 3, mb: 3, justifyContent: 'space-evenly', alignItems: 'center' }} >
                    <Typography sx={{ fontSize: '10px', textAlign: 'center' }} variant='overline'> {element.weightClass}</Typography>
                    <Typography sx={{ fontSize: '10px', textAlign: 'center' }} variant='overline'>vs</Typography>
                    <Chip label={element.fightStatus} sx={{ fontSize: '8px' }} />
                </Paper>
                <FighterCard fight={element} fighter={blueFighter} />
            </Paper>
        )
    })

    const renderTab = events.map((el, idx) => {
        return <Tab key={el.id} label={el.id.split('-').join(' ')} value={el.id} />
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
        const docRef = doc(db, 'events', eventName)
        getDoc(docRef).then((doc) => {
            setFightCards(doc.data().fightCard, doc.id)
        })

        return () => {
            setFightCards([])
        }
    }, [])

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={eventName}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', m: 1, borderRadius: '5px', maxWidth: 850 }}>
                    <TabList onChange={handleChange} scrollButtons variant='scrollable'>
                        {renderTab}
                    </TabList>
                </Box>
                <TabPanel value={eventName}>
                    {renderFights}
                </TabPanel>
            </TabContext>

            <div>
                <Snackbar
                    open={openAlert}
                    autoHideDuration={6000}
                    onClose={handleCloseAlert}
                    message="Please Sign In To Track Your Picks!"
                    action={action}
                />
            </div>
        </Box>


    )
}
export default EventTabs