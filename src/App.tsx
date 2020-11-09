import React, { FC } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login/Login'
import ReaderContainer from './components/Reader/ReaderContainer';
import { RootState } from './redux/reduxStore';
import {
  Route,
  Redirect
} from "react-router-dom";

const App:FC<CommonProps> = (props) => {
  return (
    <div>
      <Route path='/reader' component={() => <ReaderContainer/>}/>
      <Route path='/login' component={() => <Login/>}/>
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

export default connect<MapState, {}, {}, RootState>(mapState,{})(App)

type MapState = {
  isAuth: boolean
  role: string
}
type CommonProps = MapState