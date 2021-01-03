import React, { FC, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch, useSelector } from 'react-redux';
import { postComments } from '../../redux/reducers/articlesReducer';
import { getComments } from '../../redux/reducers/articlesReducer';
import {RootState} from '../../redux/reduxStore'

const useStyles = makeStyles({
    wrapper: {
        padding: '10px'
    },
    comment: {
        marginBottom:'10px',
        borderBottom: '1px solid #e3e3e3',
        padding:'5px'
    },
    comments: {
        marginBottom:'10px',
        fontWeight: 'bold'
    },
    inputBlock: {
        position: 'relative',
        width:'100%',
        marginTop: '30px'
    },
    input: {
        width:'90%'
    },
    icon: {
        position: 'absolute',
        right: '50px',
        top: '50%',
        transform:'translateY(-50%)'
    },
    author: {
        display:'block',
        color:'grey'
    }
})

const Comments:FC<CommonProps> = (props) => {

    const classes = useStyles()
    const [text, setText] = useState('')

    const dispatch = useDispatch()
    const comments = useSelector((state:RootState) => state.articles.comments)
    
    useEffect(() => {
        dispatch(getComments(props.id))
    },[])

    const onComment = (id: string|number, autor:string|null, text:string) => {
        setText('')
        dispatch(postComments(id, autor, text))
    }

    const items = comments.map(comment => <div key={comment.id} className={classes.comment}> <span className={classes.author}>{comment.autor}</span> {comment.text}</div>)

    return (
        <div className={classes.wrapper}>
            <div className={classes.comments}>Comments</div>
            {items}
            <div className={classes.inputBlock}>
                <TextField 
                    id="standard-basic" 
                    label="Comment" 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} 
                    className={classes.input} 
                    value={text}/>
                <SendIcon className={classes.icon} onClick={() => onComment(props.id, props.login, text)}/>
            </div>
        </div>
    )
}

export default Comments

type CommonProps = {
    login: string | null
    id: string|number
}