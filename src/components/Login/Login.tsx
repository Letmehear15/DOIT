import React, { FC } from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import { ValidatorInput } from '../VaidatorInfo/ValidatorInfo';
import {getAuth} from '../../redux/reducers/authReducer'
import c from './login.module.css';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reduxStore';
import { Link, Redirect } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Button, Container, CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight:'100%'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    link: {
        color: theme.palette.type==='dark'? '#fff': '#000',
        textDecoration: 'none'
    }
  }));

const LoginReduxForm:FC<InjectedFormProps<ValueForm>> = (props) => {
    const{handleSubmit, error} = props;
    const classes = useStyles()
    return (
        <Container component="main" maxWidth="xs" style={{minHeight:'100vh', paddingTop:'30px'}}>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography> 
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Field 
                        name="login" 
                        component={ValidatorInput} 
                        type="text" 
                        placeholder="Login"
                        />
                    <Field 
                        name="password" 
                        component={ValidatorInput} 
                        type="password" 
                        placeholder="Password"
                        />  
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        type="submit"
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link to="/register" className={classes.link}>
                                "Don't have an account? Sign Up"
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container style={{marginTop:20}}>
                        <Grid item>
                            <Link to="/home" className={classes.link}>
                                Home page
                            </Link>
                        </Grid>
                    </Grid>
                    {error? <span className={c.commonError}>Wrong login or password</span>:null}
                </form>
            </div>
        </Container>
    )
}
const LoginForm = reduxForm<ValueForm>({
    form: 'login'
})(LoginReduxForm)

const Login:FC<CommonProps> = (props) => {
    const onSubmit = (value:ValueForm) => {
        props.getAuth(value)
    }
    if(props.isAuth) return <Redirect to='/home'/>
    return (
        <LoginForm onSubmit={onSubmit}/>
    )
}   
const mapStateToProps = (state:RootState):MapState => {
    return {
        isAuth: state.auth.isAuth,
        isDark: state.articles.isDark
    }
}
export default connect<MapState, MapDispatch,{},RootState>(mapStateToProps, {getAuth})(Login);

type ValueForm = {
    login: string
    password: string
}

type MapDispatch = {
    getAuth: (value:ValueForm) => void
}

type MapState = {
    isAuth: boolean
    isDark: boolean
}

type CommonProps = MapDispatch&MapState