import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login/Login'
import ReaderContainer from './components/Main/MainContainer';
import { RootState } from './redux/reduxStore';
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Register from './components/Register/Register';
import { getInit, initialization } from './redux/reducers/authReducer';
import Article from './components/Article/Article';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Home from './components/Home/Blog';
import About from './components/About/About';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AllCards } from './components/Cards/AllCards';
import CategoryCards from './components/Home/FeaturedPost'

const App:FC<CommonProps> = (props) => {

  useEffect(() => {
    props.initialization()
  }, [])

  const theme = createMuiTheme({
    palette: {
      type: props.darkMode?'dark':'light'
    }
  })
  if(!props.isInit) return <CircularProgress/>
  return (
    <ThemeProvider theme={theme}>
      <Paper >
        <Switch>
          <Route path='/home' component={() => <Home/>}/>
          <Route path='/admin/all' component={() => <AllCards/>}/>
          <Route path='/about' component={() => <About/>}/>
          <Route exact path='/admin' component={() => <ReaderContainer/>}/>
          <Route exact path='/login' component={() => <Login/>}/>
          <Route path='/register' component={() => <Register/>}/>
          <Route path='/category/:id'><CategoryCards/></Route>
          <Route path='/article/:id'><Article/></Route>
          <Redirect from='/' to='/home'/>
        </Switch>
      </Paper>
    </ThemeProvider>
  );
}

const mapState = (state:RootState):MapState => {
  return {
    isAuth: state.auth.isAuth,
    role: state.auth.role,
    darkMode: state.articles.isDark,
    isInit: state.auth.isInit
  }
}

export default connect<MapState, MapDispatch, {}, RootState>(mapState,{getInit, initialization})(App)

type MapState = {
  isAuth: boolean
  role: string
  darkMode: boolean
  isInit: boolean
}
type MapDispatch = {
  getInit: () => void
  initialization: () => void
}
type CommonProps = MapState&MapDispatch