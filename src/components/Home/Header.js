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
    display: 'flex',
    justifyContent: 'space-between'
  },
  toolbarTitle: {
    borderBottom: '3px solid red',
    padding: 3
  },
  toolbarSecondary: {
    justifyContent: 'flex-start',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textDecoration:'none',
    color: theme.palette.type === 'dark'?'#fff':"#000",
    
  },
  logo: {
    width: 200,
    height: 200
  }
}));

function Header({ title, login, logOut, isAbout, isAuthor, isEditor, isReviewer, isAdmin }) {
  const classes = useStyles();
  const permition = 
    isAuthor || 
    isEditor ||
    isReviewer || 
    isAdmin
    
  const onExit = () => {
    localStorage.removeItem('login')
    localStorage.removeItem('password')
    logOut()
  }
  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <div > 
          <img className={classes.logo} src="https://www.vspj.cz/2017/images/vspj-logo.svg" alt="logo"/>
        </div>
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
          <div>
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
          </div>
          :
          <div style={{display: 'flex', alignItems:'center'}}>
            <span style={{marginRight:'10px'}}>{login}</span>
            <ExitToAppIcon style={{cursor:'pointer'}} onClick={onExit} color='secondary'/>
          </div>
        }
      </Toolbar>
      {isAbout
        ?
          <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            <CustomLink title='LP Magazines' path='/about' classes={classes}/>
            {permition&&<CustomLink title='Admin panel' path='/admin' classes={classes}/>}
          </Toolbar>
        :
          <Toolbar component="nav" variant="dense" style={{justifyContent:'flex-start'}}>
            <CustomLink border path='/home' classes={classes}>
              <ArrowBackIosIcon/>
            </CustomLink>
          </Toolbar>
      }
    </React.Fragment>
  );
}

const CustomLink = ({title='', path, classes, children, border}) => {
  return (
        <Link
          color="inherit"
          variant="body2"
          to={path}
          className={classes.toolbarLink}
          style={{borderBottom: border? 'none': '1px solid red'}}
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
    isReviewer: state.auth.isReviewer,
    isAdmin: state.auth.isAdmin
  }
}

export default connect(mapState, {logOut})(Header)

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
