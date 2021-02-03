import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { STAGEMAP } from '../../Helps/StageMap';
import { getArticles } from '../../redux/reducers/articlesReducer';
import Header from './Header';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    position: 'relative',
    marginBottom: theme.spacing(4),
    paddingBottom:'30px',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  link: {
    marginTop: '20px',
    textDecoration: 'none',
    color: theme.palette.primary.light,
    fontSize:'20px',
    cursor: 'pointer'
  },
  descr: {
    display: 'block',
    height: '200px',
    overflow:'hidden',
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  subTitles: {
    color:'grey',
    display: 'block',
    fontSize:'16px',
  }
}));

const CategoryCards = () => {
  const dispatch = useDispatch()
  const  { id }  = useParams()
  const selectPosts = useSelector(state => state.articles.articles)
  
  const featuredPosts = selectPosts.filter(el => el.stage===STAGEMAP.approved&&el.category===id)

  const isFeaturedPosts = featuredPosts.length === 0

  useEffect(() => {
    dispatch(getArticles())
  },[dispatch])
  
  return (
    <React.Fragment>
      <Header title="LOGOS POLYTECHNIKOS"/>
      <CssBaseline />
      <Grid container spacing={2} style={{width:'100%'}}> 
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.id} post={post} />
        ))}
        
      </Grid>
      {isFeaturedPosts&& 
          <Typography align="center">
            There is no any article
          </Typography>
        }
    </React.Fragment>
  )
}

function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={4}>
      <Card className={classes.card} variant="outlined">
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography variant="h4">
              {post.title}
            </Typography>
            <Typography className={classes.subTitles}>
              Author: {post.author.login}
            </Typography>
            <Typography className={classes.subTitles}>
              Category: {post.category}
            </Typography>
            <Typography variant="subtitle1" paragraph className={classes.descr} >
              {post.descr}
            </Typography>
            <Link className={classes.link} to={`/article/${post.id}`}>
              Read more
            </Link>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
 

export default CategoryCards