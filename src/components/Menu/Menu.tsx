import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reduxStore';
import {logOut} from '../../redux/reducers/authReducer'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    login: {
      fontSize: '20px'
    },
    nav: {
      display:'flex',
      justifyContent:'space-between'
    },
    link: {
      color:'#fff',
      textDecoration:"none"
    }
  }),
);

const Menu = (props:CommonProps) => {
  const classes = useStyles();

  const onExit = () => {
    props.logOut()
  }

  const clearLocal = () => {
    localStorage.removeItem('login')
    localStorage.removeItem('password')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.nav}>
          <div className={classes.login}>
            {props.login} ({props.role})
          </div>
          <div>
            <Link to="/login" onClick={onExit} className={classes.link}>
              <Button onClick={clearLocal} color="inherit">Exit</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default connect<{}, mapDispath, ownProps, RootState>(null,{logOut})(Menu)

type mapDispath = {
  logOut: () => void
}

type ownProps = {
  login: string | null
  role: string| null
}

type CommonProps = mapDispath&ownProps