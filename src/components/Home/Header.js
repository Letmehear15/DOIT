import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {logOut} from '../../redux/reducers/authReducer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'flex-end',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration:'none',
    color: theme.palette.type === 'dark'?'#fff':"#000"
  },
}));

function Header({ title, login, logOut, isAbout }) {
  const classes = useStyles();

  const onExit = () => {
    localStorage.removeItem('login')
    localStorage.removeItem('password')
    logOut()
  }

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography> DOIT </Typography>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        {
          !login?
          <>
            <Link to='/login' style={{textDecoration:'none'}}>
              <Button variant="outlined" size="small">
                Sign in
              </Button>
            </Link>
            <Link to='/register' style={{textDecoration:'none'}}>
              <Button variant="outlined" size="small">
                Sign up
              </Button>
            </Link>
          </>
          :
          <>
            <div style={{marginRight:'10px'}}>{login}</div>
            <ExitToAppIcon style={{cursor:'pointer'}} onClick={onExit} color='secondary'/>
          </>
        }
      </Toolbar>
      {isAbout?<Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          <Link
            color="inherit"
            variant="body2"
            to='/about'
            className={classes.toolbarLink}
          >
            About us
          </Link>
      </Toolbar>
      :
        <Toolbar component="nav" variant="dense" style={{justifyContent:'flex-start'}}>
          <Link
            color="inherit"
            variant="body2"
            to='/home'
            className={classes.toolbarLink}
          >
            <ArrowBackIosIcon/>
          </Link>
        </Toolbar>
      }
    </React.Fragment>
  );
}

const mapState = (state) => {
  return {
    login: state.auth.login,
  }
}

export default connect(mapState, {logOut})(Header)

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
