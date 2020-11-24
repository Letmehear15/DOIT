import React, { FC } from 'react'
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles({
    paper: {
        position: 'absolute',
        width: '600px',
        backgroundColor:'#fff',
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
    readerLabel: {
        display:'block',
        width:'130px',
        backgroundColor:'#3f51b5',
        cursor:'pointer',
        color: '#fff',
        boxShadow:'0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
        padding:'10px',
        margin:'30px 0'
    },
    readerLabelDisable: {
        color: '#bdbdbd'
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
})

export const ModalWindow:FC<OwnProps> = (props) => {
    const classes = useStyles()

    return (
        <Modal
            open={props.open}
            onClose={props.handleModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <form className={`${classes.paper}`}>
                <h2 className={classes.modalTitle}>New article</h2>
                <TextField 
                    label="Title" 
                    className={classes.title} 
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={15}
                    variant="outlined"
                />
                <div className={classes.btns}>
                    <Button variant="contained" color="primary" disabled={props.disabledButton} onClick={props.onSave}>Save</Button>
                    <Button variant="contained" color="secondary" onClick={props.handleModal}>Cancel</Button>
                </div>
            </form>
        </Modal>
    )
}

type OwnProps = {
    open: boolean
    disabledButton: boolean
    handleModal: () => void
    onSave: () => void
}
