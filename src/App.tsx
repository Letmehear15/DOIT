import React, { FC, useEffect,} from 'react';
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

const App:FC<CommonProps> = (props) => {

  useEffect(() => {
    props.getInit()
  }, [])

  return (
    <div>
      <Route path='/reader' component={() => <ReaderContainer/>}/>
      <Route path='/login' component={() => <Login/>}/>
      <Route path='/register' component={() => <Register/>}/>
      <Route path='/article' component={() => <Article/>}/>
      {!props.isAuth?<Redirect to='login'/>:null}
      <Redirect from='/' to='login'/>
    </div>
  );
}

const mapState = (state:RootState):MapState => {
  return {
    isAuth: state.auth.isAuth,
    role: state.auth.role
  }
}

export default connect<MapState, MapDispatch, {}, RootState>(mapState,{getInit})(App)

type MapState = {
  isAuth: boolean
  role: string
}
type MapDispatch = {
  getInit: () => void
}
type CommonProps = MapState&MapDispatch