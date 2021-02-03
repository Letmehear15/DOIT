import { journalAPI } from "../../api/serviceApi";
import { ActionThunkType, AllActions } from "../reduxStore";

const SETJOURNAL = 'SETJOURNAL';


const initialState = {
    journals: [] as any
}

export const journalReducer = (state = initialState, action:JournalAction):StateJournal => {
    switch(action.type) {
        case SETJOURNAL: {
            return {
                ...state,
                journals: action.payload
            }
        }
        default: 
            return state
    }

}

const allActionCreators = {
    setJournals:(payload:any) => ({type:SETJOURNAL, payload})
}

/////////
//THUNK//
/////////

export const setJournals = ():RegisterThunk => async (dispatch) => {
    const data = await journalAPI.getJournals()
    dispatch(allActionCreators.setJournals(data))
}

export const newJournal = (name:string, document:File):RegisterThunk => async dispatch => {
    await journalAPI.newJournal(name, document)
    dispatch(setJournals())
}

export const deleteJournal = (id:string):RegisterThunk => async dispatch => {
    await journalAPI.deleteJournal(id)
    dispatch(setJournals())
}

type JournalAction = ReturnType<AllActions<typeof allActionCreators>>
type StateJournal = typeof initialState
type RegisterThunk = ActionThunkType<JournalAction>
