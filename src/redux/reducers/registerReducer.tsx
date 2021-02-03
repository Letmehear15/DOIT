import { getUserAuth } from "../../api/serviceApi";
import { Register } from "../../types/Auth";
import { ActionThunkType, AllActions } from "../reduxStore";

const SETREGISTER = 'SETREGISTER';
const SETERROR = 'SETERROR';


const initialState = {
    isOk: false,
    error: false
}

export const registerReducer = (state = initialState, action:RegisterAction):StateRegister => {
    switch(action.type) {
        case SETREGISTER: {
            return {
                ...state,
                isOk: true,
                error: false
            }
        }
        case SETERROR: {
            return {
                ...state,
                error:true
            }
        }
        default: 
            return state
    }

}

const allActionCreators = {
    setRegister:() => ({type:SETREGISTER}),
    setError: () => ({type:SETERROR})
}

/////////
//THUNK//
/////////

export const toRegister = (dataRegister: Register):RegisterThunk => async (dispatch) => {
    const data = await getUserAuth.getRegister(dataRegister)
    if(data.isSave) {
        dispatch(allActionCreators.setRegister())
    }
    else {
        dispatch(allActionCreators.setError())
    }
}

type RegisterAction = ReturnType<AllActions<typeof allActionCreators>>
type StateRegister = typeof initialState
type RegisterThunk = ActionThunkType<RegisterAction>
