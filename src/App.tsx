import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login/Login'
import ReaderContainer from './components/Main/MainContainer';
import { RootState } from './redux/reduxStore';
import {
  Route,
  Redirect
} from "react-router-dom";
import Register from './components/Register/Register';
import { getInit } from './redux/reducers/authReducer';
import Article from './components/Article/Article';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const App:FC<CommonProps> = (props) => {

  useEffect(() => {
    props.getInit()
  }, [])

  const theme = createMuiTheme({
    palette: {
      type: props.darkMode?'dark':'light'
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{height:'100%'}}>
        <Route path='/reader' component={() => <ReaderContainer/>}/>
        <Route exact path='/login' component={() => <Login/>}/>
        <Route path='/register' component={() => <Register/>}/>
        <Route path='/article/:id'><Article/></Route>
        {!props.isAuth?<Redirect to='login'/>:null}
        <Redirect from='/' to='login'/>
      </Paper>
    </ThemeProvider>
  );
}

const mapState = (state:RootState):MapState => {
  return {
    isAuth: state.auth.isAuth,
    role: state.auth.role,
    darkMode: state.articles.isDark
  }
}

export default connect<MapState, MapDispatch, {}, RootState>(mapState,{getInit})(App)

type MapState = {
  isAuth: boolean
  role: string
  darkMode: boolean
}
type MapDispatch = {
  getInit: () => void
}
type CommonProps = MapState&MapDispatch