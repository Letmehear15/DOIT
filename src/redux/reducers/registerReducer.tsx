import { getUserAuth } from "../../api/serviceApi";
import { Register } from "../../types/Auth";
import { ActionThunkType, AllActions } from "../reduxStore";

const SETREGISTER = 'SETREGISTER';


const initialState = {
    isOk: false
}

export const registerReducer = (state = initialState, action:RegisterAction):StateRegister => {
    switch(action.type) {
        case SETREGISTER: {
            return {
                ...state,
                isOk: true
            }
        }
        default: 
            return state
    }

}

const allActionCreators = {
    setRegister:() => ({type:SETREGISTER})
}

/////////
//THUNK//
/////////

export const toRegister = (dataRegister: Register):RegisterThunk => async (dispatch) => {
    const data = await getUserAuth.getRegister(dataRegister)
    if(data)
        dispatch(allActionCreators.setRegister())
}

type RegisterAction = ReturnType<AllActions<typeof allActionCreators>>
type StateRegister = typeof initialState
type RegisterThunk = ActionThunkType<RegisterAction>
