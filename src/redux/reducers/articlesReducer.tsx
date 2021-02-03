import { articlesAPI } from "../../api/serviceApi";
import { ArticleEdit, Articles } from "../../types/Articles";
import { ActionThunkType, AllActions } from "../reduxStore";
import { SaveNewArticle } from '../../types/Articles'
import { CommentsType } from "../../types/Comments";
import { STAGEMAP } from '../../Helps/StageMap'

const SETARTICLES = 'SETARTICLES';
const SETFULLARTICLE = 'SETFULLARTICLE';
const SETDARK = 'SETDARK';
const SETCOMMENT = 'SETCOMMENT';
const EDITARTICLE = 'EDITARTICLE';
const SETLOAD = 'SETLOAD';
const SETDELETE = 'SETDELETE';
const SETSTAGE = 'SETSTAGE';
const SETNEWREVIEW = 'SETNEWREVIEW';


const initialState = {
    articles: [] as Array<Articles>,
    fullArticle: {} as Articles,
    comments: [] as Array<CommentsType>,
    review: {} as any,
    stage: "0",
    isDark: false,
    isLoad: true,
    isDelete: false
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
        case SETDELETE: {
            return {
                ...state, 
                isDelete: action.prop
            }
        }
        case SETSTAGE: {
            return {
                ...state,
                stage: action.stage
            }
        }
        case SETNEWREVIEW: {
            return {
                ...state,
                review: action.arr
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
    setDark:(prop:boolean) => ({type:SETDARK} as const),
    setDelete: (prop: boolean) => ({type: SETDELETE, prop} as const),
    setStage: (stage: STAGEMAP) => ({type: SETSTAGE, stage} as const),
    setNewReview: (arr: any) => ({type: SETNEWREVIEW, arr} as const),
}

export const setDarkMode = allActionCreators.setDark
export const setLoad = allActionCreators.setLoad

/////////
//THUNK//
/////////

export const getArticles = ():ArticlesThunk => async (dispatch) => {
    dispatch(allActionCreators.setDelete(false))
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
    dispatch(allActionCreators.setDelete(true))
}
export const postComments = (id: string|number, autor:string|null, text:string):ArticlesThunk => async dispatch => {
    await articlesAPI.postComment(id, autor, text)
    dispatch(getComments(id))
}
export const editArticle = (payload: ArticleEdit):ArticlesThunk => async dispatch => {
    dispatch(allActionCreators.setLoad(true))
    await articlesAPI.editArticle(payload)
    dispatch(allActionCreators.setLoad(false))
}

export const getFullArticle = (id=''):ArticlesThunk => async (dispatch) => {
    dispatch(allActionCreators.setLoad(true))
    const data = await articlesAPI.getFullArticle(id);
    dispatch(allActionCreators.setFullArticle({
        title: data.title,
        descr: data.descr,
        id: data.id,
        comments: data.comments,
        author: data.author,
        stage: data.stage,
        review: data.review,
        category: data.category
    }))
    dispatch(allActionCreators.setLoad(false))
}

export const editStage = (id: number|string, stage:STAGEMAP):ArticlesThunk => async dispatch => {
    await articlesAPI.editStage(stage, id)
    dispatch(allActionCreators.setStage(stage))
}

export const getReview = (id: string):ArticlesThunk => async dispatch => {
    const data = await articlesAPI.getReview(id)
    dispatch(allActionCreators.setNewReview(data))
}

export const newReview = (articleId:string, userId:string, review:string):ArticlesThunk => async dispatch => {
    await articlesAPI.postNewReview(articleId, userId, review)
    dispatch(getArticles())
}   

export const setEditReview = (id:string, text:string):ArticlesThunk => async dispatch => {
    await articlesAPI.editReview(id, text)
    dispatch(getArticles())
}

export const sendArticle = (idArticle:string, idReviewer:string):ArticlesThunk => async dispatch => {
    await articlesAPI.sendArticle(idArticle, idReviewer)
}

type ArticlesAction = ReturnType<AllActions<typeof allActionCreators>>
type StateArticles = typeof initialState
type ArticlesThunk = ActionThunkType<ArticlesAction>