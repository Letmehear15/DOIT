import React, { ChangeEvent, FC, useState } from 'react'
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { SaveNewArticle } from '../../types/Articles';
import { useTheme } from '@material-ui/core/styles';
import { Container, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {TOPICS} from '../../Helps/StageMap'

const useStyles = makeStyles((theme:Theme)=>({
    paper: {
        width:'50%',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        left:'50%',
        top:'50%',
        transform:'translate(-50%, -50%)',
        padding: '20px',
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center'
    },
    modalTitle: {
        marginBottom:'20px'
    },
    readerInput: {
        display:'none',
    },
    btns: {
        width: '100%',
        display:'flex',
        justifyContent:'space-between',
        marginTop: 20
    },
    fileName: {
        display:'block',
        marginBottom:'20px'
    },
    title: {
        marginBottom: 20
    },
    uploadButton: {
        marginTop: 10,
        marginLeft: -1,
        padding: 5,
        width: 350,
        backgroundColor: theme.palette.primary.main
    },
    formControl: {
        minWidth: 120,
    }
}))

export const ModalWindow:FC<OwnProps> = (props) => {
    const classes = useStyles()
    const theme = useTheme()
    const [title, setTitle] = useState('')
    const [descr, setDescr] = useState('')
    const [document, setFile] = useState<File>()
    const [category, setCategory] = useState('')

   const onFileSave = (e:ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files.length) {
        setFile(e.target.files[0])
    }
   }

    return (
        <Modal
            open={props.open}
            onClose={props.handleModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Container component="main" maxWidth="sm">
                <form className={`${classes.paper}`}>
                    <h2 style={{color:theme.palette.primary.light}} className={classes.modalTitle}>New article</h2>
                    <TextField 
                        label="Title" 
                        className={classes.title} 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        multiline
                        rows={15}
                        variant="outlined"
                        value={descr}
                        onChange={(e) => setDescr(e.target.value)}
                    />
                    <SelectCategory setRole={setCategory} role={category}/>
                    <FormControlLabel
                        label="Upload file"
                        className={classes.uploadButton}
                        control={<input type="file" onChange={(e) => onFileSave(e)}/>}
                    />
                    <div className={classes.btns}>
                        <Button variant="contained" color="primary" disabled={title&&descr&&category?false:true} onClick={() => props.onSave({title, descr, document,category})}>Save</Button>
                        <Button variant="contained" color="secondary" onClick={props.handleModal}>Cancel</Button>
                    </div>
                </form>
            </Container>
        </Modal>
    )
}

type OwnProps = {
    open: boolean
    handleModal: () => void
    onSave: (value:SaveNewArticle) => void
}


const SelectCategory = (props:any) => {
    const classes = useStyles()
    
    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Topic</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(event) => props.setRole(event.target.value)}
                value={props.role}
            >
            <MenuItem value={TOPICS.MEDICINE}>{TOPICS.MEDICINE}</MenuItem>
            <MenuItem value={TOPICS.NAVALNY}>{TOPICS.NAVALNY}</MenuItem>
            <MenuItem value={TOPICS.PROGRAMMING}>{TOPICS.PROGRAMMING}</MenuItem>
            <MenuItem value={TOPICS.SCIENCE}>{TOPICS.SCIENCE}</MenuItem>
            </Select>
        </FormControl>
    )
}