import React, { FC } from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import { ValidatorInput } from '../VaidatorInfo/ValidatorInfo';
import { required } from '../../validators/validators';
import {getAuth} from '../../redux/reducers/authReducer'
import c from './login.module.css';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reduxStore';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    formBtn: {
        display:'block',
        width: '100px',
        height: '30px',
        border: 'none',
        backgroundColor: 'rgb(117, 151, 182)',
        boxShadow: '2px 2px 4px #000',
        color: '#fff',
        cursor: 'pointer',
        outline: 'none',
        marginTop:'10px'
    }
})

const LoginReduxForm:FC<InjectedFormProps<ValueForm>> = (props) => {
    const{handleSubmit, error} = props;

    return (
        <form className={c.form} onSubmit={handleSubmit}>
            <Field 
                name="login" 
                component={ValidatorInput} 
                type="text" 
                placeholder="Login"
                validate={[required]}/>
            <Field 
                name="password" 
                component={ValidatorInput} 
                type="password" 
                placeholder="Password"
                validate={[required]}/>  
            <button className={c.formBtn}>Login</button>   
            {error? <span className={c.commonError}>Wrong login or password</span>:null}
        </form>
    )
}
const LoginForm = reduxForm<ValueForm>({
    form: 'login'
})(LoginReduxForm)


const Login:FC<CommonProps> = (props) => {

    const classes = useStyles()

    const onSubmit = (value:ValueForm) => {
        props.getAuth(value)
    }
    if(props.isAuth) return <Redirect to='/reader'/>
    return (
        <div style={{height:'100vh', paddingTop:'100px'}}>
            <div className={c.formWrapper}>
                <h1 className={c.title}>Login</h1>
                <LoginForm onSubmit={onSubmit}/>
                <Link to='/register'>
                    <button className={classes.formBtn}>
                        Register
                    </button>
                </Link>
            </div>
        </div>
    )
}   
const mapStateToProps = (state:RootState):MapState => {
    return {
        isAuth: state.auth.isAuth
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
}

type CommonProps = MapDispatch&MapState