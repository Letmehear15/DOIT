import { usersAPI } from "../../api/serviceApi";
import { Register } from "../../types/Auth";
import { ActionThunkType, AllActions } from "../reduxStore";

const SETUSERS = 'SETUSERS'

const initialState = {
    users: [] as any
}

export const userReducer = (state=initialState, action:ActionsAuth):StateAuth => {
    switch(action.type) {
        case SETUSERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        default: {
            return state
        }
    }
}

const allActionCreaters = {
    setUsers: (payload:any) => ({type: SETUSERS, payload} as const),
}

/////////
//THUNK//
/////////

export const getUsers = ():UsersThunkType => async dispatch => {
    const data = await usersAPI.getUsers()
    dispatch(allActionCreaters.setUsers(data))
}

export const deleteUser = (id:string):UsersThunkType => async dispatch => {
    await usersAPI.deleteUser(id)
    dispatch(getUsers())
}

export const changeRole = (id:string, role:string):UsersThunkType => async dispatch => {
    await usersAPI.changeRole(id, role)
    dispatch(getUsers())
}

export const newUser = (payload:Register):UsersThunkType => async dispatch => {
    await usersAPI.getRegister(payload)
    dispatch(getUsers())
}
type ActionsAuth = ReturnType<AllActions<typeof allActionCreaters>>
type StateAuth = typeof initialState
type UsersThunkType = ActionThunkType<ActionsAuth>
