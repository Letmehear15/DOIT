import { getUserAuth } from "../../api/serviceApi";
import { stopSubmit } from "redux-form";
import { ActionThunkType, AllActions, RootState } from "../reduxStore";

const initialState = {
    login: null as null | string,
    password: null as null | string,
    isAuth: false
}

export const authReducer = (state=initialState, action:ActionsAuth):StateAuth => {
    switch(action.type) {
        default: {
            return state
        }
    }
}

const allActionCreaters = {
    a:() => ({type:'de'})
}


/////////
//THUNK//
/////////
export const getAuth = ():AuthThunkType => async (dispatch) => {
    const isAuth = await getUserAuth.getAuth();
    if(isAuth) console.log(isAuth)
}

type ActionsAuth = ReturnType<AllActions<typeof allActionCreaters>>
type StateAuth = typeof initialState
type AuthThunkType = ActionThunkType<ActionsAuth>