import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img from '../../assets/img.jpg';
import { Link } from 'react-router-dom';
import { Autor } from '../../types/Autor';
import { useDispatch } from 'react-redux';
import {setLoad} from '../../redux/reducers/articlesReducer'


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
    // color:'#000'
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
  }
}));

export default function MediaCard(props:CommonProps) {
    const classes = useStyles();
    
    const dispatch = useDispatch()

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
                          Author: {props.author.login}
                      </span>
                      <Typography className={classes.descr} variant="body2" color="textSecondary" component="p">
                          {props.descr}
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Link>
      </Card>
    )
}


type CommonProps = {
    name: string
    descr: string
    id: string | number
    author: Autor
    login: string | null
}