import { articlesAPI } from "../../api/serviceApi";
import { ArticleEdit, Articles } from "../../types/Articles";
import { ActionThunkType, AllActions } from "../reduxStore";
import { SaveNewArticle } from '../../types/Articles'
import { CommentsType } from "../../types/Comments";

const SETARTICLES = 'SETARTICLES';
const SETFULLARTICLE = 'SETFULLARTICLE';
const SETDARK = 'SETDARK';
const SETCOMMENT = 'SETCOMMENT';
const EDITARTICLE = 'EDITARTICLE';
const SETLOAD = 'SETLOAD';


const initialState = {
    articles: [] as Array<Articles>,
    fullArticle: {} as Articles,
    comments: [] as Array<CommentsType>,
    isDark: false,
    isLoad: true
}

export const articlesReducer = (state = initialState, action:ArticlesAction):StateArticles => {
    switch(action.type) {
        case SETARTICLES: {
            return {
                ...state,
                articles: action.payload,
            }
        }
        case SETFULLARTICLE: {
            return {
                ...state,
                fullArticle: action.fullArticle
            }
        }
        case SETCOMMENT: {
            return {
                ...state,
                comments: action.comments
            }
        }
        case EDITARTICLE: {
            return {
                ...state,
                fullArticle: {
                    ...state.fullArticle,
                    ...action.payload
                }
            }
        }
        case SETLOAD: {
            return {
                ...state,
                isLoad: action.prop
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
    setComments:(comments:Array<CommentsType>) => ({type:SETCOMMENT, comments} as const),
    editArticle:(payload:ArticleEdit) => ({type:EDITARTICLE, payload} as const),
    setLoad:(prop:boolean) => ({type:SETLOAD, prop} as const),
    setDark:() => ({type:SETDARK} as const),
}

export const setDarkMode = allActionCreators.setDark
export const setLoad = allActionCreators.setLoad
/////////
//THUNK//
/////////

export const getArticles = (id=''):ArticlesThunk => async (dispatch) => {
    const data = await articlesAPI.getArticles()
    dispatch(allActionCreators.setArticles(data.articles))
}

export const getComments = (id:any):ArticlesThunk => async (dispatch) => {
    const comments = await articlesAPI.getArticles()
    const currentArticle = comments.articles.filter(article => article.id===+id)
    dispatch(allActionCreators.setComments(currentArticle[0].comments))
}

export const postArticle = (value:SaveNewArticle):ArticlesThunk => async dispatch => {
    await articlesAPI.postArticle(value)
    dispatch(getArticles())
}

export const deleteArticle = (id:string):ArticlesThunk => async dispatch => {
    await articlesAPI.deleteArticle(id)
    dispatch(getArticles())
}
export const postComments = (id: string|number, autor:string|null, text:string):ArticlesThunk => async dispatch => {
    await articlesAPI.postComment(id, autor, text)
    dispatch(getComments(id))
}
export const editArticle = (payload: ArticleEdit):ArticlesThunk => async dispatch => {
    dispatch(allActionCreators.setLoad(true))
    const data = await articlesAPI.editArticle(payload)
    dispatch(allActionCreators.setLoad(false))
    debugger
    return 
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
    dispatch(allActionCreators.setLoad(false))
}

type ArticlesAction = ReturnType<AllActions<typeof allActionCreators>>
type StateArticles = typeof initialState
type ArticlesThunk = ActionThunkType<ArticlesAction>