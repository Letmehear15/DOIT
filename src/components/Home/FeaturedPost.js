import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';
import image from '../../assets/img.jpg'
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
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
    color: theme.palette.primary.main,
    fontSize:'20px',
    cursor: 'pointer'
  },
  descr: {
    display: 'block',
    height: '200px',
    overflow:'hidden',
  }
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
        <Card className={classes.card} style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
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
