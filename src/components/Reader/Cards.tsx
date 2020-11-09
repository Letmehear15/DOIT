import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../../assets/img.jpg';
import CommentIcon from '@material-ui/icons/Comment';
import Comments from './Comments'
import { CommentsType } from '../../types/Comments';


const useStyles = makeStyles({
  root: {
    maxWidth: '60%',
    marginTop:'30px'
  },
  media: {
    height: 140,
  },
  icons: {
      display:'flex',
      justifyContent: 'space-between'
  }
});

export default function MediaCard(props:CommonProps) {
  const classes = useStyles();
  const [isComment, setComment] = useState(false)

  const onComment = () => {
      setComment(!isComment)
  }
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.descr}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.icons}>
                <Button size="small" color="primary">Learn More</Button>
                <CommentIcon onClick={() => onComment()}/>
            </CardActions>
            {isComment? <Comments comments={props.comments}/>:null}
        </Card>
    )
}


type CommonProps = {
    name: string
    descr: string
    comments: Array<CommentsType>
}