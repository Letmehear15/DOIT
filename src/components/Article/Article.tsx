import React, { FC, useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { RootState } from '../../redux/reduxStore'
import Menu from '../Menu/Menu'
import { Button, CardContent, Paper, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Link, Redirect, useParams } from 'react-router-dom'
import {getFullArticle,deleteArticle, editArticle} from '../../redux/reducers/articlesReducer'
import { Articles } from '../../types/Articles'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CircularProgress from '@material-ui/core/CircularProgress';
import Comments from '../Cards/Comments';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles({
    paper: {
        marginTop: '20px',
        padding: 0,
        paddingBottom:'10px',
        display:'flex',
        flexDirection: 'column'
    },
    media: {
        height: 140,
    },
    icons: {
        display:'flex',
        justifyContent: 'space-between'
    },
    img: {
        width: '1200px',
        height: '200px',
        backgroundImage:`url(https://source.unsplash.com/random)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    btn: {
        display:'block',
        margin: '20px auto'
    },
    link: {
        textDecoration: 'none',
        color: '#fff'
    },
    author: {
        color:'grey',
        display: 'block',
        fontSize:'16px',
        marginBottom:'20px'
    },
    descr: {
        // color:'#000'
    },
    helpIcon: {
        display: 'flex',
        width:'100%',
        justifyContent:'flex-start',
        paddingLeft: '10px'
    },
    deleteIcon: {
        display: 'block',
        marginRight: '10px'
    },
    comments: {
        overflow:'scroll',
        height:300
    },
    descrInput: {
        width:'60%'
    }
})
  

const Article:FC<MapState&MapDispatch> = ({login, role, getFullArticle, article, deleteArticle, isLoad, isEditor, isDelete}) => {

    const  { id }:id  = useParams()
    const classes = useStyles()

    const [edit, setEdit] = useState(false)
    const [title, setTitle] = useState('')
    const [descr, setDescr] = useState('')

    const dispatch = useDispatch()
    
    useEffect(() => {
        getFullArticle(id)
        setTitle(article.title)
        setDescr(article.descr)
    },[article.title, article.descr])
    
    if(isLoad) {
        return (
            <div style={{minHeight: '100vh'}}>
                <CircularProgress/>
            </div>
        )
    }

    if(isDelete) {
        return (
            <Redirect to='/home'/>      
        )
    }
    
    const onSave = () => {
        setEdit(false)
        dispatch(editArticle({id, title, descr}))
    }
    
    const onDelete = () => {
        deleteArticle(id)
    }


    const currentAuthor = login === article.author.login

    return (
        <div style={{paddingBottom: 10, minHeight: '100vh'}}>
            <Menu login={login} role={role}/>

            <Paper elevation={3} className={`container ${classes.paper}`}>
                <div className={classes.img}></div>
                <div style={{marginBottom:40}}>
                    <CardContent>
                        {
                            !edit ?
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            :
                            <TextField 
                                label="title" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        }
                        <span className={classes.author}>
                            Author: {article.author.login}
                        </span>
                        {
                            !edit ? 
                            <Typography className={classes.descr} variant="body2" color="textSecondary" component="p">
                                {descr}
                            </Typography>
                            :
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Description"
                                multiline
                                rows={15}
                                variant="outlined"
                                value={descr}
                                onChange={(e) => setDescr(e.target.value)}
                                className={classes.descrInput}
                            />
                        }
                    </CardContent>
                    {
                        (currentAuthor||isEditor)&&
                        <div className={classes.helpIcon}>
                            {edit 
                                ?   
                                    <>
                                        <SaveIcon style={{marginRight: '20px', cursor:'pointer'}} onClick={ onSave }/>
                                        <CancelIcon style={{cursor:'pointer'}} onClick={() => setEdit(false)}/>
                                    </>
                                : 
                                    <>
                                        <DeleteIcon onClick={onDelete} className={classes.deleteIcon} color="secondary" style={{cursor:'pointer'}}/>
                                        <EditIcon onClick={ () => setEdit(true) }  color="primary" style={{cursor:'pointer', marginRight:'10px'}}/>
                                    </>
                            }
                        </div>
                    }
                </div>
                <div className={classes.comments}>
                    <Comments id={id} login={login}/>
                </div>
            </Paper>
            <Link className={classes.link} to='/home'>
                <Button variant="contained" color="primary" className={classes.btn}>
                    Back
                </Button>
            </Link>
        </div>
    )
}

const mapState = (state:RootState):MapState => {
    return {
        role: state.auth.role,
        login: state.auth.login,
        article: state.articles.fullArticle,
        isLoad: state.articles.isLoad,
        isEditor: state.auth.isEditor,
        isDelete: state.articles.isDelete
    }
}



export default connect<MapState, MapDispatch, {}, RootState>(mapState,{getFullArticle, deleteArticle})(Article)

type MapState = {
    login: string | null
    role: string| null
    article: Articles
    isLoad: boolean
    isEditor: boolean
    isDelete: boolean
}

type MapDispatch = {
    getFullArticle: (id:string) => void
    deleteArticle: (id:string) => void
}

type id = {
    id: string
}