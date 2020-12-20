import React, { FC } from 'react';
import { Field, reduxForm, InjectedFormProps, formValueSelector, WrappedFieldInputProps } from 'redux-form'
import { ValidatorInput } from '../VaidatorInfo/ValidatorInfo';
import c from '../Login/login.module.css';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reduxStore';
import {toRegister} from '../../redux/reducers/registerReducer'
import { Link } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {Register} from '../../types/Auth'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Avatar, Button, Container, CssBaseline, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) => ({ 
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
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      }
}))

const LoginReduxForm:FC<InjectedFormProps<ValueForm>> = (props) => {
    const { handleSubmit } = props;
    const classes = useStyles()
    return (
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
            <Field 
                name="role" 
                component={SelectForm}
            />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                type="submit"
            >
                Sign Up
            </Button>
        </form> 
    )
}

type SelectProps = {
    input: WrappedFieldInputProps
    label: string
}

const SelectForm:FC<SelectProps> = ({input, label}) => {
    const classes = useStyles()
 return (
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            {...input}
        >
        <MenuItem value=''></MenuItem>
        <MenuItem value='author'>Author</MenuItem>
        <MenuItem value='editor'>Editor</MenuItem>
        <MenuItem value='reviewer'>Reviewer</MenuItem>
        </Select>
    </FormControl>
 )
}

const LoginForm = reduxForm<ValueForm>({
    form: 'register'
})(LoginReduxForm)

const Login:FC<CommonProps> = (props) => {
    const { login, password, role, isOk } = props
    const classes = useStyles()
    const onSubmit = () => {
        props.toRegister({login, password, role})
    }
    
    return (
        <Container component="main" maxWidth="xs" style={{minHeight:'100vh', paddingTop:'30px'}}>
        <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography> 
                <LoginForm onSubmit={onSubmit}/>
                <Grid container>
                    <Grid item>
                        <Link to="/login" className={classes.link}>
                            Back to login
                        </Link>
                    </Grid>
                </Grid>
                {isOk && <div style={{marginTop:'20px'}}> YOU WERE REGISTERED </div>}
            </div>
        </Container>
    )
}  

const selector = formValueSelector('register') 

const mapStateToProps = (state:RootState):MapState => {
    const login = selector(state, 'login')
    const password = selector(state, 'password')
    const role = selector(state, 'role')

    return {
        isOk: state.register.isOk,
        login,
        password,
        role
    }
}
export default connect<MapState, MapDispatch,{},RootState>(mapStateToProps, {toRegister})(Login);

type ValueForm = {
    login: string
    password: string
    role: string
}

type MapDispatch = {
    toRegister: (value:Register) => void
}

type MapState = {
    isOk: boolean
    login: string
    password: string
    role: string
}

type CommonProps = MapDispatch&MapState