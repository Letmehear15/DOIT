import React, { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/reduxStore'
import Menu from '../Menu/Menu'
import { Button, CardContent, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import img from '../../assets/img.jpg'
import { Link, useParams } from 'react-router-dom'
import {getFullArticle,deleteArticle} from '../../redux/reducers/articlesReducer'
import { Articles } from '../../types/Articles'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    paper: {
        marginTop: '20px',
        padding: 0,
        paddingBottom:'10px'
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
        backgroundImage:`url(${img})`,
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
    }
})
  

const Article:FC<MapState&MapDispatch> = ({login, role, getFullArticle, article, deleteArticle}) => {
    const  { id }:id  = useParams()
    const classes = useStyles()
    useEffect(() => {
        getFullArticle(id)
    },[])

    if(!article.author) return <CircularProgress/>
    
    const currentAuthor = login===article.author.login

    return (
        <div style={{height:'100vh'}}>
            <Menu login={login} role={role}/>

            <Paper elevation={3} className={`container ${classes.paper}`}>
                <div className={classes.img}></div>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {article.title}
                    </Typography>
                    <span className={classes.author}>
                        Author: {article.author.login}
                    </span>
                    <Typography className={classes.descr} variant="body2" color="textSecondary" component="p">
                        {article.descr}
                    </Typography>
                </CardContent>
                {
                    currentAuthor&&
                    <div className={classes.helpIcon}>
                        <DeleteIcon onClick={() => deleteArticle(id)} className={classes.deleteIcon} color="secondary" style={{cursor:'pointer'}}/>
                        <EditIcon color="primary" style={{cursor:'pointer'}}/>
                    </div>
                }
            </Paper>
            <Link className={classes.link} to='/reader'>
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
        article: state.articles.fullArticle
    }
}



export default connect<MapState, MapDispatch, {}, RootState>(mapState,{getFullArticle, deleteArticle})(Article)

type MapState = {
    login: string | null
    role: string| null
    article: Articles
}

type MapDispatch = {
    getFullArticle: (id:string) => void
    deleteArticle: (id:string) => void
}

type id = {
    id: string
}