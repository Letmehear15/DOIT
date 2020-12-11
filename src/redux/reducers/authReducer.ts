import { FormAction, stopSubmit } from "redux-form";
import { getUserAuth } from "../../api/serviceApi";
import { Auth } from "../../types/Auth";
import { ActionThunkType, AllActions } from "../reduxStore";

const SETAUTH = 'SETAUTH'
const SETLOGOUT = 'SETLOGOUT'

const initialState = {
    authorId: null as string | null,
    login: "alex" as null | string,
    password: null as null | string,
    isAuth: false,
    role: '' ,
    isAuthor: false,
    isReader: false,
    isEditor: false,
}

export const authReducer = (state=initialState, action:ActionsAuth):StateAuth => {
    switch(action.type) {
        case SETAUTH: {
            return {
                ...state,
                ...action.payLoad,
                authorId: action.payLoad.authorId,
                isAuthor: action.payLoad.isAuthor,
                isReader: action.payLoad.isReader,
                isEditor: action.payLoad.isEditor,
            }
        }
        case SETLOGOUT: {
            return {
                ...state,
                login: null,
                password: null,
                isAuth:false,
                role:'',
                isAuthor: false,
                isReader: false,
                isEditor: false,
            }
        }
        default: {
            return state
        }
    }
}

const allActionCreaters = {
    setAuth:(payLoad:PayLoad) => ({type:'SETAUTH', payLoad} as const) ,
    setLogOut:() => {
        localStorage.removeItem('id')
        return {type:'SETLOGOUT'} as const
    }
}

export const logOut = allActionCreaters.setLogOut;
/////////
//THUNK//
/////////
export const getAuth = (value: Auth):AuthThunkType => async (dispatch) => {
    const data =  await getUserAuth.getAuth(value)
    
    if(data.isAuth) {
        localStorage.setItem('login', `${value.login}`);
        localStorage.setItem('password', `${value.password}`);
        let authorId = data.id ? data.id : null
        dispatch(allActionCreaters.setAuth({
            isAuth:true,
            login: value.login,
            password:value.password,
            role: data.role,
            isAuthor: data.isAuthor,
            isReader: data.isReader,
            isEditor: data.isEditor,
            authorId
        }))
    } else {
        dispatch(stopSubmit('login', {_error:'Wrong login or Password'}))
    }
}

export const getInit = ():AuthThunkType => async dispatch => {
    const login = localStorage.getItem('login')
    const password = localStorage.getItem('password')
    
    if(password&&login) {
        dispatch(getAuth({login,password}))
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
    isAuthor: boolean,
    isReader: boolean,
    isEditor: boolean,
    authorId: string | null
}