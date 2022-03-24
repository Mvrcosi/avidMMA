import React, { useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, FormControl, InputLabel, DialogTitle, MenuItem, Select, Snackbar } from '@mui/material'
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../firebase'



import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const FighterButton = () => {

    const [open, setOpen] = useState(false);
    const [fullName, setFullName] = useState('')
    const [image, setImage] = useState('')
    const [rank, setRank] = useState('')
    const [record, setRecord] = useState('')
    const [weightClass, setWeightClass] = useState('')
    const [openAlert, setOpenAlert] = useState(false);



    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleNameChange = e => {
        setFullName(e.target.value)
    }
    const handleRankChange = e => {
        setRank(e.target.value)
    }
    const handleRecordChange = e => {
        setRecord(e.target.value)
    }
    const handleImageChange = e => {
        setImage(e.target.value)
    }
    const handleChangeSelect = (event) => {
        setWeightClass(event.target.value);
    };

    const handleClickAlert = () => {
        setOpenAlert(true);
    };

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenAlert(false);
    };


    const handleSubmit = async (e) => {
        e.preventDefault()
        let fighterID = fullName.replace(' ', '-').toLocaleLowerCase()
        const fighter = { name: fullName, rank: rank, avatar: image, record: record, weightClass: weightClass }

        try {
            await setDoc(doc(db, 'fighters', fighterID), fighter)
            handleClickAlert()
        }
        catch (err) {
            console.log(err)
        }
        setOpen(false);
    }


    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleCloseAlert}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseAlert}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    const weightClassOptions = [
        {
            value: "WOMEN'S FEATHERWEIGHT",
            label: "WOMEN'S FEATHERWEIGHT",
        },
        {
            value: "WOMEN'S BANTAMWEIGHT",
            label: "WOMEN'S BANTAMWEIGHT",
        },
        {
            value: "WOMEN'S FLYWEIGHT",
            label: "WOMEN'S FLYWEIGHT",
        },
        {
            value: "WOMEN'S STRAWWEIGHT",
            label: "WOMEN'S STRAWWEIGHT",
        },
        {
            value: "WOMEN'S POUND-FOR-POUND ",
            label: "WOMEN'S POUND-FOR-POUND ",
        },
        {
            value: "HEAVYWEIGHT",
            label: "HEAVYWEIGHT",
        },
        {
            value: "LIGHT HEAVYWEIGHT",
            label: "LIGHT HEAVYWEIGHT",
        },
        {
            value: "MIDDLEWEIGHT",
            label: "MIDDLEWEIGHT",
        },
        {
            value: "WELTERWEIGHT",
            label: "WELTERWEIGHT",
        },
        {
            value: "LIGHTWEIGHT",
            label: "LIGHTWEIGHT",
        },

        {
            value: "FEATHERWEIGHT",
            label: "FEATHERWEIGHT",
        },
        {
            value: "BANTAMWEIGHT",
            label: "BANTAMWEIGHT",
        },
        {
            value: "FLYWEIGHT",
            label: "FLYWEIGHT",
        },
        {
            value: "MEN'S POUND-FOR-POUND",
            label: "MEN'S POUND-FOR-POUND ",
        },
    ];
    return (
        <>

            <Button variant='contained' onClick={handleClickOpen} sx={{ m: 2, p: 2 }}> ADD Fighter</Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ m: '0 auto' }}>Add Fighter</DialogTitle>
                <DialogContent sx={{ width: '50%', m: '0 auto' }}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Fighter Full Name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={handleNameChange}
                    />
                    <TextField
                        margin="dense"
                        id="image"
                        label="Fighter Image"
                        type="email"
                        fullWidth
                        variant="outlined"
                        onChange={handleImageChange}
                    />
                    <TextField
                        margin="dense"
                        id="rank"
                        label="Fighter Rank"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={handleRankChange}
                    />
                    <TextField
                        margin="dense"
                        id="record"
                        label="Fighter Record"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={handleRecordChange}
                    />
                    <FormControl sx={{ mt: 2 }} fullWidth>
                        <InputLabel id="demo-simple-select-label">Weight Class</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={weightClass}
                            label="WeightClass"
                            onChange={handleChangeSelect}
                        >
                            {weightClassOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions sx={{ width: '50%', m: '10px auto' }}>
                    <Button sx={{ width: '100%' }} variant='outlined' onClick={handleSubmit}>+</Button>
                </DialogActions>
            </Dialog>
            <div>
                <Snackbar
                    open={openAlert}
                    autoHideDuration={6000}
                    onClose={handleCloseAlert}
                    message="Fighter Created Successfully"
                    action={action}
                />
            </div>

        </>
    )
}

export default FighterButton