import React, { FC, useEffect, useReducer, useState } from 'react';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img from '../../assets/img.jpg';
import { Link } from 'react-router-dom';
import { Autor } from '../../types/Autor';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@material-ui/icons/Edit';
import {editStage, sendArticle, setEditReview, setLoad} from '../../redux/reducers/articlesReducer'
import {RootState} from '../../redux/reduxStore'
import { Button, TextField } from '@material-ui/core';
import { STAGEMAP } from '../../Helps/StageMap';
import LinkToDoc from '@material-ui/core/Link';
import { getUsers } from '../../redux/reducers/usersReducer';

const useStyles = makeStyles((theme:Theme) => createStyles({
  root: {
    width: '60%',
    marginTop:'30px',
    display:'flex',
    flexDirection:'column',
    justifyContent: 'space-between',
    paddingBottom:'10px'
  },
  media: {
    height: 140,
  },
  icons: {
    display:'flex',
    justifyContent: 'space-between',
    marginLeft:'10px',
    padding: 0,
    paddingTop:'10px'
  },
  descr: {
    overflow:'hidden',
    height:'120px',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.light
  },
  author: {
    color:'grey',
    display: 'block',
    fontSize:'16px',
    marginBottom:'20px'
  },
  reviewBlock: {
    width: '100%',
    padding: 15
  },
  reviewText: {
    marginTop: 10
  }
}));

export default function MediaCard(props:CommonProps) {
  const classes = useStyles();
  const theme = useTheme()

  const { review } = props

  const [waitMode, setWait] = useState<STAGEMAP>(props.stage)
  const [textReview, setTextReview] = useState('')
  const [editMode, setEdit] = useState(false)
  const [isSend, setSend] = useState(false)

  const dispatch = useDispatch()
  const isAuthor = useSelector((state:RootState) => state.auth.isAuthor)
  const isReviewer = useSelector((state:RootState) => state.auth.isReviewer)
  const isEditor = useSelector((state:RootState) => state.auth.isEditor)
  const selectUsers = useSelector((state:RootState) => state.users.users)

  const allReviewers = selectUsers.filter((user:any) => user.role==='reviewer')

  useEffect(() => {
    dispatch(getUsers())
  },[dispatch])


  const onSend = (stage:STAGEMAP) => {
    dispatch(editStage(props.id, stage))
    setWait(stage)
  }

  const onNewReview = () => {
    dispatch(props.newReview(`${props.id}`, `${review[0].reviewer.id}`, textReview))
  }

  const onEditReview = () => {
    dispatch(setEditReview(`${review[0].id}`, textReview))
    setEdit(false)
  }

  const onReviewSendHandler = (idArticle:string, idReviewer:string) => {
    dispatch(sendArticle(idArticle, idReviewer))
    onSend(STAGEMAP['waiting reviewer'])
    setSend(true)
  }

  const isReviewText = review ? review[0].review : null

  return (
    <Card className={classes.root}>
        <Link to={`/article/${props.id}`} className={classes.link} onClick={() => dispatch(setLoad(true))}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <span className={classes.author}>
                        Author: {props.author?.login}
                    </span>
                    <span className={classes.author}>
                        Category: {props.category}
                    </span>
                    {isEditor && <StatusComponent waitMode={waitMode}/>}
                    <Typography className={classes.descr} variant="body2" color="textSecondary" component="p">
                        {props.descr}
                    </Typography>
                    {isReviewText &&
                        <div className={classes.reviewText}>
                          <h3>Review: </h3>
                          <Typography>
                            {isReviewText}
                          </Typography>
                        </div>}
                </CardContent>
            </CardActionArea>
        </Link>
        {
          isEditor && waitMode!==STAGEMAP['approved']&&
          allReviewers.map((user:any) => {
            return (
              <React.Fragment key={user.id}>
                <Typography align="center">Login of reviewer: <b>{user.login}</b></Typography>
                <Button disabled={isSend} variant="contained" color="primary" onClick={() => onReviewSendHandler(`${props.id}`, user.id)}> Send to {user.login} </Button><br/>
              </React.Fragment>
            )
          })

        }
        {isReviewer && !isReviewText &&
          <div className={classes.reviewBlock}>
            <TextField 
              label="Write a review" 
              fullWidth
              rows={10} 
              multiline
              value={textReview}
              onChange={(e) => setTextReview(e.target.value)}
            />
            <Button disabled={!textReview} onClick={onNewReview}>
              Leave review
            </Button>

          </div>
        }
        {isReviewer &&  waitMode !== STAGEMAP.approved &&
          <>
            <EditIcon onClick={ () => setEdit(!editMode) }  color="primary"/>
          </>
        }
        {editMode &&
          <div className={classes.reviewBlock}>
            <TextField 
              label="Write a review" 
              fullWidth
              rows={10} 
              multiline
              value={textReview}
              onChange={(e) => setTextReview(e.target.value)}
            />
            <Button onClick={onEditReview}>
              Change review
            </Button>
          </div>
        }
        {
          isAuthor && (waitMode !== STAGEMAP['waiting reviewer'] && waitMode !== STAGEMAP['waiting editor']) 
            ? waitMode !== STAGEMAP['approved'] && <Button onClick={() => onSend(STAGEMAP['waiting editor'])} color="secondary"> Send to editor </Button> 
            : isAuthor && waitMode !== STAGEMAP['approved'] && <div>waiting for editor</div>
        }
        {
          isReviewer && waitMode !== STAGEMAP['waiting editor'] 
            ? waitMode !== STAGEMAP.approved && <Button onClick={() => onSend(STAGEMAP['waiting editor'])} color="secondary"> Send to editor </Button> 
            : isReviewer && <div>waiting for editor</div>
        }
        {
          isEditor && waitMode === STAGEMAP['waiting editor'] 
            ? <> 
                <LinkToDoc style={{textDecoration:'none', color:theme.palette.primary.light}} target="_blank" href={`http://backend.doit.kamisuel.cyou/article/${props.id}/doc`}>
                  Download a document
                </LinkToDoc>
                {isReviewText&&
                  <>
                    <Button onClick={() => onSend(STAGEMAP['approved'])} color="primary"> Aprove </Button> 
                    <Button onClick={() => onSend(STAGEMAP['waiting reviewer'])} color="secondary"> Denied </Button>
                  </>
                }
              </> 
            : null
        }
    </Card>
  )
}

const StatusComponent = (props:any) => {
  const keys = {
    "0":'created',
    "1":'waiting reviewer',
    "2":'reviewer',
    "3":'waiting editor', 
    "4":'editor',
    "6":'approved',
  } as any
  return (
    <span>
      Status: 
      {keys[props.waitMode]}
    </span>
  )
}

type CommonProps = {
  name: string
  descr: string
  id: string | number
  author: Autor
  login: string | null
  stage: STAGEMAP,
  review: any,
  category:string,
  newReview: (articleId:string, userId:string, review:string) => void
}