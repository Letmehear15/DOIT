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

function Header({ title, login, logOut, isAbout, isAuthor, isEditor }) {
  const classes = useStyles();
  const permition = isAuthor||isEditor
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
      {isAbout
        ?
          <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            <CustomLink title='About us' path='/about' classes={classes}/>
            {permition&&<CustomLink title='Admin panel' path='/reader' classes={classes}/>}
          </Toolbar>
        :
          <Toolbar component="nav" variant="dense" style={{justifyContent:'flex-start'}}>
            <CustomLink path='/home' classes={classes}>
              <ArrowBackIosIcon/>
            </CustomLink>
          </Toolbar>
      }
    </React.Fragment>
  );
}

const CustomLink = ({title='', path, classes, children}) => {
  return (
        <Link
          color="inherit"
          variant="body2"
          to={path}
          className={classes.toolbarLink}
        >
          {title}
          {children}
        </Link>
  )
}

const mapState = (state) => {
  return {
    login: state.auth.login,
    isAuthor: state.auth.isAuthor,
    isEditor: state.auth.isEditor,
  }
}

export default connect(mapState, {logOut})(Header)

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
