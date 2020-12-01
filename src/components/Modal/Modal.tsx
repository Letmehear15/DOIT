import React, { FC, useState } from 'react'
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { SaveNewArticle } from '../../types/Articles';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme)=>({
    paper: {
        position: 'absolute',
        width: '600px',
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
    paperMedia: {
        width: '240px',
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
    }
}))

export const ModalWindow:FC<OwnProps> = (props) => {
    const classes = useStyles()
    const theme = useTheme()
    const [title, setTitle] = useState('')
    const [descr, setDescr] = useState('')

    return (
        <Modal
            open={props.open}
            onClose={props.handleModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
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
                <div className={classes.btns}>
                    <Button variant="contained" color="primary" disabled={title&&descr?false:true} onClick={() => props.onSave({title, descr})}>Save</Button>
                    <Button variant="contained" color="secondary" onClick={props.handleModal}>Cancel</Button>
                </div>
            </form>
        </Modal>
    )
}

type OwnProps = {
    open: boolean
    handleModal: () => void
    onSave: (value:SaveNewArticle) => void
}
