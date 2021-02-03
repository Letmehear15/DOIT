import { Button, Container, createStyles, CssBaseline, Fab, FormControlLabel, makeStyles, TextField, Theme, Tooltip, Typography, useTheme } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteJournal, newJournal, setJournals } from '../../redux/reducers/journalReducer';
import { RootState } from '../../redux/reduxStore';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Header from '../Home/Header'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme:Theme) => createStyles({
    link: {
        color: theme.palette.primary.light,
        textDecoration: 'none',
    },
    table: {
        minWidth: 650,
      },
      formControl: {
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
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
    }
}));

const About = () => {
    const dispatch = useDispatch()
    const selectJournals = useSelector((state:RootState) => state.journals.journals)
    const isEditor = useSelector((state:RootState) => state.auth.isEditor)

    const [modal, setModal] = useState(false)

    useEffect(() => {
        dispatch(setJournals())
    }, [dispatch])

    return (
        <Container maxWidth="lg" style={{minHeight:'100vh'}}>
            <CssBaseline />
            <Header title="LP Magazines"  isAbout={false}/>
            <section style={{padding:'0 24px'}}>
               
                <>
                    Aktuální ročník/číslo časopisu
                    <br/>
                    <Articles isEditor={isEditor} links={selectJournals}/>
                </>
            </section>
           {
               isEditor &&
               <Tooltip onClick={() => setModal(true)} title="Add" aria-label="add">
                    <Fab color="primary" >
                        <AddIcon />
                    </Fab>
                </Tooltip>
           }
           <NewJournalModal open={modal} setModal={setModal}/>
        </Container>
    )
}

const Articles = ({links, isEditor}:any) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const onDeleteHandler = (id:string) => {
        dispatch(deleteJournal(id))
    }

    return (
        <>
            {
                links.map((link:any) => {
                    return <div key={link.id} style={{display: 'flex', alignItems:'center', marginBottom:10}}>
                            <a target="_blank" href={`http://backend.doit.kamisuel.cyou/journal/${link.id}/doc`} className={classes.link}>
                                {link.name}
                            </a>
                            {isEditor&&<DeleteIcon style={{marginLeft: 20, cursor:'pointer'}} onClick={() => onDeleteHandler(link.id)}/>}
                        </div>
                })
            }
        </>
    )
}

const NewJournalModal = (props:any) => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const theme = useTheme()
    const [name, setName] = useState('')
    const [document, setDocument] = useState<File>()

    const onHandleSave = () => {
        if(document) {
            dispatch(newJournal(name, document))
        }
        props.setModal(false)
    }

    const onFileSave = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.files&&e.target.files.length) {
            setDocument(e.target.files[0])
        }
    }

    return (
        <Modal
            open={props.open}
            onClose={() => props.setModal(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Container component="main" maxWidth="sm">
                <form className={`${classes.paper}`}>
                    <h2 style={{color:theme.palette.primary.light}} className={classes.modalTitle}>New document</h2>
                    <TextField 
                        label="Name" 
                        className={classes.title} 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <FormControlLabel
                        label="Upload file"
                        className={classes.uploadButton}
                        control={<input type="file" onChange={(e) => onFileSave(e)}/>}
                    />
                    <div className={classes.btns}>
                        <Button variant="contained" color="primary" disabled={name&&document?false:true} onClick={onHandleSave}>Save</Button>
                        <Button variant="contained" color="secondary" onClick={() => props.setModal(false)}>Cancel</Button>
                    </div>
                </form>
            </Container>
        </Modal>
    )
}

export default About