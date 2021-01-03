import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import image from '../../assets/img.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../redux/reducers/articlesReducer';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    paddingBottom:'30px'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  descr: {
    display: 'block',
    height: '300px',
    overflow:'hidden',
  },
  link: {
    marginTop: '20px',
    textDecoration: 'none',
    color: theme.palette.primary.main,
    fontSize:'20px',
    cursor: 'pointer'
  }
}));

export default function MainFeaturedPost() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const mainFeaturedPostarticle = useSelector(state => state.articles.articles[0])

  const id = mainFeaturedPostarticle?mainFeaturedPostarticle.id:null

  useEffect(() => {
    dispatch(getArticles())
  }, [])


  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${image})` }}>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {mainFeaturedPostarticle?.title}
            </Typography>
            <Typography className={classes.descr} variant="h5" color="inherit" paragraph>
              {mainFeaturedPostarticle?.descr}
            </Typography>
            <Link className={classes.link} to={`/article/${id}`}>
              Read more
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
