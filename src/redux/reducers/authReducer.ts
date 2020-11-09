import { FormAction, stopSubmit } from "redux-form";
import { Auth } from "../../types/Auth";
import { ActionThunkType, AllActions } from "../reduxStore";

const SETAUTH = 'SETAUTH'
const SETLOGOUT = 'SETLOGOUT'

const users = [
    {
        login: 'alex',
        password: 'alex',
        role: 'reader'
    }
]

const initialState = {
    login: null as null | string,
    password: null as null | string,
    isAuth: false,
    role: '' 
}

export const authReducer = (state=initialState, action:ActionsAuth):StateAuth => {
    switch(action.type) {
        case SETAUTH: {
            return {
                ...state,
                ...action.payLoad
            }
        }
        case SETLOGOUT: {
            return {
                ...state,
                login: null,
                password: null,
                isAuth:false,
                role:''
            }
        }
        default: {
            return state
        }
    }
}

const allActionCreaters = {
    setAuth:(payLoad:PayLoad) => ({type:'SETAUTH', payLoad} as const) ,
    setLogOut:() => ({type:'SETLOGOUT'} as const) 
}

export const logOut = allActionCreaters.setLogOut;
/////////
//THUNK//
/////////
export const getAuth = (value: Auth):AuthThunkType => async (dispatch) => {
    const isAuth = users.some(user => user.login===value.login&&user.password===value.password)
    if(isAuth) {
        dispatch(allActionCreaters.setAuth({
            isAuth:true,
            login:value.login,
            password:value.password,
            role: users[0].role
        }))
    } else {
        dispatch(stopSubmit('login', {_error:'Wrong login or Password'}))
    }
}

type ActionsAuth = ReturnType<AllActions<typeof allActionCreaters>>
type StateAuth = typeof initialState
type AuthThunkType = ActionThunkType<ActionsAuth|FormAction>
type PayLoad = {
    login: string,
    password: string
    role:string
    isAuth: boolean
}