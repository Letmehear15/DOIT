import React, { FC, useState } from 'react';
import { Field, reduxForm, InjectedFormProps, formValueSelector } from 'redux-form'
import { ValidatorInput } from '../VaidatorInfo/ValidatorInfo';
import { required } from '../../validators/validators';
import c from '../Login/login.module.css';
import { connect } from 'react-redux';
import { RootState } from '../../redux/reduxStore';
import {toRegister} from '../../redux/reducers/registerReducer'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Register} from '../../types/Auth'


const useStyles = makeStyles({
    select: {
        width:'200px',
        marginBottom:'20px'
    },
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
    const { handleSubmit } = props;
    const classes = useStyles()
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
            <Field 
                name="role" 
                component='select'
                className={classes.select}>
                <option></option>
                <option value="author">author</option>
                <option value="reader">reader</option>
                <option value="editor">editor</option>
            </Field>
            <button className={c.formBtn}>Register</button>   
        </form>
    )
}

const LoginForm = reduxForm<ValueForm>({
    form: 'register'
})(LoginReduxForm)

const Login:FC<CommonProps> = (props) => {
    const classes = useStyles()
    const { login, password, role, isOk } = props

    const onSubmit = () => {
        props.toRegister({login, password, role})
    }
    
    return (
        <div className={c.formWrapper}>
            <h1 className={c.title}>Register</h1>
            <LoginForm onSubmit={onSubmit}/>
            <Link to='/login'>
                <button className={classes.formBtn}>Back</button>
            </Link>
            {isOk && <div> YOU REGISTERED </div>}
        </div>
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