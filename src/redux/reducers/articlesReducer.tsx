import { articlesAPI } from "../../api/serviceApi";
import { Articles } from "../../types/Articles";
import { ActionThunkType, AllActions } from "../reduxStore";
import { SaveNewArticle } from '../../types/Articles'

const SETARTICLES = 'SETARTICLES';
const SETFULLARTICLE = 'SETFULLARTICLE';
const SETDARK = 'SETDARK';


const initialState = {
    articles: [] as Array<Articles>,
    fullArticle: {} as Articles,
    isDark: false
}

export const articlesReducer = (state = initialState, action:ArticlesAction):StateArticles => {
    switch(action.type) {
        case SETARTICLES: {
            return {
                ...state,
                articles: action.payload
            }
        }
        case SETFULLARTICLE: {
            return {
                ...state,
                fullArticle: action.fullArticle
            }
        }
        case SETDARK: {
            return {
                ...state,
                isDark: !state.isDark
            }
        }
        default: 
            return state
    }

}

const allActionCreators = {
    setArticles:(payload:Array<Articles>) => ({type:SETARTICLES, payload} as const),
    setFullArticle:(fullArticle:Articles) => ({type:SETFULLARTICLE, fullArticle} as const),
    setDark:() => ({type:SETDARK} as const),
}

export const setDarkMode = allActionCreators.setDark
/////////
//THUNK//
/////////

export const getArticles = (id=''):ArticlesThunk => async (dispatch) => {
    const data = await articlesAPI.getArticles()
    dispatch(allActionCreators.setArticles(data.articles))
}

export const postArticle = (value:SaveNewArticle):ArticlesThunk => async dispatch => {
    await articlesAPI.postArticle(value)
    dispatch(getArticles())
}

export const deleteArticle = (id:string):ArticlesThunk => async dispatch => {
    await articlesAPI.deleteArticle(id)
    dispatch(getArticles())
}

export const getFullArticle = (id=''):ArticlesThunk => async (dispatch) => {
    const data = await articlesAPI.getFullArticle(id);
    dispatch(allActionCreators.setFullArticle({
        title: data.title,
        descr: data.description,
        id: data.id,
        comments: data.comments,
        author: data.author
    }))
}

type ArticlesAction = ReturnType<AllActions<typeof allActionCreators>>
type StateArticles = typeof initialState
type ArticlesThunk = ActionThunkType<ArticlesAction>
