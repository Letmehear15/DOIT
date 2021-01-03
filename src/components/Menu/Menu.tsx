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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.nav}>
          <div className={classes.login}>
            {props.login}
          </div>
          <div>
            <Link to="/home" className={classes.link}>
              <Button color="inherit">Back to home page</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state:RootState):mapState => {
  return {
    isDark: state.articles.isDark
  }
}

export default connect<mapState, mapDispath, ownProps, RootState>(mapStateToProps,{logOut})(Menu)

type mapDispath = {
  logOut: () => void
}
type mapState = {
  isDark: boolean
}
type ownProps = {
  login: string | null
  role: string| null
}

type CommonProps = mapDispath&ownProps