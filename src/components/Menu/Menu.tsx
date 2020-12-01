import React from 'react';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reduxStore';
import {logOut} from '../../redux/reducers/authReducer'
import {setDarkMode} from '../../redux/reducers/articlesReducer'
import { Link, SwitchProps } from 'react-router-dom';
import Switch, { SwitchClassKey } from '@material-ui/core/Switch';
import { FormControlLabel } from '@material-ui/core';

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

const IOSSwitch = withStyles((theme:Theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }:Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

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
          <FormControlLabel
            // @ts-ignore
            control={<IOSSwitch checked={props.isDark} onChange={props.setDarkMode} name="checkedB" />}
            label="Change color mode"
          />
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

const mapStateToProps = (state:RootState):mapState => {
  return {
    isDark: state.articles.isDark
  }
}

export default connect<mapState, mapDispath, ownProps, RootState>(mapStateToProps,{logOut, setDarkMode})(Menu)

type mapDispath = {
  logOut: () => void
  setDarkMode: () => void
}
type mapState = {
  isDark: boolean
}
type ownProps = {
  login: string | null
  role: string| null
}

type CommonProps = mapDispath&ownProps

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}


interface Props extends SwitchProps {
  classes: Styles;
}