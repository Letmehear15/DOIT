import { Button, Container, Fab, FormControl, InputLabel, makeStyles, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Theme, Tooltip, useTheme } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeRole, deleteUser, getUsers, newUser } from '../../redux/reducers/usersReducer'
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles((theme:Theme) => ({
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
    }
}));

export const AdminPanel = () => {
    const classes = useStyles()

    const [editMode, setEditMode] = useState(false)
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()
    const selectUsers = useSelector((state:any) => state.users.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const onDeleteHandle = (id: string) => {
        dispatch(deleteUser(id))
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Login</TableCell>
                            <TableCell align="right">Role</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Last name</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <Users 
                            selectUsers={selectUsers} 
                            setEditMode={setEditMode}
                            onDeleteHandle={onDeleteHandle}
                            editMode={editMode}
                        />
                    </TableBody>
                </Table>
            </TableContainer>
            <Tooltip title="Add" aria-label="add">
                <Fab color="primary" onClick={() => setModal(true)} >
                    <AddIcon />
                </Fab>
            </Tooltip>
            {
                modal && <ModalNewUser setModal={setModal} open={modal}/>
            }
        </div>
    )
}



const EditForm = (props:any) => {
    const classes = useStyles()
    const {setEditMode, id} = props

    const dispatch = useDispatch()

    const onRoleHandler = (target:any) => {
        dispatch(changeRole(`${id}`, target))
        setEditMode(false)
    }

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(event) => onRoleHandler(event.target.value)}
            >
            <MenuItem value={'editor'}>Editor</MenuItem>
            <MenuItem value={'author'}>Author</MenuItem>
            <MenuItem value={'reviewer'}>Reviewer</MenuItem>
            <MenuItem value={'admin'}>Admin</MenuItem>
            </Select>
        </FormControl>
    )
}
 
const Users = (props:any) => {
    return (
        <>
            {props.selectUsers.map((user:any) => {
                return <TableRow key={user.id}>
                        <TableCell component="th" scope="row">
                            {user.login}
                        </TableCell>
                        <TableCell align="right">{user.role}</TableCell>
                        <TableCell align="right">{user.name}</TableCell>
                        <TableCell align="right">{user.lastname}</TableCell>
                        <TableCell align="right">
                            {
                                props.editMode 
                                ? <> 
                                    <EditForm setEditMode={props.setEditMode} id={user.id}/>
                                    <Button color="secondary" onClick={() => props.setEditMode(false)}> Cancel </Button>
                                </>
                                : <> 
                                    <Button color="secondary" onClick={() => props.onDeleteHandle(`${user.id}`)}> Delete </Button>
                                    <Button color="primary" onClick={() => props.setEditMode(true)}> Edit </Button>
                                </>
                            }
                        </TableCell>
                    </TableRow>
            })}
        </>
    )
}

const ModalNewUser = (props:any) => {
    const classes = useStyles()
    const theme = useTheme()
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')

    const onHandleSave = () => {
        const payload = {
            login,
            password,
            role,
            name,
            lastname: lastName
        }
        dispatch(newUser(payload))
        props.setModal(false)
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
                    <h2 style={{color:theme.palette.primary.light}} className={classes.modalTitle}>New user</h2>
                    <TextField 
                        label="Login" 
                        className={classes.title} 
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <TextField 
                        label="Password" 
                        className={classes.title} 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <NewSelectUser setRole={setRole} role={role}/>
                    <TextField 
                        label="Name" 
                        className={classes.title} 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField 
                        label="Last name" 
                        className={classes.title} 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <div className={classes.btns}>
                        <Button variant="contained" color="primary" disabled={login&&role&&password?false:true} onClick={onHandleSave}>Save</Button>
                        <Button variant="contained" color="secondary" onClick={() => props.setModal(false)}>Cancel</Button>
                    </div>
                </form>
            </Container>
        </Modal>
    )
}

const NewSelectUser = (props:any) => {
    const classes = useStyles()

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(event) => props.setRole(event.target.value)}
                value={props.role}
            >
            <MenuItem value={'editor'}>Editor</MenuItem>
            <MenuItem value={'author'}>Author</MenuItem>
            <MenuItem value={'reviewer'}>Reviewer</MenuItem>
            <MenuItem value={'admin'}>Admin</MenuItem>
            </Select>
        </FormControl>
    )
}