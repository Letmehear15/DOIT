import { articlesAPI } from "../../api/serviceApi";
import { Articles } from "../../types/Articles";
import { ActionThunkType, AllActions } from "../reduxStore";

const SETARTICLES = 'SETARTICLES';


const initialState = {
    articles: [] as Array<Articles>
}

export const articlesReducer = (state = initialState, action:ArticlesAction):StateArticles => {
    switch(action.type) {
        case SETARTICLES: {
            return {
                ...state,
                articles: action.payload
            }
        }
        default: 
            return state
    }

}

const allActionCreators = {
    setArticles:(payload:Array<Articles>) => ({type:SETARTICLES, payload})
}

/////////
//THUNK//
/////////

export const getArticles = ():ArticlesThunk => async (dispatch) => {
    const data = await articlesAPI.getArticles()
    dispatch(allActionCreators.setArticles(data.articles))
}

type ArticlesAction = ReturnType<AllActions<typeof allActionCreators>>
type StateArticles = typeof initialState
type ArticlesThunk = ActionThunkType<ArticlesAction>
