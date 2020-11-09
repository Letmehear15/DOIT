import React, { FC, useState } from 'react'
import { CommentsType } from '../../types/Comments'
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { nanoid } from 'nanoid'

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
        width:'100%'
    },
    icon: {
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform:'translateY(-50%)'
    }
})

const Comments:FC<CommonProps> = (props) => {
    const classes = useStyles()
    const [comments, setComments] = useState(props.comments)
    const [text, setText] = useState('')


    const onComment = (value:string) => {
        setComments((prev) => ([
            ...prev,
            {
                id:nanoid(),
                text:value
            }
        ]))
        setText('')
    }

    const items = comments.map(comment => <div className={classes.comment}>{comment.text}</div>)
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
                <SendIcon className={classes.icon} onClick={() => onComment(text)}/>
            </div>
        </div>
    )
}

export default Comments


type CommonProps = {
    comments:Array<CommentsType>
}